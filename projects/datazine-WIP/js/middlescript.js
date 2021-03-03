let w = 2400;
let h = 800;
let r = 15;
let total = 24;

let viz = d3.select("#container")
  .append("svg")
    .attr("class", "viz")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "#8CBEB2")
;

function gotData(incomingData){
  console.log(incomingData);

  let datagroups =
  viz.selectAll(".datagroup").data(incomingData).enter()
    .append("g")
      .attr("class", ".datagroup")
  ;
  //size of circle
  function csize(d,i){
    let imp = d.importance;
    let csize = imp/2 * r;
    return csize;
  }

  function c1fill(d,i){
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
  let circle1 = datagroups
    .append("circle")
      .attr("class", "circle1")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", csize)
      .attr("fill", c1fill)
  ;

  function c2fill(d,i){
    let what = d.doingWhat;
    let cfill = "";
    if (what == "Taking a Course"){
      cfill = "#B35451"
    }else if (what == "Watching a Movie"){
      cfill = "#FF7F00"
    }else if (what == "Reading a Text"){
      cfill = "#F2C335"
    }else if (what == "Eating a Meal"){
      cfill = "#849626"
    }else if (what == "Having a Meeting"){
      cfill = "#4D93FF"
    }else if (what == "Doing an Assignment"){
      cfill = "#C169FF"
    }
    return cfill;
  }
  function c2XPosition(d,i){
    let imp = d.importance;
    let csize = imp/2 * r;
    let cXPosition = 1.3 * csize;
    return cXPosition;
  }
  function c2YPosition(d,i){
    let imp = d.importance;
    let csize = imp/2 * r;
    let cYPosition = -0.3 * csize;
    return cYPosition;
  }
  let circle2 = datagroups
    .append("circle")
      .attr("class", "circle2")
      .attr("cx", c2XPosition)
      .attr("cy", c2YPosition)
      .attr("r", csize)
      .attr("fill", c2fill)
  ;

  function c3fill(d,i){
    let what = d.doingWhat;
    let cfill = "";
    if (what == "Taking a Course"){
      cfill = "#A41D19"
    }else if (what == "Watching a Movie"){
      cfill = "#FF551B"
    }else if (what == "Reading a Text"){
      cfill = "#F2D479"
    }else if (what == "Eating a Meal"){
      cfill = "#D2E539"
    }else if (what == "Having a Meeting"){
      cfill = "#0065FF"
    }else if (what == "Doing an Assignment"){
      cfill = "#A21CFF"
    }
    return cfill;
  }
  function c3XPosition(d,i){
    let imp = d.importance;
    let csize = imp/2 * r;
    let cXPosition = 2.6 * csize;
    return cXPosition;
  }
  function c3YPosition(d,i){
    let imp = d.importance;
    let csize = imp/2 * r;
    let cYPosition = -0.6 * csize;
    return cYPosition;
  }
  let circle3 = datagroups
    .append("circle")
      .attr("class", "circle3")
      .attr("cx", c3XPosition)
      .attr("cy", c3YPosition)
      .attr("r", csize)
      .attr("fill", c3fill)
  ;

  function c4fill(d,i){
    let what = d.doingWhat;
    let cfill = "";
    if (what == "Taking a Course"){
      cfill = "#F0716D"
    }else if (what == "Watching a Movie"){
      cfill = "#FF8E00"
    }else if (what == "Reading a Text"){
      cfill = "#FFD827"
    }else if (what == "Eating a Meal"){
      cfill = "#A1A836"
    }else if (what == "Having a Meeting"){
      cfill = "#0050CC"
    }else if (what == "Doing an Assignment"){
      cfill = "#8217CC"
    }
    return cfill;
  }
  function c4XPosition(d,i){
    let imp = d.importance;
    let csize = imp/2 * r;
    let cXPosition = 1.0 * csize;
    return cXPosition;
  }
  function c4YPosition(d,i){
    let imp = d.importance;
    let csize = imp/2 * r;
    let cYPosition = 1.0 * csize;
    return cYPosition;
  }
  let circle4 = datagroups
    .append("circle")
      .attr("class", "circle4")
      .attr("cx", c4XPosition)
      .attr("cy", c4YPosition)
      .attr("r", csize)
      .attr("fill",c4fill)
  ;

  function c5fill(d,i){
    let what = d.doingWhat;
    let cfill = "";
    if (what == "Taking a Course"){
      cfill = "#711411"
    }else if (what == "Watching a Movie"){
      cfill = "#E54818"
    }else if (what == "Reading a Text"){
      cfill = "#F2A007"
    }else if (what == "Eating a Meal"){
      cfill = "#384014"
    }else if (what == "Having a Meeting"){
      cfill = "#264A80"
    }else if (what == "Doing an Assignment"){
      cfill = "#613480"
    }
    return cfill;
  }
  function c5XPosition(d,i){
    let imp = d.importance;
    let csize = imp/2 * r;
    let cXPosition = 2.0 * csize;
    return cXPosition;
  }
  function c5YPosition(d,i){
    let imp = d.importance;
    let csize = imp/2 * r;
    let cYPosition = 0.7 * csize;
    return cYPosition;
  }
  let circle5 = datagroups
    .append("circle")
      .attr("class", "circle5")
      .attr("cx", c5XPosition)
      .attr("cy", c5YPosition)
      .attr("r", csize)
      .attr("fill", c5fill)
  ;

  function getRectWidth(d,i){
    let long = d.howLong;
    let rectWidth = 6*long;
    return rectWidth;
  }
  // let colorScale = d3.scaleLinear().domain([10,40,100]).range(["black","orange","yellow"]);
  // function getColor(d,i){
  //   return colorScale(getRectWidth);
  //   console.log("getRectWidth is :" + getRectWidth)
  // }
  function rectXPosition(d,i){
    let imp = d.importance;
    let csize = imp/2 * r;
    let rectXPosition = 3 * csize;
    return rectXPosition;
  }
  let durationRect = datagroups
    .append("rect")
      .attr("class", "durationRect")
      .attr("x", rectXPosition)
      .attr("y", csize)
      .attr("height", 5)
      .attr("width", getRectWidth)
      .attr("fill", "white")
  ;


  function getYPosition(d,i){
    let time = d.timePeriod;
    let yPosition = "";
    if (time == "12am-6am"){
      yPosition = h*0.3;
    }else if (time == "6am-12pm"){
      yPosition = h*0.45;
    }else if (time == "12pm-6pm"){
      yPosition = h*0.6;
    }else if (time == "6pm-12am"){
      yPosition = h*0.75;
    }
    // let yPositionFinal = yPosition - 5*i;
    // return yPositionFinal;
    return yPosition;
  }
  function getGroupPosition(d,i){
    //console.log("i is", i);
    let x = (i+1) * ((w-4*r)/total);
    let y = getYPosition(d,i);
    return "translate(" + x + "," + y + ")"
  }
  //place the groups
  datagroups.attr("transform", getGroupPosition)


}

d3.json("data.json").then(gotData);
