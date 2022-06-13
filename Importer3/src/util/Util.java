package util;

import java.io.File;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.Files;

public class Util {

	public static String readFileToOneBigString(File file, Charset encoding) throws IOException {
		byte[] encoded = Files.readAllBytes(file.toPath());
		return new String(encoded, encoding);
	}

	public static String REPL(String tag, String source, String replacement) {
		source = source.replace(tag, replacement);
		return source;
	}

}
