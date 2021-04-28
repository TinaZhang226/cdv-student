let w = 1200;
let h = 750;
let hTotal = 864 * 3;
let hOffset = hTotal-h;
let xPadding = 100;
let yPadding = 100;
let mouseXOffset = 5;
let mouseYOffset = 5;

let viz0 = d3.select("#container0")
  .append("svg")
      .style("width", w)
      .style("height", hTotal)
;
let viz = viz0.append("g").attr("transform", "translate(0," + 0 + ")");

let viz1 = d3.select("#container1")
  .append("svg")
      .style("width", w-xPadding)
      .style("height", h-yPadding)
;
let viz2 = d3.select("#container2")
  .append("svg")
      .style("width", 3/5*w)
      .style("height", h-yPadding)
;
let viz3 = d3.select("#container3")
  .append("svg")
      .style("width", 3/5*w)
      .style("height", h-yPadding)
;
let viz4 = d3.select("#container4")
  .append("svg")
      .style("width", 3/5*w)
      .style("height", h-yPadding)
;
let viz5 = d3.select("#container5")
  .append("svg")
      .style("width", 3/5*w)
      .style("height", h-yPadding)
;
