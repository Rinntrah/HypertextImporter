
var svg = d3.select("svg"),
width = +svg.attr("width"),
height = +svg.attr("height");


svg.style("background-color", 'cyan');


var color = d3.scaleOrdinal(d3.schemeCategory20);

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.name; }).distance(function(d) {return d.distance;}).strength(2.175))
    .force("charge", d3.forceManyBody().strength(-120))
//	 .force("gravity",0)
    .force("center", d3.forceCenter(width / 2, height / 2));


	var graph = getData();

//change links to other format by using map function
 // graph.links = graph.links.map(function(ele) {
 //return {source: ele.source, target: ele.dest, value: + ele.value}
  //});
//	graph.nodes.push({"name":"and where"});
	//graph.links.push({source: "and where", target: "ser5", value: +5});
//json.links.push({"source":"ser2","dest":"ser5","value":"10"});
	
	var NodeNameToNode={}
	
	//what should be shown:
	var WTI=[]//'here','seven','History','Notes','The End of the Cold War','Pleasant Lake'
	
	var links = GetLinksList();
	
	for(var i=0; i < links.length; ++i) {
		//alert(links[i].title + "..." + links[i].rev_title);
	}
	

	
	var LinkedPairs={}
	var ADD_DIST={}
	
	
	{
		var fileName = location.href.split("/").slice(-1);
		//alert(fileName)
		
		var fragmentName=FILE_NAME_TO_FRAGMENT_NAME[fileName.toString().toLowerCase()]
		//alert(fragmentName)
		
		var path=TREE_MAP[fileName.toString().toLowerCase()];
		//alert(path)
		
		let SPLITTED=path.split('/')
		
		let SPLITTED_CORRECTED=[]
		
		for(var i = 0; i < SPLITTED.length; i++)
		{
			let what = SPLITTED[i]+".html";
			let properFragmentName = FILE_NAME_TO_FRAGMENT_NAME[what.toString().toLowerCase()]
			SPLITTED_CORRECTED[i] = properFragmentName
		}
		
		//alert(SPLITTED_CORRECTED)
		//WTI = WTI.concat(SPLITTED_CORRECTED)//"here","History","The End of the Cold War"
		//WTI.push(fragmentName)//"archangel"
	
		WTI.push(fragmentName)//"archangel"
		
		//for(var next in TREE_MAP){
		//alert(next)
		//	}
		
	
		for(var i = 0; i < link_list.length; ++i) {
			//let name=link_list[i].href.toString().split(".")[0];
			let name = FILE_NAME_TO_FRAGMENT_NAME[link_list[i].href.toString().toLowerCase()];
			WTI.push(name)
		}


		LinkedPairs[fragmentName]=[]
		var LINK_LENGTHS={}
		var LINK_COLORS={}
		
		for(var i = 0; i < WTI.length; ++i) {
			
			LINK_LENGTHS[WTI[i]] = 300
			
			if(WTI[i] == "archangel"){
				LINK_COLORS[WTI[i]] = "red"
			}else{
				LINK_COLORS[WTI[i]] = "blue"
			}
			
			LinkedPairs[fragmentName].push(WTI[i])
			
		}
		
	}
	//bb

		
	for(var next in TREE_MAP){
		var nameWithHtmlToProperNameOfFragment=FILE_NAME_TO_FRAGMENT_NAME[next.toString().toLowerCase()]
		let node={"name":nameWithHtmlToProperNameOfFragment.toString()}//next
		
		if(!WTI.includes(nameWithHtmlToProperNameOfFragment)){
			continue;
		}
		

		let whatColor=LINK_COLORS[nameWithHtmlToProperNameOfFragment].toString()
		node.color=whatColor
		
		graph.nodes.push(node);
		
		NodeNameToNode[nameWithHtmlToProperNameOfFragment]=node
		//alert("pushing:"+next)
	}
	


if(false){
	for(var next in TREE_MAP){
		var nameWithHtmlToProperNameOfFragment=FILE_NAME_TO_FRAGMENT_NAME[next.toString().toLowerCase()]
		let ProperName=nameWithHtmlToProperNameOfFragment;
		//CONNECT nodes by using path:
		let val=TREE_MAP[next]
		let SPLITTED=val.split('/')
		let SPLITTED_CORRECTED=[]
		
		var previousNodeName = null
		
		
		ADD_DIST[nameWithHtmlToProperNameOfFragment] = i*5
		for(var i = 0; i < SPLITTED.length; i++)
		{
			let what = SPLITTED[i]+".html";
			let properFragmentName = FILE_NAME_TO_FRAGMENT_NAME[what.toString().toLowerCase()]
			SPLITTED_CORRECTED[i] = properFragmentName
			
			
			if(previousNodeName != null){
				ADD_DIST[previousNodeName] = i*1
				
				if(LinkedPairs[previousNodeName]==null){
					//add list of children if such does not exist
					LinkedPairs[previousNodeName]=[]
				}
				//if(properFragmentName.length()!=0){//dont push empty fragment names//}
				
				//let node={"B": properFragmentName.toString()}
				let li=LinkedPairs[previousNodeName]
				if(li.includes(properFragmentName.toString())==false){
					//do tego wezla o nazwie previousNodeName ma byc dolaczony ten konkretny wezel:
					LinkedPairs[previousNodeName].push(ProperName.toString())
				}
				
				
			}
		
			
			previousNodeName = properFragmentName;
			
			if(i == SPLITTED.length-1){
			
			if(LinkedPairs[previousNodeName]==null){
				LinkedPairs[previousNodeName]=[]
			}

			   LinkedPairs[previousNodeName].push(ProperName)
			}
		}
		
			
	}
}
		
	for(var key in LinkedPairs){
		let children=LinkedPairs[key]
			
		children.forEach(function (item, index) {
			//let calculatedDistance=15*index+ADD_DIST[item]+ADD_DIST[key]

			
			
			if(!WTI.includes(item)){
				return;
			}
			
			if(!WTI.includes(key)){
				return;
			}
			
			
			let calculatedDistance=LINK_LENGTHS[item]
			
			graph.links.push({source: item, target: key, value: +5, distance:calculatedDistance});
		});
		
	}

	//var fileName = 'archangel.html';//location.href.split("/").slice(-1); 
	//graph.links.push({source: "1955", target: "15", value: +5});
	
	
	//let nextFileName="springsprung.html";
	//let path="here/History/PleasantLake/partfour/Phaedrus";
	//let pathSplit=path.split('/')
	
	//var SPLITTED=pathSplit;
	//var SPLITTED_CORRECTED=[]

	//for(var i = 0; i < SPLITTED.length; i++)
	//{
		//var what=SPLITTED[i]+".html";
		//SPLITTED_CORRECTED[i]=FILE_NAME_TO_FRAGMENT_NAME[what.toString().toLowerCase()]
	//	SPLITTED[i]=SPLITTED[i].toLowerCase()
	//}

  var link = svg.append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line")
    .attr("stroke-width", function(d) { return Math.sqrt(d.value); })
	.attr('marker-end','url(#arrowhead)');

  var node = svg.append("g")
    .attr("class", "nodes")
    .selectAll("g")
    .data(graph.nodes)
    .enter().append("g")
    
  var circles = node.append("circle")
      .attr("r", 6)
      //.attr("fill", function(d) { return color(d.color); })
	   .attr("fill", function(d) {  return d.color; })
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));

  var labels = node.append("text")
      .text(function(d) {
        return d.name;
      })
      .attr('x', 6)
      .attr('y', 3);

  node.append("title")
      .text(function(d) { return d.name; });

	simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

	  let force=simulation.force("link")
      force.links(graph.links);
		
	
  function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node
        .attr("transform", function(d) {
          return "translate(" + d.x + "," + d.y + ")";
        })
  }

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}
  
  function getData() {
    let json = {"nodes":[],"links":[]};
    return json;
  }
  
  
function inboundLinkToFragmentName(){
	  
}
 
 
function outboundLinkToFragmentName(){
	  
}

