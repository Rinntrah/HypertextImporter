package main;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.function.Consumer;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import extractionStrategy.CagedTextsTemplateMethod;
import extractionStrategy.ExtractionTemplateMethod;
import fragmentBuilder.BuiltFragment;
import fragmentBuilder.FragmentBuilderDirector;
import fragmentData.ExtractedData;
import util.ScanFolder;
import util.TreeGen;
import util.Util;
import util.ScanFolder.VisitedNode;
import util.StringToFileSaveUtils;

public class RunExtractor {

	static String JS_TEMPLATE_HREFS;
	static String JS_TEMPLATE_IO;
	static String JS_TEMPLATE_GUARDS;
	static final String ROOT = "W:\\ws\\Importer3\\WORK\\CagedTexts\\";

	public static void log(Object s) {
		System.out.println(s);
	}

	public static void main(String[] args) {
		// Scan through files and gather html files
		final File Start = new File(ROOT);
		final ScanFolder ScanFolder = new ScanFolder();
		ArrayList<VisitedNode> result = ScanFolder.traverseAll(Start);
		result = ScanFolder.keepOnlyFilesWithExtension(result, "html");
		log("ScanFolder result:" + result);

		log("Reading template");
		final String TemplateHtmlInString = readToOneBigString(ROOT + "template.html");

		log("Reading JS_TEMPLATE_HREFS");
		JS_TEMPLATE_HREFS = readToOneBigString(ROOT + "JStemplate_hrefs.js");
		log("Reading JS_TEMPLATE_IO");
		JS_TEMPLATE_IO = readToOneBigString(ROOT + "JStemplate_inbound_outbound.js");
		log("Reading JS_TEMPLATE_GUARDS");
		JS_TEMPLATE_GUARDS = readToOneBigString(ROOT + "JStemplate_guards.js");

		log("Printing tree.js, it is not saved to a file tho.");
		TreeGen.main(new String[] { ROOT });

		// Traverse throught html files and gather useful data
		ArrayList<ExtractedData> extracted = extractData(result);
		log("ExtractedData:" + extracted);

		final File outDir = new File(ROOT + "OUTPUT/");
		if (!outDir.exists()) {
			outDir.mkdir();
		}

		log("Pasting extracted data into template");
		generateHTMLFromData(outDir, TemplateHtmlInString, extracted);

		log("Pasting CSS");
		pasteCSS(outDir);
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
