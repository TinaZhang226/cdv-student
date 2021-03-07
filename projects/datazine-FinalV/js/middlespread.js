console.log("js is loaded");
let w = 2400;
let h = 800;
let r = 25;
let total = 32;
let xMargin = 150;
let yMargin = 100;
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
  //group elements - 1/4ring+5circle+customShape
  function whyPS_R(d,i){
    let why = d.why;
    let fill = "";
    if (why == "Physical Surroundings"){
      fill = "white"
    }else if (why == "Social Surroundings"){
      fill = "transparent"
    }else if (why == "Thoughts Come up in Mind"){
      fill = "transparent"
    }else if (why == "Tiring/Boring"){
      fill = "transparent"
    }return fill;
  }
  function whySS_C(d,i){
    let why = d.why;
    let fill = "";
    if (why == "Physical Surroundings"){
      fill = "transparent"
    }else if (why == "Social Surroundings"){
      fill = "white"
    }else if (why == "Thoughts Come up in Mind"){
      fill = "transparent"
    }else if (why == "Tiring/Boring"){
      fill = "transparent"
    }return fill;
  }
  function whyTCM_S(d,i){
    let why = d.why;
    let fill = "";
    if (why == "Physical Surroundings"){
      fill = "transparent"
    }else if (why == "Social Surroundings"){
      fill = "transparent"
    }else if (why == "Thoughts Come up in Mind"){
      fill = "white"
    }else if (why == "Tiring/Boring"){
      fill = "transparent"
    }return fill;
  }
  function whyTB_F(d,i){
    let why = d.why;
    let fill = "";
    if (why == "Physical Surroundings"){
      fill = "transparent"
    }else if (why == "Social Surroundings"){
      fill = "transparent"
    }else if (why == "Thoughts Come up in Mind"){
      fill = "transparent"
    }else if (why == "Tiring/Boring"){
      fill = "white"
    }return fill;
  }
  //function opacity--importance
  function opacity(d,i){
    let duration = d.howLong;
    let opacity = "";
    if (duration == 1){
      opacity = 0.2;
    }else if (duration == 2){
      opacity = 0.3;
    }else if (duration == 3){
      opacity = 0.4;
    }else if (duration == 4){
      opacity = 0.5;
    }else if (duration == 5){
      opacity = 0.6;
    }else if (duration == 6){
      opacity = 0.7;
    }else if (duration == 7){
      opacity = 0.8;
    }else if (duration == 8){
      opacity = 0.9;
    }else if (duration == 9){
      opacity = 0.95;
    }else if (duration == 10){
      opacity = 1.0;
    }return opacity;
  }
  //build background shapes
  let bgR = datagroups
    .append("rect")
      .attr("x",-70)
      .attr("y",-70)
      .attr("height",140)
      .attr("width",140)
      .attr("fill",whyPS_R)
      //.attr("stroke","black")
      .style("opacity",opacity)
  ;
  let bgC = datagroups
    .append("circle")
      .attr("cx",0)
      .attr("cy",0)
      .attr("r",70)
      .attr("fill",whySS_C)
      //.attr("stroke","black")
      .style("opacity",opacity)
  ;
  let star = `<polygon class="cls-1" points="103.17 8.54 8.05 91.46 43.41 192.68 164.15 193.9 198.29 92.68 103.17 8.54"/>`
  let bgS = datagroups.append("g").attr("class", "starShape").html(star)
    .attr("fill",whyTCM_S)
    //.attr("stroke","black")
    .style("opacity",opacity)
    // .attr("transform","scale(0.1)")
  ;
  bgS.attr("transform", "translate(-90,-100),scale(0.9)");
  let flower = `<path class="cls-1" d="M59.16,62.19S39.24,24,76.38,8,133,30.36,133,30.36s29.79-37,60.29-26,16.58,53,16.58,53,45.06-12.24,58.79,13-19.17,56.36-19.17,56.36,44.26,16.4,33.89,41.44-54,23.3-54,23.3Z"/><path class="cls-1" d="M229.62,190.78S249.57,229,212.44,245s-56.6-22.36-56.6-22.36-29.76,37-60.27,26-16.62-53-16.62-53S33.89,208,20.14,182.77,39.27,126.4,39.27,126.4-5,110,5.34,85s54-23.34,54-23.34Z"/>`
  let bgF = datagroups.append("g").attr("class", "flowerShape").html(flower)
    .attr("fill",whyTB_F)
    .style("opacity",opacity)
  ;
  bgF.attr("transform", "translate(-83,-75),scale(0.6)");
  //rotation -- timePeriod
  function timePeriod(d,i){
    let timePeriod = d.timePeriod;
    let rotation = "";
    if (timePeriod == "12am-6am"){
      rotation = "rotate(-90)"
    }else if (timePeriod == "6am-12pm"){
      rotation = "rotate(0)"
    }else if (timePeriod == "12pm-6pm"){
      rotation = "rotate(90)"
    }else if (timePeriod == "6pm-12am"){
      rotation = "rotate(180)"
    }return rotation;
  }
  let path = datagroups
    .append("path")
      .attr("d",d3.arc()
            .outerRadius(90)
            .innerRadius(70)
            .startAngle(0)
            .endAngle(0.5 * Math.PI)
        )
      .attr("fill","#025951")
      .attr("stroke","#A7C8F2")
      .attr("stroke-width","5px")
      .attr("transform",timePeriod)
  ;
  let circle1 = datagroups
    .append("circle")
      .attr("class", "circle1")
      .attr("cx", -1.2*r)
      .attr("cy", 0*r)
      .attr("r", r)
      .attr("fill", c1fill)
  ;
  let circle2 = datagroups
    .append("circle")
      .attr("class", "circle2")
      .attr("cx", -0.2*r)
      .attr("cy", -0.6*r)
      .attr("r", r)
      .attr("fill", c2fill)
  ;
  let circle3 = datagroups
    .append("circle")
      .attr("class", "circle3")
      .attr("cx", 0.8*r)
      .attr("cy", -1.2*r)
      .attr("r", r)
      .attr("fill", c3fill)
  ;
  let circle4 = datagroups
    .append("circle")
      .attr("class", "circle4")
      .attr("cx", -0.2*r)
      .attr("cy", 1.0*r)
      .attr("r", r)
      .attr("fill",c4fill)
  ;
  let circle5 = datagroups
    .append("circle")
      .attr("class", "circle5")
      .attr("cx", 0.9*r)
      .attr("cy", 0.4*r)
      .attr("r", r)
      .attr("fill", c5fill)
  ;
  //color function
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
  //locate group position - 4 rows - 8 per row - total 32
  function getGroupPosition(d,i){
    //console.log("i is", i);
    let x = (i)*(w/8)+xMargin;
    let y = h/4-yMargin;
    if (i > 7 && i < 16){
      x = (i-8)*(w/8)+xMargin;
      y = h/2-yMargin;
    }else if (i > 15 && i < 24){
      x = (i-16)*(w/8)+xMargin;
      y = 3*h/4-yMargin;
    }else if (i > 23 && i < 32){
      x = (i-24)*(w/8)+xMargin;
      y = h-yMargin;
    }
    return "translate(" + x + "," + y + ")"
  }
  //place the groups
  datagroups.attr("transform", getGroupPosition)

}

//json-got data
d3.json("data.json").then(gotData);
