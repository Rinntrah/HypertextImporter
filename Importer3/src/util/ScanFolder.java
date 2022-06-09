package util;

import java.io.File;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Stack;

public class ScanFolder {

	public static class VisitedNode {
		public boolean isDirectory;
		public File file;

	}

	public static ArrayList<VisitedNode> keepOnlyFilesWithExtension(ArrayList<VisitedNode> al, String ext) {
		final ArrayList<VisitedNode> lol = new ArrayList<VisitedNode>();
		for (VisitedNode visitedNode : al) {
			if (visitedNode.file.getAbsolutePath().endsWith(ext)) {
				lol.add(visitedNode);
			}

		}
		return lol;
	}

	public ArrayList<VisitedNode> traverseAll(final File start) {
		final ArrayList<VisitedNode> traversed = new ArrayList<>();
		final Stack<File> toTraverse = new Stack<File>();
		toTraverse.add(start);

		while (!toTraverse.isEmpty()) {
			final File next = toTraverse.pop();
			traversed.add(constructNodeForFile(next));

			if (next.listFiles() != null)
				toTraverse.addAll(Arrays.asList(next.listFiles()));
		}

		return traversed;
	}

	private VisitedNode constructNodeForFile(final File next) {

		final VisitedNode newNode = new VisitedNode();
		newNode.file = next;
		newNode.isDirectory = next.isDirectory();
		return newNode;

	}

}