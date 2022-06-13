

    var colors = d3.scaleOrdinal(d3.schemeCategory10);

    var svg = d3.select("#MAP_SVG"),
        width = +svg.attr("width"),
        height = +svg.attr("height"),
        node,
        link;

    svg.append('defs').append('marker')
        .attrs({'id':'arrowhead',
            'viewBox':'-0 -5 10 10',
            'refX':13,
            'refY':0,
            'orient':'auto',
            'markerWidth':13,
            'markerHeight':13,
            'xoverflow':'visible'})
        .append('svg:path')
        .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
        .attr('fill', '#999')
        .style('stroke','none');

    var simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function (d) {return d.id;}).distance(100).strength(1))
        .force("charge", d3.forceManyBody());
		
		
		
		
		//simulation.force("center", d3.forceCenter(width / 2, height / 2))
	
	
	


    //d3.json("graph.json", function (error, graph) {
      //  if (error) throw error;
     //   update(graph.links, graph.nodes);
  //  })

    function update(links, nodes) {
        link = svg.selectAll(".link")
            .data(links)
            .enter()
            .append("line")
            .attr("class", "link")
            .attr('marker-end','url(#arrowhead)')

        link.append("title")
            .text(function (d) {return d.type;});

        edgepaths = svg.selectAll(".edgepath")
            .data(links)
            .enter()
            .append('path')
            .attrs({
                'class': 'edgepath',
                'fill-opacity': 0,
                'stroke-opacity': 0,
                'id': function (d, i) {return 'edgepath' + i}
            })
            .style("pointer-events", "none");

        edgelabels = svg.selectAll(".edgelabel")
            .data(links)
            .enter()
            .append('text')
            .style("pointer-events", "none")
            .attrs({
                'class': 'edgelabel',
                'id': function (d, i) {return 'edgelabel' + i},
                'font-size': 10,
                'fill': '#aaa'
            });

        edgelabels.append('textPath')
            .attr('xlink:href', function (d, i) {return '#edgepath' + i})
            .style("text-anchor", "middle")
            .style("pointer-events", "none")
            .attr("startOffset", "50%")
            .text(function (d) {return d.type});

        node = svg.selectAll(".node")
            .data(nodes)
            .enter()
            .append("g")
            .attr("class", "node")
            .call(d3.drag()
                    .on("start", dragstarted)
                    .on("drag", dragged)
                    //.on("end", dragended)
            );

        node.append("circle")
            .attr("r", 5)
            .style("fill", function (d, i) {return colors(i);})

        node.append("title")
            .text(function (d) {return d.id;});

        node.append("text")
            .attr("dy", -3)
            .text(function (d) {return d.name+":"+d.label;});

        simulation
            .nodes(nodes)
            .on("tick", ticked);

        simulation.force("link")
            .links(links);
    }

    function ticked() {
        link
            .attr("x1", function (d) {return d.source.x;})
            .attr("y1", function (d) {return d.source.y;})
            .attr("x2", function (d) {return d.target.x;})
            .attr("y2", function (d) {return d.target.y;});

        node
            .attr("transform", function (d) {return "translate(" + d.x + ", " + d.y + ")";});

        edgepaths.attr('d', function (d) {
            return 'M ' + d.source.x + ' ' + d.source.y + ' L ' + d.target.x + ' ' + d.target.y;
        });

        edgelabels.attr('transform', function (d) {
            if (d.target.x < d.source.x) {
                var bbox = this.getBBox();

                rx = bbox.x + bbox.width / 2;
                ry = bbox.y + bbox.height / 2;
                return 'rotate(180 ' + rx + ' ' + ry + ')';
            }
            else {
                return 'rotate(0)';
            }
        });
    }

    function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart()
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }

//    function dragended(d) {
//        if (!d3.event.active) simulation.alphaTarget(0);
//        d.fx = undefined;
//        d.fy = undefined;
//    }



	var graph={}
	graph.links = []
	graph.nodes = []

//change links to other format by using map function
	graph.links = graph.links.map(function(ele) {
		return {source: ele.source, target: ele.dest, value: + ele.value}
	});
  
  
  /*for(var i=0;i<10;i++){
 
	let namee="x"
	let labell="y";
	let idd=(i+1);
	graph.nodes.push({"name":namee,"label":labell,"id":idd});
  
  }*/
  
  
    for(var i = 0;i < 10;i++){
 
		let namee="x"
		let labell="y";
		let idd=(i+1);
		//graph.nodes.push({"name":namee,"label":labell,"id":idd});
  
	}
	
  

	
  


  let MAIN_NODE_ID = 0;
  let OUTBOUND_NODE_ID_COUNTER = 1
  {
	//push current fragment
	let NAME = ""  + "Current Fragment";
	let LABEL = "";
	graph.nodes.push({"name":NAME,"label":LABEL,"id":MAIN_NODE_ID});
  }
  
  
  var INITIAL_ID=1;
  {//IN-ADD-CONNECT
    let inbound_div = document.getElementById("link_in")
	let inahrefs = inbound_div.getElementsByTagName('a');
	
	for (i = 0; i < inahrefs.length; ++i) {
			let e = inahrefs[i];
	
			let _name = e.text;
			let _label = "";
			let _id = INITIAL_ID+i;
			
			graph.nodes.push({"name":_name,"label":_label,"id":_id});
	}
  
    for(var i = 0; i < inahrefs.length; i++){
 
		//let src=i
		let src = MAIN_NODE_ID
		let tgt = INITIAL_ID+i//bo linki zaczynaja sie od i+1
	  
		let LABEL=inahrefs[i].text
		
		graph.links.push({source: tgt, target: src, "type": LABEL,"since": 2010});
	  
	}
	
	INITIAL_ID = inahrefs.length+1;
  }
  
   {
	//OUT-ADD-CONNECT
    let outbound_div = document.getElementById("link_out")
	let outahrefs = outbound_div.getElementsByTagName('a');
	
	for (i = 0; i < outahrefs.length; ++i) {
			let e = outahrefs[i];
	
			let _name = e.text;
			let _label = "";
			let _id = INITIAL_ID + i;
			
			graph.nodes.push({"name":_name,"label":_label,"id":_id});
	}
  
    for(var i = 0; i < outahrefs.length; i++){
 
		//let src=i
		let src = MAIN_NODE_ID
		let tgt = INITIAL_ID+i
	  
		let LABEL = outahrefs[i].text
		
		graph.links.push({source: src, target: tgt, "type": LABEL,"since": 2010});
	  
	}
  }
  
  
  //add outbound link nodes
  /*let links=GetLinksList();
  for(var i = 0; i < links.length; ++i) {

	let linkTitle=links[i].title;
	let linkHref=links[i].href;
	var prawa_czesc_ze_strzalka = (links[i].rev_title ? links[i].rev_title : getFileName(links[i].href));


	let NAME = ""+prawa_czesc_ze_strzalka;
	let LABEL = "";
	let ID = OUTBOUND_NODE_ID_COUNTER++;
	graph.nodes.push({"name":NAME,"label":LABEL,"id":ID});
	
	}
*/

	//connect outbound link nodes with main node(
   /*for(var i = 0; i < links.length; i++){
 
	//let src=i
	let src = MAIN_NODE_ID
	let tgt = i+1//bo linki zaczynaja sie od i+1
  
	let LABEL=links[i].title
	
	graph.links.push({source: src, target: tgt, "type": LABEL,"since": 2010});
  
  }*/
  
  //add inbound nodes
  let foundInbound=FindEntriesWhichLeadToFragment(GetCurrentFileNameWITHOUTDotHTML());
  //alert(GetCurrentFileNameWITHOUTDotHTML())
  //alert(foundInbound)
  
  let INBOUND_NODE_COUNTER_START = OUTBOUND_NODE_ID_COUNTER
  for(var i = 0; i < foundInbound.length; ++i) {

	let NAME = "" + foundInbound[i];
	let LABEL = "";
	let ID = INBOUND_NODE_COUNTER_START + i;
	//graph.nodes.push({"name":NAME,"label":LABEL,"id":ID});
	
  }
  
  //connect inbound link nodes with main node(
   for(var i = 0; i < foundInbound.length; i++){
 
	let src = INBOUND_NODE_COUNTER_START + i
	let tgt = MAIN_NODE_ID
	let LABEL="_"
	
	//graph.links.push({source: src, target: tgt, "type": LABEL,"since": 2010});
  
  }
  
  
	//graph.nodes.push({"name":"and where","label":"and where","id":1});
	//graph.nodes.push({"name":"and where2","label":"and where2","id":2});

	//graph.links.push({source: 1, target: 2, "type": "KNOWS","since": 2010});
	
//json.links.push({"source":"ser2","dest":"ser5","value":"10"});

	update(graph.links, graph.nodes);