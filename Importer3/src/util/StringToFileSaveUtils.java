package util;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.StandardOpenOption;

public class StringToFileSaveUtils {
	public static void trySaveDeleteIfExist(String generated_html_content, File f) {
		if (f.exists()) {
			f.delete();
		}
		try {
			Files.writeString(f.toPath(), generated_html_content, StandardOpenOption.CREATE_NEW);
			System.out.println("saved:" + f.getAbsolutePath());
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}