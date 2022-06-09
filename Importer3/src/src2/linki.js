//disable alerts on template
var path = window.location.pathname;
var page = path.split("/").pop();
if(page=="template.html"){
	window.alert = function() {};
}


function getCookie(name) {
    if (document.cookie.length <= 0)
        return "";
    var i = document.cookie.indexOf(name + "=");
    if (i < 0)
        return "";
    i += name.length + 1;
    var j = document.cookie.indexOf(";", i);
    return unescape(document.cookie.substring(
            i, (j < 0) ? document.cookie.length : j
            ));
}

function getCookieArray(name) {
    var v = getCookie(name);
    return v ? v.split(',') : new Array();
}

function setCookie(name, value) {
    document.cookie = name + "=" + escape(value) + "; path=/";
}

// Set a Cookie
function setCookie2(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}



function documentLocation() {
    return getFileAndExt(document.location);
}


let X = null;
X = localStorage.getItem('lastVisited');

if (X == null) {
    X = new Array();

} else {
    X = X.split(",")//changes string back to array, because localStorage.setItem converts array to string
}

X.push("" + getPageName())//push name to array

while (X.length >= 4) {
    X.shift()//remove first elemnt of array
}

//to dzia³a
document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.ctrlKey && evt.keyCode == 90) {
        alert("Ctrl-Z");
    }
};


localStorage.setItem('lastVisited', X);//set array to localstorage, it will be auto-converted to string

//set of all unique
var allUniqueVisitedSet = null;

allUniqueVisitedSet = localStorage.getItem('allUniqueVisitedSet');
if (allUniqueVisitedSet == null) {
    allUniqueVisitedSet = new Set()
} else {
    //console.log("allUniqueVisitedSet found:" + allUniqueVisitedSet)
    let split = allUniqueVisitedSet.split(",")

    //avoid pushing empty array, cuz "" will be added to set(empty str)
    if (split.length > 0) {
        allUniqueVisitedSet = new Set(split)//split string to string arr, and conv to set
    } else {
        allUniqueVisitedSet = new Set()
    }

    //console.log("after restore" + Array.from(allUniqueVisitedSet))
}
allUniqueVisitedSet.add("" + getPageName())//push name of cur frag. to set(no duplication will occur)
let conv_to_Arr = Array.from(allUniqueVisitedSet);
console.log("allUniqueVisitedSet" + conv_to_Arr)
localStorage.setItem('allUniqueVisitedSet', conv_to_Arr);//set to localstorage, Array from must be used, otherwise [Set] will be saved


let historycount = document.getElementsByClassName("historyCount")[0]
historycount.innerHTML = (allUniqueVisitedSet.size - 1)

var visitedPages = X

function ClearHistory() {
    let historycount = document.getElementsByClassName("historyCount")[0]
    historycount.innerHTML = "1"

	allUniqueVisitedSet.clear();
	visitedPages=new Array();

    localStorage.setItem('allUniqueVisitedSet', new Array())
    localStorage.setItem('lastVisited', new Array());
    document.getElementById("HISTORY_WINDOW_LIST").innerHTML = "";
	


    return false;
}


function getFileName(path) {
    var i = path.lastIndexOf('/');
    if (i >= 0)
        path = path.substr(i + 1);
    i = path.lastIndexOf('.');
    if (i >= 0)
        path = path.substr(0, i);
    return path;
}

function listWindow(caption, links, clear_btn) {


    //wczytujemy linki z HTML zamienijac je na obiekty z polami title href i rev_title:
    links = new Array()
    links.pushOnce = function (o) {
        for (var i in this)
            if (this[i].href == o.href)
                return false;
        this.push(o);
        return true;
    };


    let ahrefs = INBOUND_OUTBOUND_MAP[GetCurrentFileNameDotHTML()];
	if(!ahrefs){
		alert('looks like there is no link information in this fragment; may be a bug;')
		return;
	}
	ahrefs = ahrefs.filter(el => el.linkType=="outbound");//leave only outbound


    for (i = 0; i < ahrefs.length; ++i) {
        let e = ahrefs[i];
        links.pushOnce({
            'title': e.title,
            'href': e.href,
            'rev_title': e.rev_title,
            'txt_content': e.txt_content
        });

    }


    var LinkInOutDivs = document.getElementById("LinkInOutDivs")
    LinkInOutDivs.innerHTML = "";


    //<div class="link-title">TEST first title ?</div>
    //<div class="link-destination">TEST September</div>
    //<!-- ... -->

    //<div class="link-title">TEST What light was in mothers'?</div>
    //<div class="link-destination">TEST Wanders</div>
    //<!-- ... -->

    //<div class="link-title">TEST Question ?</div>
    //<div class="link-destination">TEST Answer</div>
    //<!-- ... -->

    var _UL_LINK_DESTINATIONS_TITLES = document.getElementById("<ul>_destination-title")
    _UL_LINK_DESTINATIONS_TITLES.innerHTML = ""

    var _UL_LINK_SOURCE_TITLES = document.getElementById("<ul>_link-title")
    _UL_LINK_SOURCE_TITLES.innerHTML = ""

	//wklejaæ linki do DIV zamiast do UL LI


    for (var i = 0; i < links.length; ++i) {

        //Create text of inbound link
        var textInboundLink = document.createElement('a');//a-element

        let invalidPodpis = function (podpis) {
            return (podpis == null || podpis == "null" || podpis.length == 0)
        }

        let lewyPodpis = links[i].txt_content;
        if (invalidPodpis(lewyPodpis)) {
            lewyPodpis = links[i].title;
        }
        if (invalidPodpis(lewyPodpis)) {
            lewyPodpis = links[i].rev_title;
        }

        //textInboundLink.appendChild(document.createTextNode(lewyPodpis));  
        textInboundLink.text = lewyPodpis

        textInboundLink.setAttribute('href', links[i].href);//href lewego linku
        textInboundLink.setAttribute('id', 'InboundLink');//id tego elementu a




        let prawyPodpis = links[i].rev_title;
        if (invalidPodpis(prawyPodpis)) {
            prawyPodpis = getFileName(links[i].href)
        }


        var prawa_czesc_ze_strzalka = "  â€“> " + prawyPodpis;


        var textOutboundLink = document.createElement('a');//a-element
        textOutboundLink.appendChild(document.createTextNode(prawa_czesc_ze_strzalka));
        textOutboundLink.setAttribute('href', links[i].href);
        textOutboundLink.setAttribute('id', 'OutboundLink');

        let _LI_SRC = document.createElement('li');
        _LI_SRC.appendChild(textInboundLink)

        if (i % 2 == 0) {
            _LI_SRC.classList.add("bg-gray-100")
        } else {
            _LI_SRC.classList.add("bg-gray-300")
        }

        let _LI_TGT = document.createElement('li');
        _LI_TGT.appendChild(textOutboundLink)

        var DIV_LEFT_SIDE = document.createElement('div');
        DIV_LEFT_SIDE.classList.add("link-title")
        //DIV_LEFT_SIDE.innerHTML="A"
        DIV_LEFT_SIDE.appendChild(textInboundLink)

		DIV_LEFT_SIDE.classList.add("col-span-5")
		DIV_LEFT_SIDE.classList.add("text-right")
		DIV_LEFT_SIDE.classList.add("italic")
		DIV_LEFT_SIDE.classList.add("p-1")

        var SPAN = document.createElement('SPAN');
        SPAN.classList.add("srodek-menu")
		SPAN.classList.add("col-span-2")
		SPAN.classList.add("p-0")

		SPAN.innerHTML=".......";

        var DIV_RIGHT_SIDE = document.createElement('div');
        DIV_RIGHT_SIDE.classList.add("link-destination")
        DIV_RIGHT_SIDE.appendChild(textOutboundLink)
		DIV_RIGHT_SIDE.classList.add("col-span-5")
		DIV_RIGHT_SIDE.classList.add("text-left")
		DIV_RIGHT_SIDE.classList.add("p-0")
		DIV_RIGHT_SIDE.classList.add("italic")
		DIV_RIGHT_SIDE.classList.add("underline")

        //DIV_RIGHT_SIDE.innerHTML="B"

        //Root
        LinkInOutDivs.appendChild(DIV_LEFT_SIDE)
        LinkInOutDivs.appendChild(SPAN)
        LinkInOutDivs.appendChild(DIV_RIGHT_SIDE)





    }
}

var HISTORY_WINDOW_DIV = document.getElementById("HISTORY_WINDOW_DIV")


var link_list = new Array();
link_list.pushOnce = function (o) {
    for (var i in this)
        if (this[i].href == o.href)
            return false;
    this.push(o);
    return true;
};





function each(iter, f) {
    if (!iter)
        return;
    var arr = new Array();
    for (var i = 0; i < iter.length; ++i)
        arr[i] = iter[i];
    for (var i = 0; i < arr.length; ++i)
        if (f(arr[i]))
            return;
}

function getPageName() {
    var name = String(document.location);
    var i = name.lastIndexOf('/');
    if (i >= 0)
        name = name.substring(i + 1);
    i = name.lastIndexOf('.');
    if (i > 0)
        return name.substring(0, i);
    return name;
}

var bleep = (function (ctx) {
    return function () {
        var osc = ctx.createOscillator();
        osc.connect(ctx.destination);
        osc.start();
        setTimeout(function () {
            osc.stop();
        }, 300);
    };
})(window.AudioContext ? new AudioContext() : new webkitAudioContext());

function getFileAndExt(url) {
    url = new String(url);
    url = url.substring(0, (url.indexOf('#') == -1) ? url.length : url.indexOf('#'));
    url = url.substring(0, (url.indexOf('?') == -1) ? url.length : url.indexOf('?'));
    url = url.substring(url.lastIndexOf('/') + 1, url.length);
    return url;
}

function v(page) {
	//v zwraca czy to bylo odwiedzone
	//alert('v called with'+page)
	//alert(allUniqueVisitedSet.has(page))
	return allUniqueVisitedSet.has(page);
}


function conditionalLink(a) {
    if (!a)
        return;
    var q = a.getAttribute('q');
    if (!q)
        return;
    q = Number(eval(q));
    if (q > 0) {
        if (a.getAttribute('href' + q)) {
            var href = a.getAttribute('href' + q);
            a.href = (href.indexOf('.') < 0) ? (href + ".html") : href;
        }
        if (a.getAttribute('title' + q))
            a.title = a.getAttribute('title' + q);
        if (a.getAttribute('rev_title' + q))
            a.setAttribute('rev_title', a.getAttribute('rev_title' + q));
    }
    if (getFileAndExt(a.href) == getFileAndExt(document.location))
        a.onclick = bleep;
}

each(document.getElementsByTagName('a'), conditionalLink);
conditionalLink(document.getElementById('yes'));
conditionalLink(document.getElementById('no'));

//var default_url = document.getElementById('def_url').getAttribute('href');

function defaultLinks(node) {
    if (node.nodeType == 1) {
        if ((node.tagName != 'A') && (node.tagName != 'H1'))
            each(node.childNodes, defaultLinks);
    }

    if ((node.nodeType == 3) && (function (node) {
        var text = node.wholeText ? node.wholeText.trim() : node.nodeValue;
        return text != "";
    })(node)) {

        var a = document.createElement('a');
        a.href = default_url;
        if (getFileAndExt(default_url) == documentLocation())
            a.onclick = bleep;
        node.parentNode.replaceChild(a, node);
        a.appendChild(node);
    }
}

var anchors = new Array();

function ShowLinkListWindow() {
    listWindow("Follow one of the links", link_list, false, null);

	// When the user clicks anywhere outside of the ListWindow, close it
	window.onclick = function (event) {
		if (event.target == document.getElementById("LinkWindowDiv")) {
			HideLinkListWindow();
		}
	}


    let LinkWindowDiv = document.getElementById("LinkWindowDiv")
    LinkWindowDiv.classList.remove('hidden')
}

function HideLinkListWindow() {
    let LinkWindowDiv = document.getElementById("LinkWindowDiv")
    LinkWindowDiv.classList.add('hidden')

}

function ShowMapWindow() {
    let MAP_WINDOW_DIV = document.getElementById("MAP_WINDOW_DIV")
    MAP_WINDOW_DIV.classList.remove('hidden')
    //var svg = d3.select("#MAP_SVG");
    var svg2 = document.getElementById("MAP_SVG")
    var width = +svg2.clientWidth;
    var height = +svg2.clientHeight;
    simulation.force("center", d3.forceCenter(width / 2, height / 2))
}

function HideMapWindow() {
    let MAP_WINDOW_DIV = document.getElementById("MAP_WINDOW_DIV")
    MAP_WINDOW_DIV.classList.add('hidden')
}

function ShowHistoryWindow() {
    listWindow("Follow one of the links", link_list, false, null);
    HISTORY_WINDOW_DIV.classList.remove('hidden')

	// When the user clicks anywhere outside of the HistoryWindow, close it
	window.onclick = function (event) {
		if (event.target == HISTORY_WINDOW_DIV) {
			HideHistoryWindow();
		}
	}


    var _HISTORY_WINDOW_LIST = document.getElementById("HISTORY_WINDOW_LIST")
    _HISTORY_WINDOW_LIST.innerHTML = ""

    for (var i = 0; i < visitedPages.length; ++i) {
        let page = visitedPages[visitedPages.length - 1 - i];

        var linkTitleNode = document.createElement('a');
        linkTitleNode.appendChild(document.createTextNode(page)); //links[i].title   
        //linkTitleNode.setAttribute('href',  links[i].href);
        _HISTORY_WINDOW_LIST.appendChild(linkTitleNode);

        _HISTORY_WINDOW_LIST.appendChild(document.createElement('br'));

    }

}

function HideHistoryWindow() {
    HISTORY_WINDOW_DIV.classList.add('hidden')
}

function historyWnd() {
    var href_prefix = String(document.location);
    var i = href_prefix.lastIndexOf('/');
    if (i >= 0)
        href_prefix = href_prefix.substring(0, i + 1);

    var a = new Array();

    each(visitedPages, function (page) {
        var title = getCookie("title_" + page);
        if (!title)
            return;
        page = relPage(page);
        var href = href_prefix + page;
        if (page.indexOf('.') < 0)
            href += ".html";
        a.push({
            'title': title,
            'href': href
        });

    });

    var wnd = document.getElementById("HISTORY_WINDOW");
    var list = document.getElementById("HISTORY_WINDOW_LIST");

    listWindow("Reading history", a, true, wnd, list);

    return false;
}

function wymiany(slowo) {
    return slowo.toLowerCase().replace(/Ã³/g, 'o');
}

function GetLinksList() {
    //var list = document.getElementById("LINK_WINDOW_LIST");
    return link_list;
}

function rl(items) {
    var r = Math.random();
    for (var i = 0; i < items.length; ++i) {
        if (r < items[i])
            return i;
        r -= items[i];
    }
    return 0; // domyÅ›lnie pierwszy link
}

/* Multilink */
var link_menu_bg = document.createElement('div');
link_menu_bg.className = 'link_menu_bg';
link_menu_bg.setAttribute('style', 'position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0;visibility:hidden');
link_menu_bg.style.position = 'fixed';
document.body.appendChild(link_menu_bg);

var link_menu = document.createElement('menu');
link_menu.className = 'link_menu';
link_menu.style.position = 'absolute';
link_menu.style.visibility = 'hidden';
document.body.appendChild(link_menu);

link_menu_bg.onclick = function () {
    link_menu.style.visibility = 'hidden';
    link_menu_bg.style.visibility = 'hidden';
};

each(document.getElementsByClassName('multilink'), function (link) {
    link.href = 'javascript:';
    var items = [];
    for (var i = 0, href = true; (i < 2) || href; ++i) {
        href = link.getAttribute('href' + i) || link.getAttribute('data-href' + i);
        if (!href)
            continue;
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = href;
        a.appendChild(document.createTextNode(
                link.getAttribute('title' + i) || link.getAttribute('data-title' + i) || href
                ));
        a.onclick = function () {
            link_menu.style.visibility = 'hidden';
            link_menu_bg.style.visibility = 'hidden';
            return true;
        };
        li.appendChild(a);
        items.push(li);
    }
    link.ontouchup = function (event) {
        event = event.touches[0];
        link_menu.style.left = event.clientX + 'px';
        link_menu.style.top = event.clientY + 'px';
    };
    link.onmouseup = function (event) {
        link_menu.style.left = event.clientX + 'px';
        link_menu.style.top = event.clientY + 'px';
    };
    link.onclick = function () {
        console.log('C');
        link_menu.innerHTML = '';
        for (var i = 0; i < items.length; ++i)
            link_menu.appendChild(items[i]);
        link_menu_bg.style.visibility = 'visible';
        link_menu.style.visibility = 'visible';
    };
});
