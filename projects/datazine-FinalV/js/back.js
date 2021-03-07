console.log("js is loaded");
let w = 1200;
let h = 800;
// let c1XLocation = w/5.5;
// let c1YLocation = h/2.7;
let r = 12;
let xPadding = 100;
let yPadding = 200;
//input json data
let viz = d3.select("#container")
  .append("svg")
    .attr("class", "viz")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "#025951")
;
//data function - main function
function gotData(incomingData){
  console.log(incomingData);
  //define groups
  let datagroups =
  viz.selectAll(".datagroup").data(incomingData).enter()
    .append("g")
      .attr("class", ".datagroup")
  ;
  // function gotDate(d,i){
  //   let date = d.date;
  //   let x = date * (w-2*xPadding)/8;
  //   return x;
  // }
  // function gotImportance(d,i){
  //   let imp = d.importance;
  //   let y = (5-imp) * h/7 + yPadding;
  //   return y;
  // }
  //d3.extent(incomingData, function(d) { return d.date;})
  let xScale = d3.scaleLinear().domain([1,9]).range([xPadding, w-(xPadding*3)]);
  var xAxis = d3.axisBottom(xScale);
  let xAxisGroup = viz.append("g").attr("class", "xaxis");
  xAxisGroup.call(xAxis);
  let xAxisYPos = h - 130;
  xAxisGroup.attr("transform", "translate(0,"+xAxisYPos+")");
  let yScale = d3.scaleLinear().domain([1,5]).range([xAxisYPos, yPadding]);
  var yAxis = d3.axisLeft(yScale);
  let yAxisgroup = viz.append("g").attr("class", "yaxis").call(yAxis);
  yAxisgroup.attr("transform", "translate("+xPadding+",-0)");
  function cfill(d,i){
    let what = d.doingWhat;
    let cfill = "";
    if (what == "Taking a Course"){
      cfill = "#F02B25"
    }else if (what == "Watching a Movie"){
      cfill = "#FF6702"
    }else if (what == "Reading a Text"){
      cfill = "#FFC500"
    }else if (what == "Eating a Meal"){
      cfill = "#4C571C"
    }else if (what == "Having a Meeting"){
      cfill = "#003280"
    }else if (what == "Doing an Assignment"){
      cfill = "#510E80"
    }
    return cfill;
  }
  function getTranslate(d, i){
    let date = d.date;
    // let x = date + i*r;
    let value = d.importance;
    return "translate("+xScale(date)+","+yScale(value)+")";
  }
  let circles = datagroups
    .append("circle")
      .attr("class", "circles")
      .attr("cx", 2*r)
      .attr("cy", -2*r)
      .attr("r", r)
      .attr("fill", cfill)
  ;
  // translate the position of each group:
  datagroups.attr("transform", getTranslate);
  let xAxisTitle = viz
    .append("text")
      .attr("class","axisText")
      .text("How Impotant the Information I Missed (Extent)")
      .attr("fill", "white")
      .style("font-family", "'Architects Daughter', cursive")
      .style("font-size", "20")
  ;
  xAxisTitle.attr("transform","translate(40,650),rotate(-90)");
  let yAxisTitle = viz
    .append("text")
      .attr("class","axisText")
      .text("Date of Being Absent-minded (Day)")
      .attr("fill", "white")
      .style("font-family", "'Architects Daughter', cursive")
      .style("font-size", "20")
  ;
  yAxisTitle.attr("transform","translate(555,730),rotate(0)");
}
//top-left
let icon = viz
  .append("g")
    .attr("class", ".icon")
;
let iconList = icon
  .append("rect")
    .attr("class", "iconList")
    .attr("width", 400)
    .attr("height", 300)
    .attr("x", 0)
    .attr("y", 0)
    .style("fill", "#027368")
    //.attr("opacity",0.7)
;
let iconTitle = icon
  .append("text")
    .attr("class", "iconText")
    .text("Conclusion")
    .attr("x", 180)
    .attr("y", 60)
    .attr("fill", "white")
    .style("font-family", "'Ravi Prakash', cursive")
    .style("font-size", "50")
;
var str = "From the chart we can see a decreasing,trend of being absent-minded as the time,passes by. One probable reason is that I was,deliberately collecting the data. This made me,pay more attention focusing on my work and,try not to be absent-minded.";
 var text = icon.append("text")
  .attr("x",10)
  .attr("y",80)
  .attr("font-size",30)
  .attr("font-family","simsun");

 var strs = str.split(",") ;

 console.log(strs);

 text.selectAll("tspan")
 .data(strs)
 .enter()
 .append("tspan")
 .attr("x",text.attr("x"))
 .attr("fill", "white")
 .style("font-family", "'Ravi Prakash', cursive")
 .style("font-size", "20")
 .attr("dy","1.5em")
 .text(function(d){
  return d;
 });
icon.attr("transform", "translate(800,80)");

let copyright = viz
  .append("g")
    .attr("class", ".copyright")
;
copyright
   .append("rect")
     .attr("class", "iconList")
     .attr("width", 200)
     .attr("height", 40)
     .attr("x", 0)
     .attr("y", 0)
     .style("fill", "#F25116")
     .attr("opacity",0.8)
 ;
copyright
   .append("text")
     .attr("class", "iconText")
     .text("copyright_Tina-Zhang")
     .attr("x", 20)
     .attr("y", 30)
     .attr("fill", "white")
     .style("font-family", "'Ravi Prakash', cursive")
     .style("font-size", "20")
 ;
copyright.attr("transform", "translate(1000,450)");
//json-got data
d3.json("data.json").then(gotData);
