package extractionStrategy;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import util.ScanFolder.VisitedNode;
import util.Util;

public class HTMLExtractionTemplateMethod {

	void crash() {
		throw new IllegalStateException();
	}

	public Element findLexiaElement(Document document) {
		final Elements eLeksjas = document.getElementsByClass("leksja");
		final Element e = eLeksjas.get(0);

		if (e == null) {
			crash();
		}

		return e;
	}

	public String getBigString(final VisitedNode visitedNode) {
		try {
			final String oneBigString = Util.readFileToOneBigString(visitedNode.file, StandardCharsets.UTF_8);
			return oneBigString;
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}

}
