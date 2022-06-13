package extractionStrategy;

import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class CagedTextsTemplateMethod extends HTMLExtractionTemplateMethod {

	@Override
	public Element findLexiaElement(Document document) {
		final Elements elements = document.getElementsByTag("body");
		final Element bodyElement = elements.get(0);

		if (bodyElement == null) {
			crash();
		}

		return bodyElement;
	}
	
	

}
