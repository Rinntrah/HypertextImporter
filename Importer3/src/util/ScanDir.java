package util;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.StandardOpenOption;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;
import java.util.Stack;
//import java.util.logging.Level;
//import java.util.logging.Logger;
import java.util.regex.Pattern;

public class ScanDir {

	public static class DirTreeScanner {

		private final String dir;

		public DirTreeScanner(String dir) {
			this.dir = dir;
		}

		HashMap<String, String> htmlNameToFullPath = new HashMap();

		String last(String[] arr) {
			return (String) arr[arr.length - 1];
		}

		String[] rest(String[] arr) {
			String[] rest = new String[arr.length - 1];
			for (int i = 0; i < arr.length - 1; i++) {
				rest[i] = arr[i];
			}
			return (String[]) rest;
		}

		String join(String[] arr) {
			String joined = "";
			boolean was = false;
			for (String string : arr) {
				was = true;
				joined += string;
				joined += "\\";
			}
			if (was) {
				joined = joined.substring(0, joined.length() - 1);
			}
			return joined;
		}

		static ArrayList<Node> nameCouldNotBeDeducted = new ArrayList<>();
		HashMap<String, String> fileNameToFragmentName = new HashMap<>();

		private void printerinoMaperinoMakerino(Node x) {

			if (x.content == null && x.file.isFile() && x.file.getName().endsWith("html")) {
				String big = "";
				List<String> readAllLines = null;

				try {
					System.err.println("reading:" + x.file.toPath());
					readAllLines = Files.readAllLines(x.file.toPath());
				} catch (IOException ex) {
					System.err.println(ex);
//     Logger.getLogger(ScanDir.class.getName()).log(Level.SEVERE, null, ex);
				}

				for (String readAllLine : readAllLines) {
					big += readAllLine;
				}

				String secondLine = readAllLines.get(1);

				if (secondLine.contains("h2")) {
					String dname = secondLine.replace("<h2>", "");
					dname = dname.replace("</h2>", "");
					x.deducted_name_if_fragment_is_html = dname;
					System.err.println("deducted name:" + dname);
					if (dname.isEmpty() == false) {
						fileNameToFragmentName.put(x.file.getName(), dname);

//      if (dname.equals("...")) {
//       pauseAndWaitForEnter();
//      }
					} else {
						fileNameToFragmentName.put(x.file.getName(), x.file.getName());
						nameCouldNotBeDeducted.add(x);
					}
				} else {
					nameCouldNotBeDeducted.add(x);
					System.err.println("can't read(nameCouldNotBeDeducted):" + x.file.getName());
				}
//    x.content = big;
			}
			String pth = x.file.getAbsolutePath().replace(dir, "").substring(1);
			String[] splitted = pth.split(Pattern.quote("\\"));
			System.err.println(Arrays.toString(splitted));
			htmlNameToFullPath.put(last(splitted), join(rest(splitted)));

			System.err.println(">>" + last(splitted) + "=" + htmlNameToFullPath.get(last(splitted)));
			System.err.println("" + pth + "[" + x.children.size() + "]");

			// rekursja, dla dzieci
			for (Node chid : x.children) {
				printerinoMaperinoMakerino(chid);
			}
		}

		class Node {

			private final File file;
			private List<Node> children = new ArrayList<>();
			public String content;
			private String deducted_name_if_fragment_is_html;

			private Node(File f) {
				this.file = f;
			}
		}

		public void go() {
			final Node n = new Node(new File(dir));
//   final List<Node> all = new ArrayList<>();
//   all.add(n);

			toTraverse.add(n);

			int i = 0;
			while (toTraverse.isEmpty() == false) {
//    System.err.println("i:" + i++);
				Node next = toTraverse.pop();
//    System.err.println(":" + next.file.getAbsolutePath());
				scan(next);
			}

			for (Node node : n.children) {
				printerinoMaperinoMakerino(node);
			}

			File f = new File(dir + "\\file_tree.js");

			List<String> str = new ArrayList<>();

			str.add("var TREE_MAP = {");
			for (Map.Entry<String, String> entry : htmlNameToFullPath.entrySet()) {
				String l = entry.getKey().toLowerCase();// to lower
				if (!l.endsWith(".html")) {
					continue;
				}
				String r = entry.getValue();
				// replace with forward slash
				r = r.replace("\\", "/");
				l = "'" + l + "'";
				r = "'" + r + "'";
				str.add(l + " : " + r + ",");
			}
			str.add("};");

			try {
				if (f.exists()) {
					f.delete();
				}
				Files.write(f.toPath(), str, StandardOpenOption.CREATE_NEW);
			} catch (IOException ex) {
				System.err.println(ex);
//    Logger.getLogger(ScanDir.class.getName()).log(Level.SEVERE, null, ex);
			}

		}

		Stack<Node> toTraverse = new Stack<>();

		private void scan(Node n) {

			final File f = n.file;
			final File[] listFiles = f.listFiles();

			for (File listFile : listFiles) {
				Node nn = new Node(listFile);
				if (listFile.isDirectory()) {
					n.children.add(nn); // adds only dirs
					toTraverse.add(nn);
				} else {
					n.children.add(nn);// adds htmls
				}
			}

		}
	}

	static String jsFileWithMap(String nameOfVar, HashMap<String, String> map) {
		List<String> str = new ArrayList<>();
		str.add("var " + nameOfVar + " = {");
		for (Map.Entry<String, String> entry : map.entrySet()) {
			String l = entry.getKey().toLowerCase();// to lower
			if (!l.endsWith(".html")) {
				continue;
			}
			String r = entry.getValue();
			// replace with forward slash
			r = r.replace("\\", "/");

			{// escape the ' character
				r = r.replace("'", "\\'");
				l = l.replace("'", "\\'");
			}

			l = "'" + l + "'";
			r = "'" + r + "'";
			str.add(l + " : " + r + ",");
		}
		str.add("};");

		String big = "";
		for (String string : str) {
			big += string;
		}
		return big;
	}

	public static void main(String[] args) {
		String rootDir = "E:\\STORYSPACE STRONA\\SSP2\\OTHR\\Twilight-files";
		DirTreeScanner dts = new DirTreeScanner(rootDir);
		dts.go();

		System.err
				.println("DirTreeScanner.nameCouldNotBeDeducted.size()" + DirTreeScanner.nameCouldNotBeDeducted.size());
		pauseAndWaitForEnter();
		for (DirTreeScanner.Node node : DirTreeScanner.nameCouldNotBeDeducted) {
			System.err.println(node.file.getName());
		}

//  new Scanner(System.in).nextLine();
		for (Map.Entry<String, String> entry : dts.fileNameToFragmentName.entrySet()) {
			System.err.println(entry.getKey() + "-->" + entry.getValue());
		}

//  new Scanner(System.in).nextLine();
		String jsFileWithMappingOf_HTML_FILE_NAME_to_PROPER_FRAGMENT = jsFileWithMap("FILE_NAME_TO_FRAGMENT_NAME",
				dts.fileNameToFragmentName);
//  jsFileWithMappingOf_HTML_FILE_NAME_to_PROPER_FRAGMENT = jsFileWithMappingOf_HTML_FILE_NAME_to_PROPER_FRAGMENT.replace("'", "\\'");
		System.err.println(jsFileWithMappingOf_HTML_FILE_NAME_to_PROPER_FRAGMENT);

		File f = new File(rootDir + "\\filename_to_fragmentname.js");
		if (f.exists()) {
			f.delete();
		}

//  System.err.println("namneMap:" + dts.nameMap.size());
//  System.err.println(dts.nameMap);
		saveStringToFile(jsFileWithMappingOf_HTML_FILE_NAME_to_PROPER_FRAGMENT, f);
	}

	private static void pauseAndWaitForEnter() {
		new Scanner(System.in).nextLine();
	}

	private static void saveStringToFile(String string, File file) {
		ArrayList<String> str = new ArrayList<>();
		str.add(string);
		try {
			Files.write(file.toPath(), str, StandardOpenOption.CREATE_NEW);
		} catch (IOException ex) {
			System.err.println(ex);
//   Logger.getLogger(ScanDir.class.getName()).log(Level.SEVERE, null, ex);
		}
	}
}
