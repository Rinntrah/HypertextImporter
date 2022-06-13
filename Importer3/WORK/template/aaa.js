//w jaki sposob przedstawic graf? dict map etc.
//tak aby podac tu
//

/*
<div id="link_in">
<a href="andsilence.html">and silence</a>
	<a href="silentpictures.html">silent pictures</a>
	<a href="Atlantic.html">Atlantic</a>
	<a href="Shedidnotknowthat.html">She did not know that</a></div>
	<div id="link_out">
	<a href="Mediterranean.html">Mediterranean</a>
	<a href="stonesalt.html">stonesalt</a>
	<a href="imprint.html">imprint</a></div>
*/
	
function genGraph(data,idOfTargetElement){
	
	let el=d3.select(idOfTargetElement);
	
	
var svg = d3.select(idOfTargetElement)
	.append("svg")
	.attr("width", "100%")
	.attr("height", "500px")
	.attr("stroke", "gray")
	.attr("align", "center")
	
	//.attr("background", "red");
	
	//var data = [
	//{x1: 20, x2: 60, y1: 30, y2: 50},
	//{x1: 50, x2: 80, y1: 100, y2: 150},
	//{x1: 200, x2: 400, y1: 10, y2: 100}
	//];

	var rects = svg.selectAll("foo")
	.data(data)
	.enter()
	.append("rect")
	.attr("x", d=> d.x1)
	.attr("y", d=> d.y1)
	.attr("width", d=> d.x2 - d.x1)
	.attr("height", d=> d.y2 - d.y1)
	

	var aaaaaaaaa = svg.selectAll("foo")
	.data(data)
	.enter()
	.append("text")
	.style("text-anchor", "middle")
    .attr("dx", d=> (d.x1+30))
    .attr("dy", d=> (d.y1))
	.attr("xlink:href", "http://example.com/")
    .text(function(d) { return d.name });
	
	
	var lines = svg.selectAll("foo")
	.data(data)
	.enter()
	.append("line")
	.attr("x1", d=> d.x1)
	.attr("y1", d=> d.y1)
	.attr("x2", d=> d.x2)
	.attr("y2", d=> d.y2)
	.attr("stroke", "firebrick")
	.attr("stroke-width", 2);
	
	return svg
}


var data = []

let list_of_frag_names=tree_search_by_value(PARENT_PATH)
console.log("tree_search_by_value()="+list_of_frag_names);


var dict = {};


//wstaw frag_names do dict pod klucz= indeks liczbowy
for (var i = 0; i < list_of_frag_names.length; i++) { dict[i]=list_of_frag_names[i]; }


var numEl=Object.keys(dict).length
var cols=parseInt(Math.ceil(Math.sqrt(numEl)));
		
let padY=20
let stepY=120
let stepX=120

var X = 0;
var Y = padY;

	for (var i = 0; i < numEl;i++){
		
		if(( (i > 0) && (i % cols)== 0 ) ){
			Y +=  stepY;
			X = 0;
		}
		
		X+=stepX
		
		let sizeX=60
		let sizeY=40
		
		data.push({x1: (X), x2: sizeX+X, y1: Y, y2: sizeY+Y, name:""+dict[i]});
	}
	
var g=genGraph(data,"#MAP-HIERARCHY");

//document.body.appendChild(g);

//document.getElementById("test").append(genGraph(data));



var fileName = location.href.split("/").slice(-1).toString();

if(fileName=="template.html"){
fileName="aswan.html";
}

var parentPath=FindParentPathFromFileName(fileName).split("/");

//change 'seizethedj.html' to 'seize the DJ'

var ul=document.getElementById("<ul>_of_breadcrumb")


for(var x in parentPath){
	
	let FragmentOfParentPath=(parentPath[x]+".html")
	let properParentPath=FILE_NAME_TO_FRAGMENT_NAME[FragmentOfParentPath]
	//alert(FragmentOfParentPath+"->"+properParentPath)
	
	//alert(parentPath[x]+".html"+"--->"+properParentPath)


	var li = document.createElement('li');
	var li_SEPARATOR_OF_BREADCRUMB_NAMES = document.createElement('li');
		
	let textt=properParentPath;
	if(x!=parentPath.length-1){ 
		li_SEPARATOR_OF_BREADCRUMB_NAMES.innerHTML=">";
	};
	
	
	let aElem=document.createElement('a')

	aElem.href=parentPath[x]+".html";
	aElem.text=""+textt
	li.appendChild(aElem);   
	ul.appendChild(li);   
	ul.appendChild(li_SEPARATOR_OF_BREADCRUMB_NAMES);   
	
	li.className += "LI_BreadCrumbElement";
	//KLASA ELEMENTU BREADCRUMB np. what happened. to. us.

	aElem.className += "A_WITH_HREF_BreadCrumbElement";
	//KLASA SEPARATORA ">"
	li_SEPARATOR_OF_BREADCRUMB_NAMES.className += "BreadCrumbSeparator";


}

