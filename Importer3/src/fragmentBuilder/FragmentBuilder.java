package fragmentBuilder;

public class FragmentBuilder {
	private BuiltFragment builtFragment;

	public void start(final String template) {
		this.builtFragment = new BuiltFragment();
		this.builtFragment.htmlFileAsString = template;
	}

	public void setLexia(final String leksja) {
		REPL("[CONTENT_OF_SECTION_LEXIA_GOES_HERE]", leksja);
	}

//	public void setFileName(String FILE_NAME) {
//		REPL("[FILE_NAME]", FILE_NAME);
//	}

	public void setFragmentTitle(String FRAGMENT_TITLE) {
		REPL("[FRAGMENT_TITLE]", FRAGMENT_TITLE);
	}

	private void REPL(String a, String b) {
		builtFragment.htmlFileAsString = builtFragment.htmlFileAsString.replace(a, b);
	}

	public BuiltFragment end() {
		return builtFragment;
	}

}