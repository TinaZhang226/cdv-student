console.log("js is loaded");
let w = 1200;
let h = 800;
let c1XLocation = w/7;
let c1YLocation = h/3;
let r = 130;

let viz = d3.select("#container")
  .append("svg")
    .attr("class", "viz")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "#5C4B51")
;
// let coverMain = viz
//   .append("rect")
//     .attr("class", "coverMain")
//     .attr("width", w*4/7)
//     .attr("height", h*4/5)
//     .attr("x", w*1.6/40)
//     .attr("y", h*1/10)
//     .style("fill", "#F2EBBF")
// ;
let circle1 = viz
  .append("circle")
    .attr("class", "circle1")
    .attr("cx", c1XLocation)
    .attr("cy", c1YLocation)
    .attr("r", r)
    .attr("fill", "#264653")
;
let circle2 = viz
  .append("circle")
    .attr("class", "circle2")
    .attr("cx", c1XLocation + 1.3*r)
    .attr("cy", c1YLocation - 0.3*r)
    .attr("r", r)
    .attr("fill", "#2A9D8F")
;
let circle3 = viz
  .append("circle")
    .attr("class", "circle3")
    .attr("cx", c1XLocation + 2.6*r)
    .attr("cy", c1YLocation - 0.6*r)
    .attr("r", r)
    .attr("fill", "#E9C46A")
;
let circle4 = viz
  .append("circle")
    .attr("class", "circle4")
    .attr("cx", c1XLocation + 1.0*r)
    .attr("cy", c1YLocation + 1.0*r)
    .attr("r", r)
    .attr("fill", "#F4A261")
;
let circle5 = viz
  .append("circle")
    .attr("class", "circle5")
    .attr("cx", c1XLocation + 2.0*r)
    .attr("cy", c1YLocation + 0.7*r)
    .attr("r", r)
    .attr("fill", "#E76F51")
;
let rect = viz
  .append("rect")
    .attr("class", "rect")
    .attr("x", c1XLocation + 2.7*r)
    .attr("y", c1YLocation + 1.7*r)
    .attr("height", 10)
    .attr("width", 220)
    .attr("fill", "white")
;
let title = viz
  .append("text")
    .attr("class", "title")
    .attr("x", w/15)
    .attr("y", h*6/7)
    .text("Absent-Minded")
    .attr("fill", "white")
    .style("font-family", "'Architects Daughter', cursive")
    .style("font-size", "100")
;
let icon = viz
  .append("g")
    .attr("class", ".icon")
;
let iconList = icon
  .append("rect")
    .attr("class", "iconList")
    .attr("width", w*2/7)
    .attr("height", h*9/10)
    .attr("x", w*27/40)
    .attr("y", h*1/20)
    .style("fill", "#F06060")
;
let iconTitle = icon
  .append("text")
    .attr("class", "iconText")
    .text("Icon List")
    .attr("x", w*6/7)
    .attr("y", h*2/20)
    //.attr("transform", "rotate(90)")
    .attr("fill", "white")
    .style("font-family", "'Architects Daughter', cursive")
    .style("font-size", "30")
;

// let circle1 = viz
//   .append("circle")
//     .attr("class", "circle1")
//     .attr("cx", 0)
//     .attr("cy", 0)
//     .attr("r", 50)
//     .attr("fill", "#264653")
// ;
