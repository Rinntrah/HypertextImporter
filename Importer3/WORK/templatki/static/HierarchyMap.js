class HierarchyGraphController {
    constructor(a, b, c, d) {

    }

    dict1 = {fragmentName: null}
    history = [];

    //tego uzywac
    switchGraphView(fragmentName) {
        let a = showGraphForFragmentName(fragmentName);
        history.push(a);
    }

    showGraphForFragmentName(fragmentName) {
        let graphForFragment = dict1[fragmentName];
        let graphExists = graphForFragment !== null;
        if (graphExists) {
            switchToGraph(graphForFragment);
        } else {
            let generated = createGraphForFragmentNameAndAddToDict1(fragmentName);
            switchToGraph(generated);
        }
    }

    createGraphForFragmentNameAndAddToDict1(fragmentName) {
        let freshlyGenerated = null;
        //moze klasa hierarchy graph builder?

        dict1[fragmentName] = null;

        return freshlyGenerated;
    }

    goBackIfPossible() {
        let last = history.pop();
        if (last === null) {
            return;
        }
    }
}


class HierarchyData {
    fragmentName = "null.html";
    childrenFragmentNamesInside = new Array();
}

function generateHierarchyDataForFragmentName(fragmentName, returnOnlyContentsOfLexiaFolder) {
    //fragmentName eg bla.html
    //   let a = FindParentPathFromFileName(fragmentName);
    //fragment.html(plik) nazywa sie aerver.html
    //tree.js zawiera mapowanie: AERVER.html:"here/inthehigherair"

    let parentPath = FindParentPathFromFileName(fragmentName);
   // console.log("Parent Path (fragmentName=" + fragmentName + ")==" + parentPath);

    let parentPathSlashFragmentName = parentPath + "/" + fragmentName.replace(".html", "");

    //console.log("(parent/fragmentName)==" + parentPathSlashFragmentName);
    //console.log("parentPath  for fragmentName(" + fragmentName + ")==" + parentPath);
    //  alert("constructed2:===" + xxx);

    let resultingKeys = tree_search_by_value(parentPathSlashFragmentName);//zawiera to co w here/inthehigherair/AERVER
    let resultingKeys2 = tree_search_by_value(parentPath);
    let resultingKeys3 = tree_search_by_value_accept_deep_children(parentPathSlashFragmentName);

    //w here/inthehigherair/AERVER jest te¿ fragment: whetherreport, i nie ma folderu whetherreport, jest tylko whetherreport.html
    //szukamy dodatkowo siblingsów z folderu, w którym jest ten whetherreport, czyli: here/inthehigherair
  //  console.log(fragmentName + ":resultingKeys(" + parentPathSlashFragmentName + "), resulting keys==" + resultingKeys);
    //console.log(fragmentName + ":resultingKeys2(" + parentPath + "), resulting keys==" + resultingKeys2);
   // console.log(fragmentName + ":resultingKeys3-deep-children(" + parentPathSlashFragmentName + "), resulting keys==" + resultingKeys3);

    //natomiast, jeœli nie ma nic w resultingKeys, to pokazujemy siblingsy z resultingKeys2
    // alert("tree_search_by_value for:" + xxx + " equals to:" + b);
    //mozemy sobie zwrocic bedac w x.html, zawratosc(child): costam/x albo costam/

    let whatToUse = resultingKeys;

    //if (whatToUse.length == 0 && !returnOnlyContentsOfLexiaFolder) {
    //	whatToUse = resultingKeys3;
    //}

    if ((!returnOnlyContentsOfLexiaFolder) && whatToUse.length == 0) {
        //jesli nie zdefiniowano, lub podano falsz(returnOnlyContentsOfLexiaFolder) to uzywamy resultingKeys2, else direct-descendants of folder;potrzebne do okreslenia styli css.
        whatToUse = resultingKeys2;
     //   console.log('what to use=resultingKEys2: ' + resultingKeys2)
    }

    //whatToUse = whatToUse.filter(item => item !== fragmentName);
    //whatToUse = whatToUse.filter(item => item !== fragmentName);
    /*else{
     //mamy cos w resulting keys, wiêc:
     //jeœli mamy dodatkowo coœ w resultingKeys2, to dodajemy to do resultingKeys
     whatToUse=resultingKeys.concat(resultingKeys2);
     }*/
    // if (whatToUse == null || whatToUse == "null" || whatToUse.length == 0)
    //  return null;

    let hd = new HierarchyData();
    hd.childrenFragmentNamesInside = whatToUse;
    hd.fragmentName = fragmentName;
    hd.deepChildren = resultingKeys3;
    hd.childrenFragmentNamesInside = hd.childrenFragmentNamesInside.filter(item => item !== fragmentName);
    hd.deepChildren = hd.deepChildren.filter(item => item !== fragmentName);


   // if (hd.childrenFragmentNamesInside.length == 0) {
        //hd.childrenFragmentNamesInside.push('720.html')
   // }

    //console.log("returning childrenFragmentNamesInside:" + hd.childrenFragmentNamesInside);

    return hd;
}

//console.log(">>>>>generateHierarchyDataForFragmentName" + generateHierarchyDataForFragmentName(CurrentFileName()));
//var hierarchyGraphController = new HierarchyGraphController();

var hier_graph_history = new Array();
var GRAPH_CONTAINER_HIERARCHY = null;

{
    /*function makeHierarchyGraphDataGen(name) {
     const HierarchyData = generateHierarchyDataForFragmentName(name);
     let hierGen = new MapGenTemplateMethodForHierarchy(HierarchyData);
     var GRAPH_CONTAINER_HIERARCHY = new GraphContainer();
     
     GRAPH_CONTAINER_HIERARCHY.customRectClassName = "hierarchy-rect";
     GRAPH_CONTAINER_HIERARCHY.forceStrength = 0.5;
     GRAPH_CONTAINER_HIERARCHY.forceDistance = 30;
     GRAPH_CONTAINER_HIERARCHY.rectWidth = 100;
     GRAPH_CONTAINER_HIERARCHY.rectHeight = 50;
     
     let defaultGraph = GRAPH_CONTAINER_HIERARCHY.createGraph();
     let generatedHier = hierGen.gen(defaultGraph);
     return generatedHier;
     }*/

    function isHierarchyDataProper(HierarchyData) {
        return HierarchyData != null ;//&& HierarchyData.childrenFragmentNamesInside.length >= 1)
    }

    var LAST_D_HREF = null;

    function hier_go_BACK() {
        let last = hier_graph_history.pop();
        if (last == null)
            return;

        console.log("going back to:" + last)
        makeHierarchyGraphFor(last, GRAPH_CONTAINER_HIERARCHY);
        WHICH_FILENAME_ARE_WE_IN_HIER_EXPLORER = last;
    }

    WHICH_FILENAME_ARE_WE_IN_HIER_EXPLORER = CurrentFileName();

    function hier_go_UP() {

        let whereTo = null;
        try {
            //np. jesteœ w andwhere.html, to parentPath: here/History/PleasantLake/six/whosaidwhat
            let parentPath = FindParentPathFromFileName(WHICH_FILENAME_ARE_WE_IN_HIER_EXPLORER);
            if (!parentPath) {
                throw "parentPath is empty(there is no folder up to go). parentPath=" + parentPath;
            }
            let splitted = parentPath.split("/");
            let lastPart = splitted[splitted.length - 1];

            console.log("UP: lastPart:" + lastPart);
            console.log("UP: parentPath: " + parentPath)

            whereTo = lastPart + ".html";

        } catch (e) {
            console.error(e);

            let parentPath = FindParentPathFromFileName(WHICH_FILENAME_ARE_WE_IN_HIER_EXPLORER);
            let part2 = " parentPath:" + parentPath;
            console.error('Cant go up, something went wrong, check error. WHICH_FILENAME_ARE_WE_IN_HIER_EXPLORER=' + WHICH_FILENAME_ARE_WE_IN_HIER_EXPLORER + part2);
            return;
        }

        console.log("going up to:" + whereTo);
        hier_graph_history.push(whereTo);
        makeHierarchyGraphFor(whereTo, GRAPH_CONTAINER_HIERARCHY);
        WHICH_FILENAME_ARE_WE_IN_HIER_EXPLORER = whereTo;
        console.log("WHICH_FILENAME_ARE_WE_IN_HIER_EXPLORER:" + WHICH_FILENAME_ARE_WE_IN_HIER_EXPLORER)
    }

    function hier_go_DOWN() {
        //to troche bez sensu, wystarczy przeciez kliknac
        /*  let last = hier_graph_history.pop();
         if (last == null)
         return;
         
         console.log("going down to:" + last)
         makeHierarchyGraphFor(last, GRAPH_CONTAINER_HIERARCHY);*/
    }


    function makeHierarchyGraphFor(name, lastGraph) {
        // let generatedHier = makeHierarchyGraphDataGen(name);
        const HierarchyData = generateHierarchyDataForFragmentName(name);

        if (!isHierarchyDataProper(HierarchyData))
            throw ("Hierarchy Data null for name:" + name + " data: " + HierarchyData);

        //alert("make hier called for:" + name);
        // alert("HierarchyData:" + HierarchyData.childrenFragmentNamesInside);
        // alert(HierarchyData.fragmentName)
        // alert("FindParentPathFromFileName:" + FindParentPathFromFileName(HierarchyData.fragmentName))
        //alert(HierarchyData.childrenFragmentNamesInside)

        let hierGen = new MapGenTemplateMethodForHierarchy(HierarchyData);
        GRAPH_CONTAINER_HIERARCHY = new GraphContainer();

        GRAPH_CONTAINER_HIERARCHY.customRectClassName = "hierarchy-rect";
        GRAPH_CONTAINER_HIERARCHY.forceStrength = 0.5;
        GRAPH_CONTAINER_HIERARCHY.forceDistance = 30;
        //  GRAPH_CONTAINER_HIERARCHY.rectWidth = 100;
        //  GRAPH_CONTAINER_HIERARCHY.rectHeight = 50;
        GRAPH_CONTAINER_HIERARCHY.makeTripleDiv = true;

        let defaultGraph = GRAPH_CONTAINER_HIERARCHY.createGraph();
        let generatedHier = hierGen.gen(defaultGraph);
        LAST_D_HREF = name;

        if (lastGraph != null) {
            lastGraph.clearGraph(lastGraph);
        }

        GRAPH_CONTAINER_HIERARCHY.makeMap("#MAP_SVG_HIERARCHY", generatedHier);
        GRAPH_CONTAINER_HIERARCHY.whatToDoOnRectClick = function (d, i) {

            if (d.href != null && d.href != "null") {
                /*  alert("dhref===" + d.href);
                 alert("const HierarchyData===" + HierarchyData.fragmentName);
                 
                 let currentFragWithoutHtml = HierarchyData.fragmentName.replace(".html", "");
                 
                 let currentPath = FindParentPathFromFileName(HierarchyData.fragmentName) + "/" + currentFragWithoutHtml;
                 
                 let ab = currentPath + "/" + d.href.replace(".html", "");
                 alert("constructed:===" + ab);*/

                try {
                    let checkData = generateHierarchyDataForFragmentName(d.href);

                    if (isHierarchyDataProper(checkData)) {
                        //CLEAR
                        if (GRAPH_CONTAINER_HIERARCHY != null) {
                            GRAPH_CONTAINER_HIERARCHY.clearGraph(GRAPH_CONTAINER_HIERARCHY);
                        }


                        if (LAST_D_HREF != null) {
                            let last = hier_graph_history[hier_graph_history.length - 1];

                            if (last != LAST_D_HREF) {//only unique, nie dodawaj 3 razy tego samego do historii,
                                hier_graph_history.push(LAST_D_HREF);
                            }
                        }

                        console.log("hier_graph_history:" + hier_graph_history);

                        //CHANGE
                        makeHierarchyGraphFor(d.href, GRAPH_CONTAINER_HIERARCHY);

                    } else {
                        console.log('!isHierarchyDataProper--not changing to' + d.href + " childrenFragmentNamesInside=" + checkData.childrenFragmentNamesInside)
                    }

                } catch (e) {
                    console.error("error-hierarchy:" + e.stack);
                }


            } else {
            }
        }


        if (typeof zoom_for_hier !== 'undefined') {
            let MapSVG_HIERARCHY = d3.select('#MAP_SVG_HIERARCHY');
//            MapSVG_HIERARCHY.call(zoom_for_hier.transform, d3.zoomIdentity.translate(0, 0).scale(1));
            zoom_for_hier.translateBy(MapSVG_HIERARCHY, 0, 0);
        }
        //    let MapSVG2 = d3.select('#MAP_SVG_HIERARCHY');
        //   
    }

    makeHierarchyGraphFor(CurrentFileName());

    /*let GRAPH_CONTAINER_INBOUND_OUTBOUND = new GraphContainer();
     let defaultGraph = GRAPH_CONTAINER_INBOUND_OUTBOUND.createGraph();
     let  v1 = bob.gen(defaultGraph);
     GRAPH_CONTAINER_INBOUND_OUTBOUND.makeMap("#MAP_SVG", v1);*/


    // hierarchyGraphController = new HierarchyGraphController("#HIERARCHY_MAP_SVG_NAME_?!?!?");
    // hierarchyGraphController.switchGraphView("aerver.html");
    //hierarchyGraphController.goBackIfPossible();
}
