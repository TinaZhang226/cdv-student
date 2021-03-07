//console.log("js is loaded");
let w = 1200;
let h = 800;
// let c1XLocation = w/5.5;
// let c1YLocation = h/2.7;
let r = 130;

let viz = d3.select("#container")
  .append("svg")
    .attr("class", "viz")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "#025951")
;
// let date_imp = viz.selectAll(".date_imp").data(incomingData).enter()
//     .append("g")
//     .attr("class", "date_imp")
//     .attr("transform", date_impTranslate)
// ;
//
//
// function date_impTranslate(d,i){
//     let x = timeScale(d.date);
//     let y = h/2;
//     return "translate(" + x + "," + y + ")";
// }
//
// date_imp.append("circle")
//     .attr("cx",0)
//     .attr("cy",0)
//     .attr("r",5)
//     .attr("fill","none")
//     .attr("stroke","tan")
//     .attr("stroke-width",2)
//     .attr("class","graphCircle1")
//     ;
// date_imp.append("text")
//     .attr("x",0)
//     .attr("y",0)
//     .attr("fill","white")
//     //.text(getDay)
//     ;
