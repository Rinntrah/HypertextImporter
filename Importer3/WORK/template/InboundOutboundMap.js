var last_zoom_x = 0;
var last_zoom_y = 0;
var last_transform_io = null;
var last_transform_hier = null;

var get_IO = null;
var get_HIER = null;

class GraphDragHandler {
    simulation_in_out = null;

    constructor(simulation_in_out) {
        this.simulation_in_out = simulation_in_out;
    }

    io_dragstarted(d) {
        if (!d3.event.active)
            this.simulation_in_out.alphaTarget(0.1).restart()
        d.fx = d.x;
        d.fy = d.y;
    }

    io_dragend(d) {
        if (!d3.event.active)
            this.simulation_in_out.alphaTarget(0).restart()
    }

    io_dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }
}

class GraphContainer {

    static getNodeName(e) {
        let _name = htmlFileNameToFragmentName(e.href);

        if (_name == null) {
            _name = e.href + "(missing html to fragment name translation";
        }

        if (_name == "null") {
            _name = e.href + "(missing in filename_to_fragmentname.js)";
        }

        if (!_name || _name == null || _name == "null") {
            _name = "error! this link had no href!";
        }


        /*if (_name.length == 0 || name == "null") {
         _name = "rt" + getFileName(e.getAttribute("rev_title"));
         }
         
         if (_name.length == 0 || name == "null") {
         _name = "ih" + e.innerHTML;
         }
         
         if (_name.length == 0 || name == "null") {
         _name = "null?";
         }
         */
        return _name
    }

    graphDragHandler = null;
    isIOGraph = false;
    io_link = null;
    io_edgepaths = null;
    io_edgelabels = null;
    io_node = null;

    constructor() {
    }

    makeTripleDiv = false;

    getGraphDragHandler() {
        return this.graphDragHandler;
    }

    clearGraph(outerThis) {
        let force = outerThis.simulation;
        // let nodes = force.nodes();
        let svg = outerThis.svg;

        //wyczysc calkowicie svg:
        svg.selectAll(".node").remove();
        svg.selectAll(".link").remove();
        svg.selectAll(".edgepath").remove();
        svg.selectAll(".edgelabel").remove();
        svg.selectAll(".text").remove();
        svg.selectAll(".textpath").remove();
        svg.selectAll(".path").remove();
        svg.selectAll("*").remove();

        //teraz mozna ponownie podlaczyc

        /*
         let node = svg.selectAll(".node").data(nodes);//wybierz wszystkie node z svg, data binduje dane do nich
         
         //  node.enter().insert("circle", ".cursor")
         //        .attr("class", "node")
         //       .attr("r", 15)
         //      .on("mousedown", function (a, b) {
         //        outerThis.mousedownNode(a, b, outerThis);
         //     });
         node.remove();
         // node.exit().remove();
         
         let d3linkObjects = svg.selectAll(".link");
         d3linkObjects = d3linkObjects.data(outerThis.links);
         d3linkObjects.enter().insert("line", ".node").attr("class", "link");
         d3linkObjects.exit().remove();
         */

        //  force.restart();
    }

    /* mousedownNode(d, i, outerThis) {
     let nodes = this.simulation.nodes();
     
     nodes.splice(i, 1);
     
     outerThis.links = outerThis.links.filter(function (l) {
     return l.source !== d && l.target !== d;
     });
     
     d3.event.stopPropagation();
     
     outerThis.restart(outerThis);
     }
     */

    rectHeight = 40;
    rectWidth = 40;
    forceStrength = 1;
    forceDistance = 150;

    whatToDoOnRectClick(d, i) {
        window.location.href = d.href;
    }

    graphUpdate(svg, links, nodes) {
        this.links = links;

        //url(#js_pattern_checkers)
        //url(#arrowhead)
        /*  this.io_link.append("a") to nie appenduje tekstu
         .attr("class", function (d, i) {
         return d.linkTitleCustomClass
         })
         .text(function (d) {
         return d.type;
         });*/

        this.io_edgepaths = svg.selectAll(".edgepath")
                .data(links)
                .enter()
                .append('path')
                .attrs({
                    'class': 'edgepath',
                    'fill-opacity': 0,
                    'stroke-opacity': 0,
                    'id': function (d, i) {
                        return 'edgepath' + i
                    }
                })
                .style("pointer-events", "none");

        //podpisy nad linkami
        this.io_edgelabels = svg.selectAll(".edgelabel")
                .data(links)
                .enter()
                .append('text')
                .style('pointer-events', 'none')
                .attrs({
                    'class': function (d, i) {
                        return d.linkTitleCustomClass;
                    },
                    'id': function (d, i) {
                        return 'edgelabel' + i
                    },
                    'font-size': 10,
                    'dy': 0,
                    'fill': '#aaa'

                });

        // this.io_edgelabels.selectAll("*").remove();

        //bylo tylko dla IO
        //if (this.isIOGraph)
        {
            this.io_edgelabels.append('textPath')
                    .attr('class', function (d, i) {
                        return d.linkTitleCustomClass;
                    })
                    .attr('xlink:href', function (d, i) {
                        return '#edgepath' + i
                    })
                    .style("text-anchor", "middle")
                    .style("pointer-events", "none")
                    .attr("startOffset", "50%")
                    .text(function (d) {
                        return d.type + "";//[][][]
                    });
        }

        let outerThis = this;

        this.io_link = svg.selectAll(".link")
                .data(links)
                .enter()
                .append("line")
                //.attr("class", "link")
                .attr("class", function (d, i) {
                    return "link " + d.customClass;
                })
                .attr('marker-end', function (d, i) {
                    if (!d.customClass)
                        return;

                    if (d.customClass.toString().includes("io-link-inbound")) {
                        return 'url(#arrowEndingTheLink)';//strzalki zaleznie od koloru linku
                    }


                    if (d.customClass.toString().includes("io-link-outbound")) {
                        return 'url(#arrowEndingTheLink2)';
                    }

                    if (d.customClass.toString().includes("hier-link")) {
                        return 'url(#arrowEndingTheLink3)';
                    }

                    return 'url(#arrowEndingTheLink)';
                });

        this.io_node = svg.selectAll(".node")
                .data(nodes)
                .enter()
                .append("g")
                .attr("class", "node")
                .call(d3.drag()//this adds dragging functionality
                        .on("start", function (d) {
                            outerThis.getGraphDragHandler().io_dragstarted(d);
                        })
                        .on("drag", function (d) {
                            outerThis.getGraphDragHandler().io_dragged(d);
                        })
                        .on("end", function (d) {
                            outerThis.getGraphDragHandler().io_dragend(d);
                        })
                        );

        /*  .on("mousedown", function (a, b) {
         outerThis.mousedownNode(a, b, outerThis);
         });*/

        //var colors = d3.scaleOrdinal(d3.schemeCategory10);
        let rectClazz = "testowa-klasa";

        if (this.customRectClassName != null) {
            rectClazz = this.customRectClassName;
        }

        if (rectClazz == 'hierarchy-rect') {
            rectClazz = "hier-all";
        }


        //TU ZACZYNAJ¥ SIÊ PATTERNY ZDEFINIOWANE W JS
        var additionalPattern1 = d3.select("body")
                .append("svg");

        let subElementOfPattern = additionalPattern1
                .attr('class', 'w-24 h-24')
                .append('defs')
                .append('pattern')
                .attr('id', 'SVG_PATTERN_ID_MADE_IN_JS')
                .attr('patternUnits', 'userSpaceOnUse')
                .attr('width', 10)
                .attr('height', 4)//gestosc
                .attr('patternTransform', 'rotate(00)');

        //rect aby zas³oniæ to co pod spodem
        subElementOfPattern.append('rect')
                .attr('width', '10')
                .attr('height', '10')
                .attr('fill', '#DADADA');

        subElementOfPattern.append('line')
                .attr('x1', '0').attr('y', '0').attr('x2', '0').attr('x1', '10')
                // .attr('d', 'M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2')
                .attr('stroke', '#ABABAB')
                .attr('stroke-width', 4);

        //pattern -checkers
        var additionalPattern2_svg = d3.select("body")
                .append("svg")
                .attr('width', "50px")//width ca³oœci
                .attr('height', "50px")//height ca³oœci
                .attr('id', 'js_pattern_checkers-svg');

        var additionalPattern2_pattern = additionalPattern2_svg
                .append('pattern');

        additionalPattern2_pattern
                .attr('id', 'js_pattern_checkers')
                .attr('x', 0)
                .attr('y', 0)
                .attr('patternUnits', "userSpaceOnUse")
                .attr('width', "10px")//width fragmentu
                .attr('height', "10px");//height fragmentu

        //checker pattern sk³ada siê z 2 prostok¹tów, drugi jest przemieszczony o 100 jednostek w x i y(100,100)
        additionalPattern2_pattern.append('rect')
                .attr('class', 'checkerContains')
                .attr('x', 0)
                .attr('y', 0)
                .attr('width', "5px")//w pierwszego prostok¹ta
                .attr('height', "5px");//h pierwszego prostok¹ta

        additionalPattern2_pattern.append('rect')
                .attr('class', 'checkerContains')
                .attr('x', 100)//drugi prostok¹t- przemieszczenie x
                .attr('y', 100)//drugi prostok¹t- przemieszczenie y
                .attr('width', "5px")//rozmiar drugiego prostok¹ta
                .attr('height', "5px");

        additionalPattern2_svg
                .append('rect')//to tylko rect w œrodku svg, zawieraj¹cy pattern jako fill, nie powinno byæ potrzeby edycji tego.
                .attr('x', 0)
                .attr('y', 0)
                .attr('width', "100%")
                .attr('height', "100%")
                .attr('fill', "url(#js_pattern_checkers)");

        //definicja wygladu arrowhead
        var additionalPattern3_svg = d3.select("body").append("svg");
        additionalPattern3_svg.append('defs').append('marker')
                .attrs({'id': 'arrowEndingTheLink',
                    'viewBox': '0 0 10 10',
                    'refX': 0,
                    'refY': 5,
                    'markerUnits': 'strokeWidth',
                    'orient': 'auto',
                    'markerWidth': 4,
                    'markerHeight': 4,
                })
                .append('svg:path')
                .attr('d', 'M 0 0 L 10 5 L 0 10 z')
                .attr('fill', '#808080');

        var additionalPattern4_svg = d3.select("body").append("svg");
        additionalPattern4_svg.append('defs').append('marker')
                .attrs({'id': 'arrowEndingTheLink2',
                    'viewBox': '0 0 10 10',
                    'refX': 0,
                    'refY': 5,
                    'markerUnits': 'strokeWidth',
                    'orient': 'auto',
                    'markerWidth': 4,
                    'markerHeight': 4,
                })
                .append('svg:path')
                .attr('d', 'M 0 0 L 10 5 L 0 10 z')
                .attr('fill', 'white');

        var additionalPattern5_svg = d3.select("body").append("svg");
        additionalPattern5_svg.append('defs').append('marker')
                .attrs({'id': 'arrowEndingTheLink3',
                    'viewBox': '0 0 10 10',
                    'refX': 0,
                    'refY': 5,
                    'markerUnits': 'strokeWidth',
                    'orient': 'auto',
                    'markerWidth': 10,
                    'markerHeight': 10,
                })
                .append('svg:path')
                .attr('d', 'M 0 0 L 10 5 L 0 10 z')
                .attr('fill', 'gray');

        //KONIEC PATTERNÓW JS
        let makeTripleDiv = this.makeTripleDiv;
        if (!makeTripleDiv) {

            let xd1 = this.io_node.append("rect");
            xd1.
                    attr('width', this.rectWidth)
                    .attr('height', this.rectHeight)
                    .attr('stroke', 'black')
                    .attr('fill', 'url(#diagonalHatch)')
                    .attr('class', function (d, i) {
                        return  d.customClass; //rectClazz + " " +
                    })
                    //.attr("transform", "translate(" + this.rectWidth / -2 + "," + this.rectHeight / -2 + ")")//translate rects
                    .on('click', function (d, i) {
                        return outerThis.whatToDoOnRectClick(d, i);
                    });

            this._Maps_GetCurrentRectWidth = function () {
                return xd1.style('width');
            };

            this._Maps_GetCurrentRectHeight = function () {
                return xd1.style('height');
            };

        } else {

            let xd1 = this.io_node.append("rect");
            xd1
                    .attr('stroke', 'black')
                    // .attr('fill', 'url(#diagonalHatch)')
                    .attr('class', function (d, i) {
                        return rectClazz + " " + d.customClass;
                    })
                    //  .attr("transform", "translate(" + this.rectWidth / -2 + "," + this.rectHeight / -2 + ")")//translate rects
                    .on('click', function (d, i) {
                        return outerThis.whatToDoOnRectClick(d, i);
                    });

            this._Maps_GetCurrentRectWidth = function () {
                return xd1.style('width');
            };
            this._Maps_GetCurrentRectHeight = function () {
                return xd1.style('height');
            };


            function divRectAppendor(selfOb, Y, mainRect) {

                const selfOb2 = selfOb;
                let io_node = selfOb2.io_node;
                const NumDiv = 3;

                let x = io_node.append("rect")
                        .attr('width', W)
                        .attr('height', H / NumDiv)
                        .attr('fill', 'transparent')
                /*    .attr("transform", function (d, i) {
                 let io_node = selfOb2.io_node;
                 let W = mainRect.style('width');
                 let H = mainRect.style('height');
                 
                 return "translate(" + W / -2 + "," + ((H / -2) + (H / NumDiv * Y)) + ")"
                 
                 });*/

                io_node.append("text")
                        /*  .attr("transform", function (d, i) {
                         let io_node = selfOb2.io_node;
                         let W = mainRect.style('width');
                         let H = mainRect.style('height');
                         return "translate(" + W / -2 + "," + ((H / -2) + (H / NumDiv * (Y + 1))) + ")";
                         })*/
                        .attr("dy", -2)
                        .append("a")

                        /*.attr("class", function (d) {
                         return d.lexiaTitleCustomClass;
                         })
                         .attr('xlink:href', function (d) {
                         return d.href;
                         })*/
                        .attr('width', 123)
                        .text(function (d) {
                            return "TESSTSTST";
                        });
                return x;
            }

            let W = this.rectWidth;
            let H = this.rectHeight;
            let NumDiv = 3;
            let Y = 0;

            //  this.io_node.attr("transform", "translate(" + W / -2 + "," + ((H / -2) + (H / NumDiv * Y)) + ")");
            //divRectAppendor(this,0,xd1).attr('fill', 'rgba(255,0,1,1.1)')
            //divRectAppendor(this,1,xd1).attr('fill', 'rgba(255,0,1,0.1)')
            //divRectAppendor(this,2,xd1).attr('fill', 'rgba(255,255,1,0.1)')
            /*abab.append("div")
             .text(function (d) {
             return "div2";
             })
             abab.append("div")
             .text(function (d) {
             return "div3";
             });*/
        }


        /* const title = this.io_node.append("title")
         .text(function (d) {
         return d.id;
         })
         
         .attr("text-anchor", "middle")
         .attr("dominant-baseline", "central")
         */

        this.io_node.append("text")
                .attr("dy", -3)
                .attr("text-anchor", "middle")//centruje tekst wzgledem punktu poczatkowego
                .append("a")//tutaj a tak naprawde przykrywa "text", taki hack, aby href zadziaÅ‚aÅ‚ [CLICKABLE TEXT]
                .attr("class", function (d) {
                    return d.lexiaTitleCustomClass;
                })
                .attr('xlink:href', function (d) {
                    return d.href.toString().toLowerCase();
                })
                .attr('width', 123456)
                .text(function (d) {
                    return d.name;//+ ":" + d.label;
                });


        let outer = this;

        let callTickDelegate = function () {
            let tickFunction = outer.tickGraph;
            tickFunction(outer);
        };


        {
            let isIOMap = this.isIOGraph;
            let whatStrength = -175;
            if (isIOMap == false) {
                whatStrength = -61;//hier-repel
            }

            let outer = this;
            let strengthOfNodeRepel = -255;
            if (isIOMap == false) {
                strengthOfNodeRepel = -300;
            }

            let simulation = d3.forceSimulation()
                    .force("link",
                            d3.forceLink()
                            .id(function (d) {
                                return d.id;
                            }).distance(function (d) {

                        let amount = outerThis.forceDistance;

                        if (d.TypeOfLink == 'IN') {
                            amount = outerThis.forceDistance + 25;
                        } else {
                            amount = outerThis.forceDistance + 50;
                        }


                        if (isIOMap == false) {
                            amount = amount * 3;

                        }

                        return amount;
                    }
                    ).strength(outer.forceStrength))
                    .force("charge", d3.forceManyBody().strength(strengthOfNodeRepel))


            //.strength (function (d) {return weightScale(d.weight)})
            //.force('charge', d3.forceManyBody().strength(5))

            if (isIOMap) {

                simulation.force('x', d3.forceX().x(function (d) {
                    let N = 300;
                    let side = -1 + (2 * (d.TypeOfNode == 'OUT'));//-1 lub 1
                    return 250;//gdzie sa przyciagfane wezly OUT(x wspolrzedna wzgl. srodka ukladu)
                }).strength(function (d) {
                    return (1 * (d.TypeOfNode == 'OUT'));
                }));

            } else {



            }

            //    .force('y', d3.forceY().y(function (d) {
            //    return -100 * (d.TypeOfNode == "OUT");
            //   }))

            simulation.on("tick", callTickDelegate)
                    .nodes(nodes);

            simulation.force("link")
                    .links(links);

            this.simulation = simulation;
            this.graphDragHandler = new GraphDragHandler(simulation);
        }
    }

    tickGraph(outer) {
        let isIOMap = outer.isIOGraph;

        if (isIOMap) {
            get_IO = outer;
        } else {
            get_HIER = outer;
        }

        //if(true)return;
        let w_of_io_map = document.getElementById(outer.d3SelectArgument.toString().replace("#", "")).clientWidth;
        let h_of_io_map = document.getElementById(outer.d3SelectArgument.toString().replace("#", "")).clientHeight;

        w_of_io_map = 0;
        h_of_io_map = 0;

        class Vector2 {
            x = 0;
            y = 0;

            normalizeLocal() {
                let x = this.x;
                let y = this.y;

                var mag = Math.sqrt(x * x + y * y);
                this.x = this.x / mag;
                this.y = y / mag;

            }
            addLocal(x, y) {
                this.x = this.x + x;
                this.y = this.y + y;
            }

            multLocal(scalar) {
                this.x *= scalar;
                this.y *= scalar;
            }

        }

        let calcFunc = function (d, forWhat) {
            let x1 = d.source.x;
            let y1 = d.source.y;

            let x2 = d.target.x;
            let y2 = d.target.y;

            let a1 = x2 - x1;
            let a2 = y2 - y1;

            let constant = 40;

            let v1 = new Vector2();
            v1.x = x1;
            v1.y = y1;

            let v2 = new Vector2();
            v2.x = x2;
            v2.y = y2;

            let HOW_MUCH_SIDE1 = 0.0;
            let HOW_MUCH_SIDE2 = 35.0;

            if (forWhat == "x1" || forWhat == "y1") {

                let v3Delta = new Vector2();
                v3Delta.x = x2 - x1;
                v3Delta.y = y2 - y1;
                v3Delta.normalizeLocal();
                v3Delta.multLocal(HOW_MUCH_SIDE1);

                let v4 = new Vector2();
                v4.addLocal(v1.x, v1.y);
                v4.addLocal(v3Delta.x, v3Delta.y);
                return v4;
            }

            if (forWhat == "x2" || forWhat == "y2") {

                let v3Delta = new Vector2();
                v3Delta.x = x2 - x1;
                v3Delta.y = y2 - y1;
                v3Delta.normalizeLocal();
                v3Delta.multLocal(-HOW_MUCH_SIDE2);


                let v4 = new Vector2();
                v4.addLocal(v2.x, v2.y);
                v4.addLocal(v3Delta.x, v3Delta.y);
                return v4;
            }
        }

        //io_link
        let ioLinkPosition = outer.io_link;
        ioLinkPosition
                .attr("x1", function (d) {
                    // a1 = a1 + (constant * Math.sign(a1));
                    //   a2 = a2 + (constant * Math.sign(a2));
                    return calcFunc(d, "x1").x;
                })
                .attr("y1", function (d) {
                    let x1 = d.source.x;
                    let y1 = d.source.y;

                    let x2 = d.target.x;
                    let y2 = d.target.y;

                    return calcFunc(d, "y1").y;
                })
                .attr("x2", function (d) {
                    let x1 = d.source.x;
                    let y1 = d.source.y;

                    let x2 = d.target.x;
                    let y2 = d.target.y;

                    let a1 = x2 - x1;
                    let a2 = y2 - y1;

                    let constant = 40;

                    return calcFunc(d, "x2").x;
                })
                .attr("y2", function (d) {
                    let x1 = d.source.x;
                    let y1 = d.source.y;

                    let x2 = d.target.x;
                    let y2 = d.target.y;

                    let deltaX = x2 - x1;
                    let deltaY = y2 - y1;

                    let length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

                    return calcFunc(d, "y2").y;
                });


        let RectOff = 20;
        let RectOffHier = 25;
        var kscale = 0;

        outer.io_node.attr("transform", function (d) {

            if (isIOMap) {

                if (last_transform_io == null || last_transform_io.x == null)
                    return;

                try {
                    let ad = "translate(" + ((-RectOff * last_transform_io.k) + 1 + last_transform_io.x + d.x * last_transform_io.k) + "," + ((-RectOff * last_transform_io.k) + 1 + last_transform_io.y + d.y * last_transform_io.k) + ") scale(" + last_transform_io.k + ")";
                    return ad;
                } catch (e) {
                    console.log(e);
                    return "translate(0,0)";
                }

            } else {

                if (last_transform_hier == null || last_transform_hier.x == null)
                    return;
                try {
                    let ad = "translate(" + ((-RectOffHier * last_transform_hier.k) + last_transform_hier.x + d.x * last_transform_hier.k) + "," + ((-RectOffHier * last_transform_hier.k) + last_transform_hier.y + d.y * last_transform_hier.k) + ") scale(" + last_transform_hier.k + ")";
                    return ad;
                } catch (e) {
                    console.log(e);
                    return "translate(0,0)";
                }

            }

            //if (kscale == 0)
            // return;
            //return last_transform_io;
            //  return "translate(" + (d.x + w_of_io_map / 2) + ", " + (d.y + h_of_io_map / 2) + ")";
            //  return "translate(" + (d.x + last_zoom_x) + "," + (d.y + last_zoom_y) + ") scale(" + kscale + "," + kscale + ")";
        });

        //TYTU£Y NAD PROSTOK¥TAMI LEKSJI
        //keep titles of nodes(on hier and on io) centered
        outer.io_node.selectAll('text').attr("dx", hehe => {
            let b = outer._Maps_GetCurrentRectWidth().replace('px', '');
            return 0 + 4 + 15;//b/2
        });

        //y tytulow leksji 
        outer.io_node.selectAll('text').attr("dy", hehe => {
            return -10;
        });

        //mo¿na ograniczyæ tylko do jednego z typów grafu:
        var activeGraph = "io";


        if (outer.isIOGraph)
        {
            //to ustawia podpisy nad linkami, przyjmuje dwa punkty x1,y1 x2,y2, aby rozstawiæ na prostej
            outer.io_edgepaths.attr('d', function (d) {
                let WYSOKOSC_PODPISOW = 0;//duplikacja w else
                return 'M ' + (d.source.x) + ' ' + (d.source.y + (Math.sign(d.source.y) * WYSOKOSC_PODPISOW)) + ' L ' + (d.target.x) + ' ' + (d.target.y + (Math.sign(d.target.y) * WYSOKOSC_PODPISOW));
            });


            //po przelaczeniu gora dol w hier i powrocie do IO, przeciekaja podpisy do IO, to jest fix, ktory przesuwa te podpisy.
            if (get_HIER != null && get_HIER.io_edgepaths != null) {
                //hier-get is set
                get_HIER.io_edgepaths.attr('d', function (d) {
                    let WYSOKOSC_PODPISOW = 0;
                    return 'M ' + (0) + ' ' + (0 + (0 * WYSOKOSC_PODPISOW)) + ' L ' + (1) + ' ' + (1 + (1));
                });
            }

        } else {
            outer.io_edgepaths.attr('d', function (d) {
                let WYSOKOSC_PODPISOW = 0;
                return 'M ' + (d.source.x) + ' ' + (d.source.y + (Math.sign(d.source.y) * WYSOKOSC_PODPISOW)) + ' L ' + (d.target.x) + ' ' + (d.target.y + (Math.sign(d.target.y) * WYSOKOSC_PODPISOW));
            });

        }

        //ODSTÊP PODPISÓW LINKÓW OD LINII
        outer.io_edgelabels.attr("dy", hehe => {
            return -3;
        });

        //obroty podpisów linków
        outer.io_edgelabels.attr('transform', function (d) {
            //  let addOffset = "translate(0,0)";
            if (d.target.x < d.source.x) {
                var bbox = this.getBBox();
                let  rx = bbox.x + bbox.width / 2;
                let  ry = bbox.y + bbox.height / 2;

                return 'rotate(180 ' + rx + ' ' + ry + ')';
            } else {
                return 'rotate(0)';
            }
        });
        //xxxx
    }

    //    function dragended(d) {
    //        if (!d3.event.active) simulation_in_out.alphaTarget(0);
    //        d.fx = undefined;
    //        d.fy = undefined;
    //    }


    createGraph() {
        //returns base graph object
        let graph = {};
        graph.links = [];
        graph.nodes = [];

        //change links to other format by using map function
        graph.links = graph.links.map(function (ele) {
            return {source: ele.source, target: ele.dest, value: +ele.value};
        });


        /* let foundInbound = FindEntriesWhichLeadToFragment(GetCurrentFileNameWITHOUTDotHTML());
         let INBOUND_NODE_COUNTER_START = OUTBOUND_NODE_ID_COUNTER
         
         for (var i = 0; i < foundInbound.length; ++i) {
         
         let NAME = "" + foundInbound[i];
         let LABEL = "";
         let ID = INBOUND_NODE_COUNTER_START + i;
         }*/

        //connect inbound link nodes with main node(
        /*for (var i = 0; i < foundInbound.length; i++) {
         
         let src = INBOUND_NODE_COUNTER_START + i
         let tgt = MAIN_NODE_ID
         let LABEL = "_"
         
         }*/
        return graph;
    }

    makeMap(d3SelectArgument, graph) {
        this.d3SelectArgument = d3SelectArgument;

        let svg = d3.select(d3SelectArgument),
                width = +svg.attr("width"),
                height = +svg.attr("height"),
                node,
                link;

        this.svg = svg;

        /*  svg.append("svg:defs").selectAll("marker")
         .data(["arrow"])
         .enter().append("svg:marker")
         .attr("id", "arrow")
         .attr("viewBox", "0 -5 10 10")
         .attr("refX", 10)
         .attr("refY", -1.5)
         .append("svg:path")
         .attr("d", "M0,-5L10,0L0,5");*/

        this.graphUpdate(svg, graph.links, graph.nodes);
        //   alert("io_link:" + this.io_link)
        try {
            this.tickGraph(this);
        } catch (e) {
            alert(e);
        }
        // alert("io_link:" + this.io_link)
    }
}

//class KontenerZMapaLatwyDoPodmiany{
//}
//let  mapa1=new KontenerZMapaLatwyDoPodmiany(argumenty);
//let  mapa2=new KontenerZMapaLatwyDoPodmiany(argumenty);


class MapGenTemplateMethod {
    INITIAL_ID = 1;
    MAIN_NODE_ID = 0;

    allNodesCustomClass = "io-allNodes"
    focusNodeCustomClass = "io-focusNode"
    allExceptFocus = "io-allExceptFocus"

    outboundNodeCustomClass = "io-outboundNode"
    inboundNodeCustomClass = "io-inboundNode"
    linkCustomClass = "io-link"

    //  linkTitleCustomClass = "io-linkTitle"
    lexiaTitleCustomClass = "io-lexiaTitle"

    a(graph) {
        let OUTBOUND_NODE_ID_COUNTER = 1;
        //push current fragment
        let href = document.location;
        //Current Fragment
        let NAME = "" + htmlFileNameToFragmentName(CurrentFileName());
        let LABEL = "";
        graph.nodes.push({name: NAME, label: LABEL, id: this.MAIN_NODE_ID, href: href, lexiaTitleCustomClass: this.lexiaTitleCustomClass + " inFocus-LexiaTitle", TypeOfNode: "CURRENT", customClass: this.focusNodeCustomClass + " " + this.allNodesCustomClass});
        return graph;
    }

    b(graph) {
        //IN-ADD-CONNECT    
        //get inbound div

        let inahrefs = INBOUND_OUTBOUND_MAP[GetCurrentFileNameDotHTML()];

        if (!inahrefs) {
            alert("for this fragment there is no inbound-link information; it may be a bug;")
            return;
        }

        //make in nodes from inbound div
        for (let i = 0; i < inahrefs.length; ++i) {
            let isInLink = inahrefs[i].linkType == "inbound";
            let isOutLink = inahrefs[i].linkType == "outbound";

            if (!isInLink)
                continue;

            let e = inahrefs[i];
            let _name = GraphContainer.getNodeName(e);

            let _label = "";
            let _id = this.INITIAL_ID + i;
            //graph.nodes.push({name: _name, label: _label, id: _id});
            let href = e.href.toString().toLowerCase();
            //(IN)
            graph.nodes.push({name: "" + _name, label: _label, id: _id, href: href, lexiaTitleCustomClass: this.lexiaTitleCustomClass, TypeOfNode: "IN", customClass: this.inboundNodeCustomClass + " " + this.allNodesCustomClass});
        }


        //make links from previously added in nodes to current
        for (let i = 0; i < inahrefs.length; i++) {
            let isInLink = inahrefs[i].linkType == "inbound";
            let isOutLink = inahrefs[i].linkType == "outbound";
            if (!isInLink)//CONNECT WITH IN LINKS
                continue;

            //let src=i
            let src = this.MAIN_NODE_ID;
            let tgt = this.INITIAL_ID + i;//bo linki zaczynaja sie od i+1

            let LABEL = inahrefs[i].rev_title;
            //LABEL = "123-test-in";
            if (!LABEL) {
                LABEL = inahrefs[i].txt_content;
            }

            if (!LABEL) {
                LABEL = "! missing rev_title for:" + inahrefs[i].toString();
            }

            //polacz INBOUND z CURRENT elementem
            graph.links.push({TypeOfLink: 'IN', source: tgt, target: src, type: LABEL, since: 2010, linkTitleCustomClass: "io-linkTitle io-linkTitle-inbound", customClass: this.linkCustomClass + " io-link-inbound"});
        }

        this.INITIAL_ID = inahrefs.length + 1;
    }

    c(graph) {
        //OUT-ADD-CONNECT

        let outahrefs = INBOUND_OUTBOUND_MAP[GetCurrentFileNameDotHTML()];

        if (!outahrefs) {
            alert("for this fragment there is no outbound-link information; it may be a bug;")
            return;
        }

        for (let i = 0; i < outahrefs.length; ++i) {

            let isOutLink = outahrefs[i].linkType == "outbound";
            if (!isOutLink)
                continue;

            let e = outahrefs[i];
            let _name = GraphContainer.getNodeName(e);

            let LABEL = "";
            let _id = this.INITIAL_ID + i;
            let href = e.href.toString().toLowerCase();
            LABEL = "aaaaa-do-czego-to";// do czego to? usunac?
            //(OUT)
            graph.nodes.push({name: "" + _name, label: LABEL, id: _id, href: href, lexiaTitleCustomClass: this.lexiaTitleCustomClass, customClass: this.outboundNodeCustomClass + " " + this.allNodesCustomClass, TypeOfNode: "OUT"});
        }

        for (let i = 0; i < outahrefs.length; i++) {
            let isOutLink = outahrefs[i].linkType == "outbound";

            if (!isOutLink)//CONNECT WITH OUT LINKS
                continue;

            let src = this.MAIN_NODE_ID;
            let tgt = this.INITIAL_ID + i;
            let LABEL = outahrefs[i].rev_title;

            //LABEL = "123-test-out"
            if (!LABEL) {
                LABEL = outahrefs[i].txt_content;
            }

            if (!LABEL) {
                LABEL = "! missing rev_title for:" + outahrefs[i].toString();
            }

            //polacz OUT z CURRENT
            graph.links.push({TypeOfLink: 'OUT', source: src, target: tgt, type: LABEL, since: 2010, linkTitleCustomClass: "io-linkTitle io-linkTitle-outbound", customClass: this.linkCustomClass + " io-link-outbound"});
        }

    }

    gen(graph) {
        this.INITIAL_ID = 1;
        this.MAIN_NODE_ID = 0;
        this.overridableSteps(graph);
        return graph;
    }

    overridableSteps(graph) {
        this.a(graph);
        this.b(graph);
        this.c(graph);
    }

}

class MapGenTemplateMethodForHierarchy extends MapGenTemplateMethod {

    HierarchyData = null;

    allNodesCustomClass = "hier-allNodes"
    focusNodeCustomClass = "hier-focusNode"
    allExceptFocus = "hier-allExceptFocus"

    linkCustomClass = "hier-link"

    containsLexiaClass = "hier-containsLexia"
    containsNOLexiaClass = "hier-containsNoLexia"

    lexiaTitleCustomClass = "hier-lexiaTitle"

    constructor(HierarchyData) {
        super();
        this.HierarchyData = HierarchyData;
    }

    //zamiast a/b/c
    fromHierarchyDataMakeNodes(graph) {
        let HierarchyData = this.HierarchyData;

        let NodeDataContainerObject = HierarchyData.childrenFragmentNamesInside;//array stringow
        NodeDataContainerObject.push(HierarchyData.fragmentName);//ADD CURRENT FOCUS FRAGMENT

        //MAKE NODES from above children(strings)
        for (let i = 0; i < NodeDataContainerObject.length; ++i) {
            let e = NodeDataContainerObject[i];//to.toString()=="apositiveID.html"

            let fileName = e.toString();
            let fragName = htmlFileNameToFragmentName(fileName);

            if (fragName == "null") {
                fragName = "" + fileName + "(missing name translation)";
            }//fallback

            let _name = fragName;
            let _label = "";
            let _id = this.INITIAL_ID + i;

            let whatClass = "";
            var isCurrentFragment = fileName == HierarchyData.fragmentName;

            if (isCurrentFragment) {
                whatClass = this.focusNodeCustomClass + " " + this.allNodesCustomClass;//set current hierarchy-fragment class to focusNode

            } else {

                let doesThisFileNameContainLexia = function (fileName) {
                    let gen1 = generateHierarchyDataForFragmentName(fileName, true);

                    let a = gen1 != null;
                    if (!a)
                        return false;

                    let b = true;
                    let c = gen1.childrenFragmentNamesInside != null && gen1.childrenFragmentNamesInside.length > 0;

                    let hasDeepChildren = gen1.deepChildren.length > 0;
                    return  (a && b && c) || hasDeepChildren;
                }

                let containsLexia = doesThisFileNameContainLexia(fileName);
                if (containsLexia) {
                    console.log(fileName + " contains lexia.");
                    whatClass = this.allExceptFocus + " " + this.containsLexiaClass
                }

                if (!containsLexia) {
                    console.log(fileName + " contains NO lexia.");
                    whatClass = this.allExceptFocus + " " + this.containsNOLexiaClass
                }

                /*
                 let isInbound=false;
                 if(isInbound){
                 whatClass="inboundNode";
                 }
                 else{
                 whatClass="outboundNode";					
                 }
                 */
            }

            let whatTitleClass = this.lexiaTitleCustomClass;

            if (isCurrentFragment) {
                whatTitleClass += " inFocus-LexiaTitle-HIERARCHY";
            }

            graph.nodes.push({name: "" + _name, label: _label, id: _id, href: fileName, customClass: whatClass, lexiaTitleCustomClass: whatTitleClass});
        }

        //MAKE LINKS
        /*   for (let i = 1; i < 4; i++) {
         //let src=i
         let src = this.MAIN_NODE_ID;
         //   let tgt = this.INITIAL_ID + i;//bo linki zaczynaja sie od i+1
         let LABEL = "d";//inahrefs[i].text;
         //po³¹cz INBOUND z MAIN elementem
         //   graph.links.push({source: 0, target: i, type: LABEL, since: 2010});
         }*/

        let shouldbeConnected = function (frag1, frag2) {
            frag1 = frag1.toString().toLowerCase();
            frag2 = frag2.toString().toLowerCase();

            //"Jeœli wœród po³¹czeñ inbound i outbound znajduje siê sibling danego segmentu, poka¿ to po³¹czenie na mapie hierarchicznej"
            //get frag 1 i and o
            //get frag 2 i and o
            //jeœli frag1 out.href zawiera frag2.in.href
            //frag1.out.href==frag2.in.href
            //wtedy should be conn

            //for each collected_frag_array -zawiera 1 element albo all childreny
            let sprawdzFrag1Frag2PodKatemBezposrednichLinkow = function (frag1, frag2) {
                let io_frag1 = INBOUND_OUTBOUND_MAP[frag1];
                let io_frag2 = INBOUND_OUTBOUND_MAP[frag2];

                if (!io_frag1)
                    return false;

                if (!io_frag2)
                    return false;

//                console.log("qq io_frag1 dla " + frag1)
//                console.log(io_frag1)
//                console.log("qq io_frag2 dla " + frag2)
//                console.log(io_frag2)

                let o_frag1 = new Array();//outbound frag1
                for (let i = 0; i < io_frag1.length; ++i) {
                    let isOutLink = io_frag1[i].linkType == "outbound";
                    if (isOutLink) {
                        o_frag1.push(io_frag1[i]);
                    }
                }

                let i_frag2 = new Array();//inbound frag2
                for (let i = 0; i < io_frag2.length; ++i) {
                    let isOutLink = io_frag2[i].linkType == "outbound";
                    if (!isOutLink) {
                        i_frag2.push(io_frag2[i]);
                    }
                }

                let count = 0;
                for (let a = 0; a < o_frag1.length; a++) {
                    for (let b = 0; b < i_frag2.length; b++) {

                        let frag1_out = o_frag1[a];
                        let frag2_in = i_frag2[b];

                        let warunek = frag1_out.href == frag2_in.href;
                        warunek = frag1_out.href == frag2;
                        if (warunek) {
                            //do frag2 prowadzi cos z frag1
                            count = count + 1;
//                            console.log("[" + frag1 + "_" + frag2 + "]" + frag1_out.href + "==" + frag2)
                        }
                    }
                }
                return count;
            }

            //DICT_LEXIA_TO_PARENT_FOLDER to jest to:
            //"biomass.html": "here/inthehigherair/AERVER"
            let count1 = sprawdzFrag1Frag2PodKatemBezposrednichLinkow(frag1, frag2);
            if (count1 > 0) {
                return count1;
            }

            let k1 = DICT_LEXIA_TO_PARENT_FOLDER[frag1] + "/" + FILE_NAME_TO_FRAGMENT_NAME[frag1];
            let k2 = DICT_LEXIA_TO_PARENT_FOLDER[frag2] + "/" + FILE_NAME_TO_FRAGMENT_NAME[frag2];

            let list1 = tree_search_by_value_accept_deep_children(k1);
            let list2 = tree_search_by_value_accept_deep_children(k2);

            for (let a = 0; a < list1.length; ++a) {
                for (let b = 0; b < list2.length; ++b) {
                    let countt = sprawdzFrag1Frag2PodKatemBezposrednichLinkow(list1[a], frag2);//list2[b]
                    if (countt > 0)
                        return countt;
                }
            }

            return 0;
        }


        for (let b = 0; b < NodeDataContainerObject.length; b++) {
            for (let a = 0; a < NodeDataContainerObject.length; a++) {
                if (a == b)
                    continue;

                //let src=i
                let src = a + 1;
                let tgt = b + 1;//bo linki zaczynaja sie od i+1
                // let e = NodeDataContainerObject[i];//to.toString()=="apositiveID.html"

                let fraga = NodeDataContainerObject[a];
                let fragb = NodeDataContainerObject[b];



                let conn_count = shouldbeConnected(fraga, fragb);
                let shouldConn = conn_count > 0;
                // console.log("qq should be connected:" + fraga + "->" + fragb + " ;" + shouldConn);
                if (!shouldConn)
                    continue;

                //polacz x z MAIN elementem
                let LABEL = '';

                {
                    let io_frag1 = INBOUND_OUTBOUND_MAP[fraga];
                    let io_frag2 = INBOUND_OUTBOUND_MAP[fragb];

                    // if (!io_frag1) {
                    //  podpisLinku = "";
                    // }

                    //  if (!io_frag2) {
                    //  podpisLinku = "";
                    //  }


                    //znajdz polaczenia
                    let found1 = null;
                    let found2 = null;

                    if (io_frag1 != null) {
                        //let outbound_frag1 = new Array();//outbound frag1
                        for (let i = 0; i < io_frag1.length; ++i) {
                            let next = io_frag1[i];
                            let isOutLink = next.linkType == "outbound";
                            if (isOutLink && next.href == fragb) {//fragA - link - do fragB
                                //outbound_frag1.push(io_frag1[i]);
                                found1 = next;
                                break;
                            }
                        }
                    }

                    //let outbound_frag2 = new Array();//outbound frag2

                    if (io_frag2 != null) {
                        for (let i = 0; i < io_frag2.length; ++i) {
                            let next = io_frag2[i];
                            let isOutLink = next.linkType == "outbound";
                            //io_frag2[i]InLink{href:yoda.html,rev_title:suspicions,title:null,txt_content:null}
                            //console.log("io_frag2[i]" + io_frag2[i]);
                            if (isOutLink && next.href == fraga) {//fragB - link - do fragA
                                //outbound_frag2.push(io_frag2[i]);
                                found2 = next;
                                break;
                            }
                        }
                    }


                    if (found1 != null) {
                        LABEL = found1.rev_title;
                    }

                    if (found2 != null) {
                        LABEL = found2.rev_title;
                    }
                }


                // LABEL = "LABEL";
                graph.links.push({source: a + 1, target: b + 1, type: LABEL, since: 2010, linkTitleCustomClass: "hier-linkTitle", customClass: this.linkCustomClass + " hier-link"});
            }
        }

        this.INITIAL_ID = NodeDataContainerObject.length + 1;
    }

    overridableSteps(graph) {
        //this.a(graph);
        this.fromHierarchyDataMakeNodes(graph);
        //this.b(graph);
        //this.c(graph);
    }

}


//stack graphow

{
    // let GRAPH_CONTAINER_INBOUND_OUTBOUND = new GraphContainer();

    //  let  v1 = fillWithInboundAndOutbound(GRAPH_CONTAINER_INBOUND_OUTBOUND.createGraph());
    //  let  v2 = variant2(GRAPH_CONTAINER_INBOUND_OUTBOUND.createGraph());

    //GRAPH_CONTAINER_INBOUND_OUTBOUND.makeMap("#MAP_SVG", v1);
    //GRAPH_CONTAINER_INBOUND_OUTBOUND.clearGraph(GRAPH_CONTAINER_INBOUND_OUTBOUND);
    //  GRAPH_CONTAINER_INBOUND_OUTBOUND.makeMap("#MAP_SVG", v1);


    {
        let  bob = new MapGenTemplateMethod();
        var GRAPH_CONTAINER_INBOUND_OUTBOUND = new GraphContainer();
        GRAPH_CONTAINER_INBOUND_OUTBOUND.isIOGraph = true;

        let defaultGraph = GRAPH_CONTAINER_INBOUND_OUTBOUND.createGraph();
        let  v1 = bob.gen(defaultGraph);
        GRAPH_CONTAINER_INBOUND_OUTBOUND.makeMap("#MAP_SVG", v1);
    }

    //   GRAPH_CONTAINER_INBOUND_OUTBOUND.clearGraph(GRAPH_CONTAINER_INBOUND_OUTBOUND);
    //  GRAPH_CONTAINER_INBOUND_OUTBOUND.makeMap("#MAP_SVG", v1);



    function getMethods(obj) {
        var result = [];
        for (var id in obj) {
            try {
                if (typeof (obj[id]) == "function") {
                    result.push(id + ": " + obj[id].toString());
                }
            } catch (err) {
                result.push(id + ": inaccessible");
            }
        }
        return result;
    }


    //  if (GRAPH_CONTAINER_INBOUND_OUTBOUND.svg !== null) {
    //let simulation = GRAPH_CONTAINER_INBOUND_OUTBOUND.simulation;
    //let svgg = d3.select("#MAP_SVG").remove();
    //simulation.stop();
//            simulation.on("tick", null);
    //simulation.nodes(null);
    //simulation.force("link").links(null);
    //alert(getMethods(GRAPH_CONTAINER_INBOUND_OUTBOUND.simulation))
    // }
}




