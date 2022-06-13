package fragmentData;

import java.io.File;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

import extractionStrategy.CagedTextsTemplateMethod;
import extractionStrategy.HTMLExtractionTemplateMethod;
import util.ScanFolder.VisitedNode;

public class ExtractedData {

	public String wholeHTMLString;
	public Document htmlDocument;
	public Element lexiaElement;
	public HTMLExtractionTemplateMethod extractionStrategy = new CagedTextsTemplateMethod();
	public String fileName;

	public ExtractedData(VisitedNode visitedNode) {
		extractFromHTML(visitedNode);
	}

	public void extractFromHTML(VisitedNode visitedNode) {
		this.fileName = visitedNode.file.getName();
		this.wholeHTMLString = getHTMLContent(visitedNode);
		this.htmlDocument = parseHTML();
		this.lexiaElement = getLexiaElement();

	}

	@Override
	public String toString() {
		return "ExtractedData[" + "file name:" + fileName + " lexiaElement:" + lexiaElement.toString() + "]";
	}

	private Element getLexiaElement() {
		return extractionStrategy.findLexiaElement(htmlDocument);
	}

	private String getHTMLContent(VisitedNode visitedNode) {
		return extractionStrategy.getBigString(visitedNode);
	}

	private Document parseHTML() {
		return Jsoup.parse(wholeHTMLString);
	}

}
