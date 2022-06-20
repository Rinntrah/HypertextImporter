package main;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.StandardOpenOption;
import java.util.ArrayList;
import java.util.List;
import java.util.Map.Entry;
import java.util.function.Consumer;

import org.jsoup.nodes.Element;

import fragmentBuilder.BuiltFragment;
import fragmentBuilder.FragmentBuilderDirector;
import fragmentData.ExtractedData;
import util.ScanFolder;
import util.ScanFolder.VisitedNode;
import util.StringToFileSaveUtils;
import util.TreeGen;
import util.Util;

public class RunExtractor {

	static String ROOT = "";
	static String TEMPLATE_ROOT = "W:\\ws\\HypertextImporter\\Importer3\\WORK\\templatki\\";

	public static void log(Object s) {
		System.out.println(s);
	}

	public static void main(String[] args) {
		// Scan through files and gather html files
		ROOT = new File("WORK").getAbsolutePath() + "\\" + "CagedTexts" + "\\";
		log("ROOT :" + ROOT);

		final File Start = new File(ROOT);
		final ScanFolder ScanFolder = new ScanFolder();
		ArrayList<VisitedNode> result = ScanFolder.traverseAll(Start);
		result = ScanFolder.keepOnlyFilesWithExtension(result, "html");
		log("ScanFolder result:" + result);

//		log("Printing tree.js, it is not saved to a file tho.");
//		TreeGen.main(new String[] { ROOT });

		// Traverse throught html files and gather useful data
		final ArrayList<ExtractedData> extracted = extractData(result);
		log("ExtractedData:" + extracted);

		final File outDir = new File(ROOT + "../OUTPUT/");
		if (!outDir.exists()) {
			outDir.mkdir();
		}

		log("Reading template");
		final String TemplateHtmlInString = readToOneBigString(TEMPLATE_ROOT + "template.html");

		correctLexiaLinksByRemovingParentPath(extracted);

		log("Pasting extracted data into template");
		generateHTMLFromData(outDir, TemplateHtmlInString, extracted);

		log("Generating JS data files");
		generateJSDataFiles(outDir, extracted);

		// log("Pasting CSS");
		// pasteCSS(outDir);
	}

	public static void correctLexiaLinksByRemovingParentPath(ArrayList<ExtractedData> extractedDataList) {

		extractedDataList.forEach(new Consumer<ExtractedData>() {
			@Override
			public void accept(ExtractedData extractedData) {
				List<Element> allA = findAll_A(extractedData.lexiaElement);
				for (Element next : allA) {
					final String val = next.attr("href");
					final String[] arr = val.split("/");

					next.attr("href", arr[arr.length - 1]);

				}
//				extractedData.lexiaElement.getAllElements().attr("href", "XD");				

			}
		});

	}

	private static ArrayList<ExtractedData> extractData(ArrayList<VisitedNode> visited) {

		final ArrayList<ExtractedData> list = new ArrayList<>();
		visited.forEach(new Consumer<VisitedNode>() {
			@Override
			public void accept(VisitedNode visitedNode) {
				log(visitedNode.file);
				final String fileName = visitedNode.file.getName();

				final ExtractedData xtract = new ExtractedData(visitedNode);
				list.add(xtract);
			}
		});

		return list;
	}

	private static String RWithWrap(String what, String toWhat, String inWhat) {
		toWhat = escapeCudzyslow2DlaGenJS(toWhat);
		if (toWhat == null) {
			toWhat = "null";
		} else {
			// wrap in ""
			toWhat = "\"" + toWhat + "\"";
		}

		return inWhat.replace(what, toWhat);
	}

	private static void generateHTMLFromData(File outDir, String templateHTML,
			ArrayList<ExtractedData> extractedDataList) {

		extractedDataList.forEach(new Consumer<ExtractedData>() {
			@Override
			public void accept(ExtractedData next) {
				final BuiltFragment output = FragmentBuilderDirector.makeOutputFragment(next, templateHTML);

				String targetPath = outDir.getAbsolutePath() + "\\" + next.file.getName();
				System.out.println("saving:" + targetPath);
				final File outFile = new File(targetPath);
				StringToFileSaveUtils.trySaveDeleteIfExist(output.htmlFileAsString, outFile);
			}
		});
	}

	private static void generateJSDataFiles(File outDir, ArrayList<ExtractedData> extractedDataList) {
		// Dynamic JS data files
		generateJSInboundOutbound(outDir, extractedDataList);
		generateJSFileNameToFragmentName(outDir, extractedDataList);
		generateJSParentFolderTree(outDir, extractedDataList);
		generateJSDefaultAndOptionalLinks(outDir, extractedDataList);
		generateJSGuards(outDir, extractedDataList);
		generateSTATICJSDataFiles(outDir, extractedDataList);
	}

	static String generatedData = "";

	private static void generateJSInboundOutbound(File outDir, ArrayList<ExtractedData> extractedDataList) {
		// 1.inbound_outbound.js ---- "__.html":[new OutLink("-30-.html", "-30-",
		// null,null)]
		// 1.zaladuj schemat
		String jsTemplate = readToOneBigString(TEMPLATE_ROOT + "JStemplate_inbound_outbound.js");

		// 2.wygeneruj dane do schematu
		generatedData = "";

		extractedDataList.forEach(new Consumer<ExtractedData>() {
			@Override
			public void accept(ExtractedData extractedData) {
				// FOR CAGED TEXTS
				final Element lexiaElement = extractedData.lexiaElement;
				// tutaj getnac wszystkie linki out oraz defaulta
				// ta metoda jest w starym ekstraktorze szukala elementow <p>
				//
				// lexiaElement.getAllElements();
				// find out links

				// new InLink("whetherreport.html","whether report",null,null),
				// new InLink("whetherreport.html","whether report",null,null),
				// new OutLink("whetherreport.html","whether report",null,null)],
				String wzor = "";
				wzor += "\"" + extractedData.fileName + "\"" + ":[\n";

				for (Element nxtA : findAll_A(lexiaElement)) {

					{

						final Element parent = nxtA.parent();
						if (parent != null && parent.tagName().equals("p") && parent.text().contains("default")) {
							// Do something with found DEFAULT-LINK
							System.err.println(extractedData.fileName + "<<<DEFAULT-LINK:" + nxtA.attr("href") + "---"
									+ nxtA.text());
							extractedData.defaultLinkDotHTML = nxtA.attr("href");
							
						} else {
							String href = nxtA.attr("href");
							if (href.isEmpty() == false) {
								System.err.println(extractedData.fileName + "<<<OUT-LINK: href=" + href + "--- text="
										+ nxtA.text());

								String[] splitted = href.split("/");
								href = splitted[splitted.length - 1];

								String re = "new OutLink(\"[TGT_FILENAME]\", \"[REV_TITLE]\", null,null),";

								re = re.replace("[TGT_FILENAME]", href);
								re = re.replace("[REV_TITLE]", escapeCudzyslow(nxtA.text()));

								wzor += re;
							}

							// lexia += "LINK:" + nxt.attr("href") + "---" + nxt.text();
							// ahrefOUTBOUND_Elements.add(nxt);
						}

					}
					// if links is nested in p element with word 'default' then its default
				}
				wzor += "],\n";
				generatedData += wzor;

			}
		});

		jsTemplate = Util.REPL(">{PLACE_TO_PASTE}<", jsTemplate, generatedData);
		// 3.wrzuc w schemat

		File outFile = new File(outDir + "\\inbound_outbound.js");
		StringToFileSaveUtils.trySaveDeleteIfExist(jsTemplate, outFile);

	}

	public static List<Element> findAll_A(Element next) {

		for (Element e : next.select("a")) {
			if (e.tag().normalName().equals("a") == false) {
				throw new IllegalStateException(e.tagName() + "element must be <a> and is not:" + e.html());
			}
			// System.err.println("outerHtml of ahref:" + e.outerHtml());
		}

		return next.select("a");
	}

	private static void generateJSFileNameToFragmentName(File outDir, ArrayList<ExtractedData> extractedDataList) {
		String template = "var FILE_NAME_TO_FRAGMENT_NAME = {INSERT_HERE}";

		String[] arr = new String[1];
		arr[0] = "" + ROOT;
		TreeGen.main(arr);
		log("TreeGen.FILE_NAME_TO_NAME:" + TreeGen.FILE_NAME_TO_NAME);

		String data = "";// new String(new byte[10], StandardCharsets.UTF_8);
		for (Entry<String, String> string : TreeGen.FILE_NAME_TO_NAME.entrySet()) {
			String wzor = "\n" + "\"A\"" + ":" + "\"[BBBBBBBB]\"";
			wzor = wzor.replace("A", escapeCudzyslow(string.getKey()));
//			String[] splitted = string.getValue().split("/");
//splitted[splitted.length - 1]
			wzor = wzor.replace("[BBBBBBBB]", escapeCudzyslow(string.getValue()));

			data += wzor + ",";
		}
		template = template.replace("INSERT_HERE", data);

		File outFile = new File(outDir + "\\FileNameToFragmentName.js");
		template += "\n";
		template += "function htmlFileNameToFragmentName(x) {\r\n" + "    return FILE_NAME_TO_FRAGMENT_NAME[x];\r\n"
				+ "}";

		StringToFileSaveUtils.trySaveDeleteIfExist(template, outFile);
	}

	private static void generateJSParentFolderTree(File outDir, ArrayList<ExtractedData> extractedDataList) {
		String[] arr = new String[1];
		arr[0] = "" + ROOT;
		TreeGen.main(arr);

		File outFile = new File(outDir + "\\ParentFolderTree.js");
		StringToFileSaveUtils.trySaveDeleteIfExist(TreeGen.TreeJSResult, outFile);

	}

	private static void generateJSDefaultAndOptionalLinks(File outDir, ArrayList<ExtractedData> extractedDataList) {
		String template = "class FragmentHrefs{\r\n" + "	constructor(map){\r\n" + "		this.map=map;\r\n"
				+ "	}\r\n" + "	\r\n" + "	map=null\r\n" + "	\r\n" + "	toString(){\r\n"
				+ "		let clzname=this.constructor.name;\r\n" + "		return \"\"+clzname+\"map=\"+map;\r\n"
				+ "	}\r\n" + "	\r\n" + "}\r\n" + "\r\n"
				+ "//reprezentuje hrefy, które wczeœniej znajdowa³y sie w stopce\r\n" + "var FRAGMENT_HREFS  = {\r\n"
				+ "	//\"TEST.html\":{0:\"something.html\",1:\"otherthings.html\"},\r\n" + "	>{PLACE_TO_PASTE}<\r\n"
				+ "\r\n" + "};\r\n" + "\r\n" + "";

		String data = "";
		// //"TEST.html":{0:"something.html",1:"otherthings.html"},
		// TYLKO DEFAULT LIKI
		// "TEST.html":{0:"something.html"},

		for (ExtractedData extractedData : extractedDataList) {
			String wzor = "\n" + "\"[A]\"" + ":" + "{0:\"[BBBBBBBB]\"}";
			wzor = wzor.replace("[A]", escapeCudzyslow("" + extractedData.fileName));
			wzor = wzor.replace("[BBBBBBBB]", escapeCudzyslow("" + extractedData.defaultLinkDotHTML));
			data += wzor + ",";
		}

		template = template.replace(">{PLACE_TO_PASTE}<", data);

		final File outFile = new File(outDir + "\\DefaultAndOptionalLinks.js");
		StringToFileSaveUtils.trySaveDeleteIfExist(template, outFile);
	}

	private static void generateJSGuards(File outDir, ArrayList<ExtractedData> extractedDataList) {
		String template = "class Guard{\r\n" + "	constructor(q,rev,title,txt){\r\n" + "		this.q=q;\r\n"
				+ "	}\r\n" + "	\r\n" + "	q=null\r\n" + "	\r\n" + "}\r\n" + "\r\n" + "var GUARDS  = {\r\n"
				+ "	//\"NAZWA.html\":\"tu idzie guard\",\r\n" + ">{PLACE_TO_PASTE}<\r\n" + "};\r\n" + "\r\n"
				+ "console.log(\"GUARDS:\")\r\n" + "\r\n" + "";

		String data = "";

		for (ExtractedData extractedData : extractedDataList) {
			String wzor = "\n" + "\"A\"" + ":" + "\"[BBBBBBBB]\"";
			wzor = wzor.replace("A", escapeCudzyslow(extractedData.fileName));
			wzor = wzor.replace("[BBBBBBBB]", escapeCudzyslow("0"));
			data += wzor + ",";
		}

		template = template.replace(">{PLACE_TO_PASTE}<", data);

		final File outFile = new File(outDir + "\\Guards.js");
		StringToFileSaveUtils.trySaveDeleteIfExist(template, outFile);
	}

	private static void copy(File src, File dest) throws IOException {
		InputStream is = null;
		OutputStream os = null;
		try {
			is = new FileInputStream(src);
			os = new FileOutputStream(dest);
			// buffer size 1K byte[]
			byte[] buf = new byte[1024];
			int bytesRead;
			while ((bytesRead = is.read(buf)) > 0) {
				os.write(buf, 0, bytesRead);
			}
		} finally {
			is.close();
			os.close();
		}
	}

	public static void xcopy(final File sourceDir, final File outDir) {
		for (final File next : sourceDir.listFiles()) {
			final File dest = new File(outDir.getAbsolutePath() + "\\" + next.getName());
			if (next.isDirectory()) {
				File targetDir = new File(outDir.getAbsolutePath() + "\\" + next.getName());
				targetDir.mkdirs();
				xcopy(next, targetDir);
				continue;
			}
			try {
				copy(next, dest);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

	private static void generateSTATICJSDataFiles(File outDir, ArrayList<ExtractedData> extractedDataList) {
		final String staticFilesPath = TEMPLATE_ROOT + "static";

		final File source = new File(staticFilesPath);
		xcopy(source, outDir);

		// Static JS files
		// Inne sta³e bez kontentu
		// 1HierarchyMap
		// 2InboundOutboundMap
		// 3linki
		// 4main
		// 5MapModal
		// 6MapWindow
		// 7map
	}

	private static void pasteCSS(File outDir) {

	}

	private static String readToOneBigString(String X) {
		try {
			String TemplateHtmlInString = Util.readFileToOneBigString(new File(X), StandardCharsets.UTF_8);
			return TemplateHtmlInString;
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}

	public static String escapeCudzyslow2DlaGenJS(String s) {
		if (s == null)
			return null;
		return s
		// .replace("\\", "\\\\")
//	          .replace("\t", "\\t")
//	          .replace("\b", "\\b")
//	          .replace("\n", "\\n")
//	          .replace("\r", "\\r")
//	          .replace("\f", "\\f")
				.replace("\'", "\\'").replace("\"", "\\\"").replace("\n", "\\n");
	}

	public static String escapeCudzyslow(String s) {
		if (s == null)
			return null;
		return s
		// .replace("\\", "\\\\")
//	          .replace("\t", "\\t")
//	          .replace("\b", "\\b")
//	          .replace("\n", "\\n")
//	          .replace("\r", "\\r")
//	          .replace("\f", "\\f")
//	          .replace("\'", "\\'")
				.replace("\"", "\\\"");
	}

}
