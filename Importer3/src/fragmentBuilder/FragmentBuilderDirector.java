package fragmentBuilder;

import fragmentData.ExtractedData;

public class FragmentBuilderDirector {

	public static BuiltFragment makeOutputFragment(final ExtractedData extractedData, final String template) {
		final FragmentBuilder builder = new FragmentBuilder();
		builder.start(template);

		builder.setFragmentTitle(extractedData.fileName);// !
		builder.setLexia(extractedData.lexiaElement.toString());

		return builder.end();
	}
}