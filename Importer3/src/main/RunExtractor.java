package main;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.StandardOpenOption;
import java.util.ArrayList;
import java.util.List;
import java.util.Map.Entry;
import java.util.function.Consumer;
import java.util.regex.Pattern;

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
	static String TEMPLATE_ROOT = "W:\\ws\\HypertextImporter\\Importer3\\src\\templatki\\";

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

		log("Printing tree.js, it is not saved to a file tho.");
		TreeGen.main(new String[] { ROOT });

		// Traverse throught html files and gather useful data
		final ArrayList<ExtractedData> extracted = extractData(result);
		log("ExtractedData:" + extracted);

		final File outDir = new File(ROOT + "../OUTPUT/");
		if (!outDir.exists()) {
			outDir.mkdir();
		}

		log("Reading template");
		final String TemplateHtmlInString = readToOneBigString(TEMPLATE_ROOT + "template.html");

		log("Pasting extracted data into template");
		generateHTMLFromData(outDir, TemplateHtmlInString, extracted);

		log("Generating JS data files");
		generateJSDataFiles(outDir, extracted);

		// log("Pasting CSS");
		// pasteCSS(outDir);
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

				final File outFile = new File(outDir.getAbsolutePath() + "/" + next.fileName);
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

				for (Element NEXT : lexiaElement.getAllElements()) {

					for (Element nxtA : findAll_A(NEXT)) {

						final Element parent = nxtA.parent();
						if (parent != null && parent.tagName().equals("p") && parent.text().contains("default")) {
							System.err.println(extractedData.fileName + "<<<DEFAULT-LINK:" + nxtA.attr("href") + "---"
									+ nxtA.text());
						} else {
							String href = nxtA.attr("href");
							if (href.isEmpty() == false) {
								System.err.println(extractedData.fileName + "<<<OUT-LINK: href=" + href + "--- text="
										+ nxtA.text());

								String re = "new OutLink(\"TGT_FILENAME\", \"REV_TITLE\", null,null),";
								re = re.replace("TGT_FILENAME", href);
								re = re.replace("REV_TITLE", escapeCudzyslow(nxtA.text()));
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

	}

	private static void generateJSParentFolderTree(File outDir, ArrayList<ExtractedData> extractedDataList) {
		// 2.FILE_NAME_TO_FRAGMENT_NAME.js ---- var INBOUND_OUTBOUND_MAP = {

	}

	private static void generateJSDefaultAndOptionalLinks(File outDir, ArrayList<ExtractedData> extractedDataList) {
		String template = "var TREE = {INSERT_HERE}";

		String[] arr = new String[1];
		arr[0] = "" + ROOT;
		TreeGen.main(arr);
		log("TreeGen.FILE_NAME_TO_NAME:" + TreeGen.FILE_NAME_TO_NAME);

		String data = "";
		for (Entry<String, String> string : TreeGen.FILE_NAME_TO_NAME.entrySet()) {
			String wzor = "\n" + "\"A\"" + ":" + "\"B\"";
			wzor = wzor.replace("A", escapeCudzyslow(string.getKey()));
			wzor = wzor.replace("B", escapeCudzyslow(string.getKey()));
			data += wzor + ",";
		}
		template = template.replace("INSERT_HERE", data);

		File outFile = new File(outDir + "\\tree.js");
		StringToFileSaveUtils.trySaveDeleteIfExist(template, outFile);
	}

	private static void generateSTATICJSDataFiles(File outDir, ArrayList<ExtractedData> extractedDataList) {
		String staticFilesPath = TEMPLATE_ROOT + "static";

//		File source = new File(TEMPLATE_ROOT + "static");
//		File dest = outDir
//		try {
//			FileUtils.copyDirectory(source, dest);
//		} catch (IOException e) {
//			e.printStackTrace();
//		}

//		for (File next : f.listFiles()) {
//			Files.write(outDir, next, StandardOpenOption.CREATE_NEW);
//		}

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
