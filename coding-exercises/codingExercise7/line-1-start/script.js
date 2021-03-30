let w = 900;
let h = 500;

let viz = d3.select("#container")
  .append("svg")
  .style("width", w)
  .style("height", h)
  .style("outline", "solid black");

let data = [
  [
    [0, 100],
    [300, 400],
    [600, 300],
    [900, 350]
  ],
  [
    [0, 300],
    [230, 350],
    [900, 90]
  ]
]


let graphGroup = viz.append("g").attr("class", "graphGroup");

function lineFunction(d, i) {
  console.log(d)
  let dataString = 'M'
  d.forEach(element => {
    dataString += `${element.join(' ')} L`
  });

  return dataString.slice(0, -1)
}

graphGroup.selectAll('.line').data(data).enter()
  .append('path')
  .attr('d', lineFunction)
  .attr('fill', 'none')
  .attr('stroke', 'black')
  .attr('stroke-width', 5)
  .classed('line', true)
