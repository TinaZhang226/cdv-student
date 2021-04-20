Previously, at the very first beginning, i want to create a map that can be hovered with some fancy effects and tooltips showed when mouse is over.
Part of the code I wrote is like this:
```let mouseOver = function(d) {
        d3.selectAll(".province")
          .transition()
          .duration(100)
          .style("opacity", .5)
        d3.select(this)
          .transition()
          .duration(100)
          .style("opacity", 10)
          .transition(150)
          .duration(150)
          .style("stroke", "white")
          .style("stroke-width", "3")
      }
//mouse leave - complete the whole mouseover event
      let mouseLeave = function(d) {
        d3.selectAll(".province")
          .transition()
          .duration(150)
          .style("opacity", .8)
        d3.select(this)
          .transition()
          .duration(200)
      }
      provinces =  viz.append("g").selectAll("path").data(geoData.features).enter()
            .append("path")
              .attr("class", function(d){ return "province" } )
              .attr("d", pathMaker)
              .attr("fill", function(d,i){
                let correspondingDatapoint = incomingData.find(function(datapoint){
                  if(datapoint.province == d.properties.name){
                    return true
                  }else {
                    return false
                  }
                })
                if(correspondingDatapoint != undefined){
                  return colorScale(correspondingDatapoint.population);
                }else{
                  return "white"
                }
              })
              .attr("stroke", "transparent")
              .style("opacity", 1)
              .on("mouseover", mouseOver)
              .on("mouseleave", mouseLeave)
```
However, i do not know how to contain both the button that change different projections and the hover together on one webpage.
Also, I have trouble in realising the tooltip, though I looked through the website a lot. 
