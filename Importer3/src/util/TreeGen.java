package util;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.regex.Pattern;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

import util.ScanFolder.VisitedNode;

public class TreeGen {
	public static HashMap<String, String> FILE_NAME_TO_NAME = new HashMap<>();

	public static void main(String[] args) {

		final File start = new File(args[0]);
		final ScanFolder sf = new ScanFolder();

		ArrayList<VisitedNode> li = sf.traverseAll(start);
		li = ScanFolder.keepOnlyFilesWithExtension(li, "html");

//		for (final VisitedNode visitedNode : li) {
//			System.err.println("x:" + visitedNode.file);
//		}

		class DictMaker {
			private String src = "";

			public void startAndAppend() {
				src = "var DICT_LEXIA_TO_PARENT_FOLDER  = {";
				src += "\n";
			}

			ArrayList<String> keysInputted = new ArrayList<String>();
			HashMap<String, String> valsOfKeys = new HashMap<>();

			public void addNoAppendYet(String key, String value) {

				valsOfKeys.put(key, value);
				keysInputted.add(key);

			}

			public String end() {
				Collections.sort(keysInputted);

				for (final String KEY : keysInputted) {
					final String O = "\"";
					String value = valsOfKeys.get(KEY);
					value = value.replace("\\", "/");
					src += O + KEY + O + ":" + O + value + O + ",";
					src += "\n";
				}

				src += "};";
				return src;
			}

		}

		final DictMaker dm = new DictMaker();
		dm.startAndAppend();

		for (final VisitedNode visitedNode : li) {
			String[] splitted = visitedNode.file.toString().split(Pattern.quote("\\"));

			final Path rootFolderPath = Path.of(args[0]);
			String relative = rootFolderPath.relativize(visitedNode.file.toPath().getParent()).toString();

			dm.addNoAppendYet(splitted[splitted.length - 1], relative);

			try {
				final String xxx = Util.readFileToOneBigString(visitedNode.file, StandardCharsets.UTF_8);
				final Document XDdoc = Jsoup.parse(xxx);
				final Element ell = wezTitleElement_dziala_tylko_dla_folderu_drzewo(XDdoc);

//				System.err.println(visitedNode.file.getName() + "--->" + (ell != null ? ell.text() : "null ell!!!"));
				FILE_NAME_TO_NAME.put(visitedNode.file.getName(), (ell != null ? ell.text() : "null"));

			} catch (IOException e) {
				e.printStackTrace();
			}

		}

		System.err.println("------------------------");
		String r = dm.end();
		System.err.println(r);

		System.err.println("------------------");

		TreeJSResult = r;
		TreeJSResult += "\n";
		TreeJSResult += "//find ALL keys by value from above dictionary\r\n"
				+ "//zwraca wszystko to, co jest bezpoœrednio w danym folderze\r\n"
				+ "function tree_search_by_value(A) {\r\n"
				+ "    //\r\n"
				+ "    A = A.toLowerCase();\r\n"
				+ "\r\n"
				+ "    if (A.startsWith(\"/\")) {//usun pierwszy /\r\n"
				+ "        A = A.substring(1);\r\n"
				+ "    }\r\n"
				+ "    var li = []\r\n"
				+ "    Object.keys(DICT_LEXIA_TO_PARENT_FOLDER).forEach(function (key) {\r\n"
				+ "        let vall = DICT_LEXIA_TO_PARENT_FOLDER[key];\r\n"
				+ "        vall = vall.toLowerCase();\r\n"
				+ "//		console.log( key+\"--->\"+ vall );\r\n"
				+ "        if (A == vall) {\r\n"
				+ "            li.push(key);\r\n"
				+ "        }\r\n"
				+ "    });\r\n"
				+ "\r\n"
				+ "    return li\r\n"
				+ "\r\n"
				+ "}\r\n"
				+ "\r\n"
				+ "function tree_search_by_value_accept_deep_children(A) {\r\n"
				+ "    //akceptuje, gdy w sciezce gdziekolwiek znajduje sie A\r\n"
				+ "    A = A.toLowerCase();\r\n"
				+ "    if (A.startsWith(\"/\")) {//usun pierwszy /\r\n"
				+ "        A = A.substring(1);\r\n"
				+ "    }\r\n"
				+ "\r\n"
				+ "    var li = []\r\n"
				+ "    Object.keys(DICT_LEXIA_TO_PARENT_FOLDER).forEach(function (key) {\r\n"
				+ "        let vall = DICT_LEXIA_TO_PARENT_FOLDER[key];\r\n"
				+ "        vall = vall.toLowerCase();\r\n"
				+ "\r\n"
				+ "\r\n"
				+ "        if (vall.includes(A)) {//  czy gdziewkolwiek jest '22shortfilms/'\r\n"
				+ "            li.push(key);\r\n"
				+ "        }\r\n"
				+ "    });\r\n"
				+ "\r\n"
				+ "    return li\r\n"
				+ "\r\n"
				+ "}\r\n"
				+ "\r\n"
				+ "\r\n"
				+ "function FindParentPathFromFileName(filename) {\r\n"
				+ "    let found = null;\r\n"
				+ "    Object.keys(DICT_LEXIA_TO_PARENT_FOLDER).forEach(function (key) {\r\n"
				+ "        //if(key.toLowerCase()==filename.toLowerCase()){\r\n"
				+ "        if (key == filename) {\r\n"
				+ "            found = DICT_LEXIA_TO_PARENT_FOLDER[key];\r\n"
				+ "            return\r\n"
				+ "        }\r\n"
				+ "    });\r\n"
				+ "    if (found == null) {\r\n"
				+ "        return FindParentPathFromFileNameLOWERCASE(filename);\r\n"
				+ "    }\r\n"
				+ "    return found\r\n"
				+ "}\r\n"
				+ "\r\n"
				+ "function FindParentPathFromFileNameLOWERCASE(filename) {\r\n"
				+ "    let found = null;\r\n"
				+ "    Object.keys(DICT_LEXIA_TO_PARENT_FOLDER).forEach(function (key) {\r\n"
				+ "        if (key.toLowerCase() == filename.toLowerCase()) {\r\n"
				+ "            found = DICT_LEXIA_TO_PARENT_FOLDER[key];\r\n"
				+ "            return\r\n"
				+ "        }\r\n"
				+ "    });\r\n"
				+ "    if (found == null) {\r\n"
				+ "    }\r\n"
				+ "    return found\r\n"
				+ "}\r\n"
				+ "\r\n"
				+ "\r\n"
				+ "\r\n"
				+ "function CurrentFileName() {\r\n"
				+ "    let d = document.getElementById(\"file_name\")\r\n"
				+ "    return d.innerHTML.toString();\r\n"
				+ "}\r\n"
				+ "\r\n"
				+ "//let R = tree_search_by_value('here/History/PleasantLake/Itbeginssomewhere');\r\n"
				+ "//alert(R)\r\n"
				+ "\r\n"
				+ "var CURRENT_FILE_NAME = CurrentFileName();\r\n"
				+ "//console.log(\"CurrentFileName()=\"+CURRENT_FILE_NAME);\r\n"
				+ "\r\n"
				+ "var PARENT_PATH = FindParentPathFromFileName(CurrentFileName())\r\n"
				+ "//console.log(\"FindParentPathFromFileName()=\"+PARENT_PATH);\r\n"
				+ "\r\n"
				+ "//console.log(\"tree_search_by_value()=\"+tree_search_by_value(PARENT_PATH));";

//		System.err.println("var FILE_NAME_TO_FRAGMENT_NAME={");
//		for (Entry<String, String> X : FILE_NAME_TO_NAME.entrySet()) {
//			String gsrhrrfh = "\"";
//			System.err.println(gsrhrrfh + X.getKey() + gsrhrrfh + ":" + gsrhrrfh + X.getValue() + gsrhrrfh + ",");
//		}
//		System.err.println("};");

//		System.err.println(FILE_NAME_TO_NAME);

	}

	public static String TreeJSResult = "";

	public static Element wezTitleElement_dziala_tylko_dla_folderu_drzewo(Document document) {
//		final Elements elements = doc2.body().getElementsByClass("leksja").get(0).getElementsByClass("h1").get(0);// ("*");
//		Element firstFoundTITLE = null;
////titleJ
//		for (int i = 0; i < elements.size(); i++) {
//			final Element next = elements.get(i);
////System.err.println("tagname:"+next.tagName());
//			if (next.tagName().equals("title")) {
//				System.err.println("found title :"+next);
//				firstFoundTITLE = next;
//				break;
//			}
//		}

		// Group of all h-Tags

		Element foundFirsth1inbody;
		try {
			foundFirsth1inbody = document.body().child(0);
		} catch (Exception e) {
			foundFirsth1inbody = null;
		}

		if (foundFirsth1inbody == null) {
//			System.err.println(document.data());
		}
//		 System.out.println(foundFirsth1inbody);

		return foundFirsth1inbody;// a.getElementsByClass("h1").get(0);

	}
}
