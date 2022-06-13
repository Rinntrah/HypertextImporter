
function openMap(evt, mapName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(mapName).style.display = "block";
    evt.currentTarget.className += " active";

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


    try {
        //GRAPH_CONTAINER_INBOUND_OUTBOUND.tickGraph(GRAPH_CONTAINER_INBOUND_OUTBOUND);
        //  GRAPH_CONTAINER_INBOUND_OUTBOUND.updateGraph();
        //  GRAPH_CONTAINER_HIERARCHY.updateGraph();
    } catch (e) {
        console.error(e);
    }

    try {
        // GRAPH_CONTAINER_HIERARCHY.tickGraph(GRAPH_CONTAINER_HIERARCHY);
        //GRAPH_CONTAINER_HIERARCHY.tickGraph(GRAPH_CONTAINER_HIERARCHY);
    } catch (e) {
        console.error(e);
    }

//    last_transform_hier.x = last_transform_hier.x + 55;
//    updateTransforms('#MAP_SVG_HIERARCHY', last_transform_hier)
    //po ruszeniu kursorem wraca
//    wasOpenedRecentlyAndShouldIgnoreD3EventTransformThisTime = true;

    let W_HIER = document.getElementById('MAP_SVG_HIERARCHY').clientWidth;
    let H_HIER = document.getElementById('MAP_SVG_HIERARCHY').clientHeight;

    let MapSVG_HIERARCHY = d3.select('#MAP_SVG_HIERARCHY');

//    updateTransforms('#MAP_SVG_HIERARCHY', zoom_for_hier.transform);


    let W_IO = document.getElementById('MAP_SVG').clientWidth;
    let H_IO = document.getElementById('MAP_SVG').clientHeight;

    let MapSVG_IO = d3.select('#MAP_SVG');
    MapSVG_IO.call(zoom_for_svg.transform, d3.zoomIdentity.translate(W_IO * 0.4, H_IO * 0.65).scale(1));

    //to musi byæ na koñcu, inaczej przeskakuj¹ linki na hier po przelaczeniu na ni¹
    MapSVG_HIERARCHY.call(zoom_for_hier.transform, d3.zoomIdentity.translate(W_HIER / 2, H_HIER / 2).scale(1));

//    updateTransforms('#MAP_SVG', b);
//    updateTransforms('#MAP_SVG');
//    updateTransforms('#MAP_SVG_HIERARCHY');
//udalo sie zmienic pozycje grafu ok,
    // OFFSET_HIER.x = OFFSET_HIER.x + 55;
//    if (!zoom_for_svg)
//        return;
//    let w_SVG = document.getElementById('MAP_SVG').clientWidth;
//    let MapSVG = d3.select('#MAP_SVG');
//    MapSVG.call(zoom_for_svg.transform, d3.zoomIdentity.translate(300, 277).scale(1));
//    if (!zoom_for_hier) {
//        return;
//    }
//    let w_HIER = document.getElementById('MAP_SVG_HIERARCHY').clientWidth;
//    let MapHIER = d3.select('#MAP_HIERARCHY');
//    let b = {}
//    b.x = 200;
//    b.y = 0;
//    b.k = 1;
//
//    handleZoom_HIER(null, b);
//    last_transform_hier.x = w_HIER / 2;
//    last_zoom_x = last_transform_hier.x;
//    last_zoom_y = 0;
//    updateTransforms('#MAP_SVG_HIERARCHY', last_transform_hier)
    //  d3.event.transform.x = last_zoom_x;
    //  d3.event.transform.y = last_zoom_y;
//    MapHIER.call(zoom_for_hier.transform, d3.zoomIdentity.translate(444, 277).scale(1));
//    MapHIER.call(zoom_for_hier.transform, d3.zoomIdentity.translate(444, 277).scale(1));
}
var wasOpenedRecentlyAndShouldIgnoreD3EventTransformThisTime = false;

//MODAL SCRIPT
//Get the modal
var modal = document.getElementById("MAP_WINDOW_DIV");

//Get the button that opens the modal
var btnidButtonMapa = document.getElementById("idButtonMapa");

//When the user clicks on the button, open the modal
btnidButtonMapa.onclick = function () {
    modal.style.display = "block";
    openMap(event, 'MAP-INBOUND-OUTBOUND')
}

var closeModalButton = document.getElementById("MAP_WINDOW_CLOSE_BUTTON");
closeModalButton.onclick = function () {
    modal.style.display = "none";
}




let updateTransforms = function (nazwa, b) {
    let a = d3.event.transform;
    if (b) {
        a = b;
    }




    if (nazwa == '#MAP_SVG')
    {
        //d3.selectAll('#MAP_SVG > line').attr('transform', d3.event.transform);
        //d3.selectAll('#MAP_SVG > text').attr('transform', d3.event.transform);
        //d3.selectAll('#MAP_SVG > rect').attr('transform', d3.event.transform);
        d3.selectAll('#MAP_SVG > line').attr('transform', "translate(" + a.x + "," + a.y + ") scale(" + a.k + "," + a.k + ")");
        d3.selectAll('#MAP_SVG > path').attr('transform', "translate(" + a.x + "," + a.y + ") scale(" + a.k + "," + a.k + ")");
        d3.selectAll('#MAP_SVG > rect').attr('transform', "translate(" + (a.x - 40) + "," + (a.y - 40) + ") scale(" + a.k + "," + a.k + ")");

        if (GRAPH_CONTAINER_INBOUND_OUTBOUND != null) {
            GRAPH_CONTAINER_INBOUND_OUTBOUND.tickGraph(GRAPH_CONTAINER_INBOUND_OUTBOUND);
        }

    }


    if (nazwa == '#MAP_SVG_HIERARCHY')
    {
        //d3.selectAll('#MAP_SVG_HIERARCHY > line').attr('transform', d3.event.transform);
        //d3.selectAll('#MAP_SVG_HIERARCHY > rect').attr('transform', d3.event.transform);
        d3.selectAll('#MAP_SVG_HIERARCHY > line').attr('transform', "translate(" + a.x + "," + a.y + ") scale(" + a.k + "," + a.k + ")");
        d3.selectAll('#MAP_SVG_HIERARCHY > path').attr('transform', "translate(" + a.x + "," + a.y + ") scale(" + a.k + "," + a.k + ")");
        d3.selectAll('#MAP_SVG_HIERARCHY > rect').attr('transform', "translate(" + a.x + "," + a.y + ") scale(" + a.k + "," + a.k + ")");
        if (GRAPH_CONTAINER_HIERARCHY != null) {
            GRAPH_CONTAINER_HIERARCHY.tickGraph(GRAPH_CONTAINER_HIERARCHY);
        }
    }

}

var last_zoom_x = 0;
var last_zoom_y = 0;

var last_transform_io = {};
var last_transform_hier = {};

var handleZoom_HIER = 0;
var handleZoom_SVG = 0;

var OFFSET_SVG = {x: 0, y: 0};
var OFFSET_HIER = {x: 0, y: 0};

function makeZoom(svgName) {


    const jakaNazwa = svgName;

    let handleZoom = function (e, b) {

        let what = d3.event.transform;

        if (wasOpenedRecentlyAndShouldIgnoreD3EventTransformThisTime) {
            wasOpenedRecentlyAndShouldIgnoreD3EventTransformThisTime = false;// nie tutaj, w updateTransform


            if (jakaNazwa == '#MAP_SVG') {
                what = last_transform_io;

                d3.event.transform.x = what.x;
                d3.event.transform.y = what.y;
                d3.event.transform.k = what.k;
            }

            if (jakaNazwa == '#MAP_SVG_HIERARCHY') {
                what = last_transform_hier;

                d3.event.transform.x = what.x;
                d3.event.transform.y = what.y;
                d3.event.transform.k = what.k;

//                console.log('hiert:' + what.x);
//                console.log('d3evt:' + d3.event.transform.x);
            }

//            console.log('wasOpenedRecentlyAndShouldIgnoreD3EventTransformThisTime')

        } else {

            last_zoom_x += 0 + (what.x - last_zoom_x);
            last_zoom_y += 0 + (what.y - last_zoom_y);

            //last_transform_io = what;
            if (jakaNazwa == '#MAP_SVG') {
                //last_transform_io = {}
                last_transform_io.x = what.x + OFFSET_SVG.x;
                last_transform_io.y = what.y + OFFSET_SVG.y;
                last_transform_io.k = what.k;
            }

            if (jakaNazwa == '#MAP_SVG_HIERARCHY') {
                //last_transform_hier = {}
                last_transform_hier.x = what.x + OFFSET_HIER.x;
                last_transform_hier.y = what.y + OFFSET_HIER.y;
                last_transform_hier.k = what.k;
            }

        }

//        if (!b) {
//        } else {
//            what = b;
//        }



        kscale = what.k;
        updateTransforms(jakaNazwa);

        //d3.selectAll('#MAP_SVG g').attr('transform', d3.event.transform);
        //d3.selectAll('#MAP_SVG g').attr("transform", function (d) {
        //  return "translate(" + (d.x + last_zoom_x) + "," + (d.y + last_zoom_y) + ")";
        //});

        //podpisy lini linkow
        //d3.selectAll('#MAP_SVG > g').attr('transform', d3.event.transform);
    }

    if (svgName == '#MAP_SVG')
    {
        handleZoom_SVG = handleZoom;
    }

    if (svgName == '#MAP_SVG_HIERARCHY')
    {
        handleZoom_HIER = handleZoom;
    }


    let zoom = d3.zoom().on('zoom', handleZoom);
    //var kscale = 0;
    d3.select(svgName).call(zoom);

    //d3.select('#MAP_SVG_HIERARCHY').call(zoom);
    //MAP_SVG_HIERARCHY

    let MapSVG = d3.select(svgName);

    //  let w_of_svg = document.getElementById('MAP_WINDOW_DIV').clientWidth;
    //  alert(w_of_svg);

    //  zoom.translateBy(MapSVG, 190, 277);


    //offset map
    if (svgName == '#MAP_SVG')
    {
        MapSVG.call(zoom.transform, d3.zoomIdentity.translate(300, 277).scale(1));
    }

    if (svgName == '#MAP_SVG_HIERARCHY')
    {
        MapSVG.call(zoom.transform, d3.zoomIdentity.translate(500, 277).scale(1));
    }

    return zoom;
}


var zoom_for_svg = makeZoom('#MAP_SVG');
var zoom_for_hier = makeZoom('#MAP_SVG_HIERARCHY');

let MapSVG = d3.select('#MAP_SVG');

//get all children of x
//allChildrenHTMLFragmentNames = tree_search_by_value_accept_deep_children('here');
//alert(allChildrenHTMLFragmentNames.length + "  " + allChildrenHTMLFragmentNames)

var plusCircle = '<svg xmlns="http://www.w3.org/2000/svg" class="" fill="none" viewBox="0 0 24 24" stroke="gray"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
var minusCircle = '<svg xmlns="http://www.w3.org/2000/svg" class="" fill="none" viewBox="0 0 24 24" stroke="gray"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>';

//PRZYCISKI PLUS MINUS:

function makeZoomButtons(what, b, flag1) {

    let btn = document.createElement("button");
    btn.innerHTML = "+";
    btn.style = "";
    btn.classList += "plusZoom";

    btn.onclick = function () {
        let HierSVG = d3.select(what);
        let D = 0.15;

        if (flag1) {
            last_transform_hier.k = last_transform_hier.k + D
            HierSVG.call(zoom_for_hier.transform, d3.zoomIdentity.translate(last_transform_hier.x, last_transform_hier.y).scale(last_transform_hier.k));
        } else {
            let AB = d3.select('#MAP_SVG');
            last_transform_io.k = last_transform_io.k + D
            AB.call(zoom_for_svg.transform, d3.zoomIdentity.translate(last_transform_io.x, last_transform_io.y).scale(last_transform_io.k));
        }

        updateTransforms(what);
    };
    document.getElementById(b).appendChild(btn);



    {
        //definicja 4
        var pattern4_svg = d3.select("body").append("svg");
        pattern4_svg.append('defs').append('path')
                .attrs(
                        {
                            'id': 'pattern4',
                            'fill-rule': 'evenodd',
                        }
                )
                .append('svg:path')
                .attr('d', 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z')

        //btn.appendChild(pattern4_svg)
        btn.innerHTML = "" + minusCircle;
    }

    let btn2 = document.createElement("button");
    btn2.innerHTML = "-";
    //  btn2.style = "";
    btn2.classList += "minusZoom";

    btn2.onclick = function () {
        let HierSVG = d3.select(what);
        let D = 0.15;

        if (flag1) {
            last_transform_hier.k = last_transform_hier.k - D
            HierSVG.call(zoom_for_hier.transform, d3.zoomIdentity.translate(last_transform_hier.x, last_transform_hier.y).scale(last_transform_hier.k));
        } else {
            let AB = d3.select('#MAP_SVG');
            last_transform_io.k = last_transform_io.k - D
            AB.call(zoom_for_svg.transform, d3.zoomIdentity.translate(last_transform_io.x, last_transform_io.y).scale(last_transform_io.k));
        }

        updateTransforms(what);
    };

    btn2.innerHTML = "" + plusCircle;
    document.getElementById(b).appendChild(btn2);
}


makeZoomButtons('#MAP_SVG_HIERARCHY', 'MAP-HIERARCHY', true);
makeZoomButtons('#MAP_SVG', 'MAP-INBOUND-OUTBOUND', false);


var start = '<svg xmlns="http://www.w3.org/2000/svg" class="" fill="none" viewBox="0 0 24 24" stroke="gray"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
var stop = '<svg xmlns="http://www.w3.org/2000/svg" class="" fill="none" viewBox="0 0 24 24" stroke="gray"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" /></svg>'

function makeStartButton() {
    let btn = null;

    btn = document.getElementById("listen_audio_button");

    if (btn == null) {
        btn = document.createElement("button");
        btn.style = "";
        btn.classList += "startButton";
        btn.innerHTML = "" + start;
        document.getElementById('MAP-INBOUND-OUTBOUND').appendChild(btn);
    }

    btn.state = 1;

    let FindAudioForFragmentIgnoreCase = function (fragmentName) {
        let found = null;

        for (const [key, value] of Object.entries(FRAGMENT_TO_AUDIO_MAP)) {
            if (key.toString().toLowerCase() == fragmentName) {
                found = value;
                break;
            }
        }

        return found;
    }

    btn.onclick = function () {
        let cur = CurrentFileName();
        //console.log('playing audio cur=' + cur)
        // alert(FRAGMENT_TO_AUDIO_MAP);

        if (btn.state == 1) {
            btn.state = 2;
            //play audio
            let audioURL = FindAudioForFragmentIgnoreCase(cur);
            // console.log('audio URL found' + audioURL)

            playAudio(audioURL);
            return;
        }

        if (btn.state == 2) {
            btn.state = 1;
            //stop audio
            if (currently_played_audio != null) {
                currently_played_audio.pause();
                currently_played_audio.currentTime = 0;
            }
            return;
        }
    };


}

function makeStopButton() {
    let btn = document.createElement("button");
    btn.style = "";
    btn.classList += "stopButton";
    btn.innerHTML = "" + stop;

    btn.onclick = function () {
        playAudio("https://samplelib.com/lib/preview/mp3/sample-3s.mp3");
    };

    document.getElementById('MAP-INBOUND-OUTBOUND').appendChild(btn);
}

makeStartButton();
//makeStopButton();

var currently_played_audio = null;

function playAudio(URL) {
    currently_played_audio = new Audio(URL);
    if (currently_played_audio == null)
        return;

    currently_played_audio.play();
}

