q=v('speech') && v('suit') && v('boat') ? 0 : 1"

href0="a.html"
href1="b.html"

v('speech') jeśli odwiedziles speech
 && v('suit') oraz suit
&& v('boat') oraz boat
? 0 : 1" jesli tak to idź do 0; w przeciwnym razie idź do 1

q jest true:[v('speech') && v('suit') && v('boat')]
gdy true TO możemy iść do "a.html" [href0]
gdy false TO możemy iść do "b.html" [href1] i NIE możemy przejść do a.html(powyższego)


gdy q jest FALSE, to "a.html" dalej będzie w link-menu.
Czyli, q steruje domyślnym linkiem pod enterem.

//hrefyI, dać bez zmiany indeksów(bo q było definiowane ręcznie) do JS.

Guards.js
zawiera q dla frag.html

DefURL.js
zawiera hrefy dla frag.html



//0 oznacza href0
//1 oznacza href1
//


