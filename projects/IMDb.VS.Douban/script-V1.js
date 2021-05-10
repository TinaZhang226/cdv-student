
//main data processing

// d3.json("data.json").then(function(incomingData){
//   console.log(incomingData);
//
//   let imdbData= incomingData.filter(function(d){ return d.website == "IMDb" });
//   console.log(imdbData);
//
//   let doubanData= incomingData.filter(function(d){ return d.website == "Douban" });
//   console.log(doubanData);
//
//
// })



//svg visualization
//vizContainer 1
let w1 = 600;
let h1 = 790;
let xPadding = 70;
let yPadding = 70;
let viz1l = d3.select("#vizContainer1").append("svg")
  .attr("width", w1)
  .attr("height", h1)
  .attr("class", "viz1l")
  .style("background-color", "#FFB03B")
  .attr("transform", "translate(0,0)")
;

d3.json("data.json").then(gotData1l);
function gotData1l(incomingData){
  console.log(incomingData);

  // get imdb data and douban data separately
  let imdbData= incomingData.filter(function(d){ return d.website == "IMDb" });
  console.log("imdbData", imdbData);

  //data visualization
  // min max year data (for xScale)
  let yearExtentl = d3.extent(imdbData, function(d, i){
    return d.year;
  });
  console.log("yearExtentl", yearExtentl);

  // make the xscale which we use to locate points along the xaxis
  let xScalel = d3.scaleLinear().domain(yearExtentl).range([xPadding, w1-xPadding]);

  // min max rank data
  let rankExtentl = d3.extent(imdbData, function(d, i){
    return d.rank;
  });
  console.log("rankExtentl", rankExtentl);

  // make the yscale which we use to locate points along the yaxis
  let yScalel = d3.scaleLinear().domain(rankExtentl).range([h1-4*yPadding, yPadding]);

  // now let's plot
    // to keep things seperated let's make a group for all shapes:
    let vizGroupl = viz1l.append("g").attr("class", "vizgroupl");

    // bind data and create groups for each datapoint:
    let dataGroupsl = vizGroupl.selectAll(".datagroupl").data(imdbData).enter()
        .append("g")
        .attr("class", "datagroupl")
    ;

    let circlesl = dataGroupsl.append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 10)
        .style("fill", "#282830")
    ;

    function getTranslatel(d, i){
        let date = d.year;
        let value = d.rank;
        return "translate("+xScalel(date)+","+yScalel(value)+")";
      }
      // translate the position of each group:
      dataGroupsl.attr("transform", getTranslatel);

  // using the function defined at the bottom of this script to build two axis
  buildXAndYAxisl(xScalel, yScalel);
  enterView({
            selector: '#yearTitle',
            enter: function(el) {
              console.log('a special element entered');
              circlesl.transition().duration(500).attr('opacity',1);
            },
            exit: function(el) {
              console.log('a special element exited');
              circlesl.transition().duration(500).attr('opacity',0);
            },
            progress: function(el, progress) {
              console.log("the special element's progress is:", progress);
            },
            offset: 0.6 // enter at middle of viewport
            // once: true, // trigger just once
          });
}
function buildXAndYAxisl(xScalel, yScalel){
  let xAxisGroupl = viz1l.append("g").attr("class", 'xaxisl');
  let xAxisl = d3.axisBottom(xScalel);
  xAxisGroupl.call(xAxisl)
  xAxisGroupl.attr("transform", "translate(0,530)")
  xAxisGroupl.append("g").attr('class', 'xLabell')
    .attr("transform", "translate(-100, 60)")
    .append("text")
    .attr("fill", "#282830")
    .text("Year of Publication")
    .attr("font-family", "'Freckle Face', cursive")
    .attr("font-size", "2.5em")
    .attr("x",530)
    .attr("y",0)
  ;
  let yAxisGroupl = viz1l.append("g").attr("class", 'yaxisl');
  let yAxisl = d3.axisLeft(yScalel);
  yAxisGroupl.call(yAxisl)
  yAxisGroupl.attr("transform", "translate(68, 20)")

  yAxisGroupl.append("g").attr('class', 'yLabell')
    .attr("transform", "translate(-33, "+h1/2+") rotate(-90)")
    .append("text")
    .attr("fill", "#282830")
    .text("Rank")
    .attr("font-family", "'Freckle Face', cursive")
    .attr("font-size", "2.5em")
    .attr("x", 350)
    .attr("y", 0)

  ;
}


let viz1r = d3.select("#vizContainer1").append("svg")
  .attr("width", w1)
  .attr("height", h1)
  .attr("class", "viz1r")
  .style("background-color", "#468966")
  .attr("transform", "translate(250,0)")
;

d3.json("data.json").then(gotData1r);
function gotData1r(incomingData){
  console.log(incomingData);

  // get imdb data and douban data separately
  let doubanData= incomingData.filter(function(d){ return d.website == "Douban" });
  console.log("doubanData", doubanData);


  //data visualization
  // min max year data (for xScale)
  let yearExtentr = d3.extent(doubanData, function(d, i){
    return d.year;
  });
  console.log("yearExtentr", yearExtentr);

  // make the xscale which we use to locate points along the xaxis
  let xScaler = d3.scaleLinear().domain(yearExtentr).range([xPadding, w1-xPadding]);

  // min max rank data
  let rankExtentr = d3.extent(doubanData, function(d, i){
    return d.rank;
  });
  console.log("rankExtentr", rankExtentr);

  // make the yscale which we use to locate points along the yaxis
  let yScaler = d3.scaleLinear().domain(rankExtentr).range([h1-4*yPadding, yPadding]);

  // now let's plot
    // to keep things seperated let's make a group for all shapes:
    let vizGroupr = viz1r.append("g").attr("class", "vizgroupr");

    // bind data and create groups for each datapoint:
    let dataGroupsr = vizGroupr.selectAll(".datagroupr").data(doubanData).enter()
        .append("g")
        .attr("class", "datagroupr")
    ;

    let circlesr = dataGroupsr.append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 10)
        .style("fill", "#CAE8BD")
    ;

    function getTranslater(d, i){
        let date = d.year;
        let value = d.rank;
        return "translate("+xScaler(date)+","+yScaler(value)+")";
      }
      // translate the position of each group:
      dataGroupsr.attr("transform", getTranslater);

  // using the function defined at the bottom of this script to build two axis
  buildXAndYAxisr(xScaler, yScaler);
  enterView({
            selector: '#yearContent',
            enter: function(el) {
              console.log('a special element entered');
                circlesr.transition().duration(500).attr('opacity',1);
            },
            exit: function(el) {
              console.log('a special element exited');
               circlesr.transition().duration(500).attr('opacity',0);
            },
            progress: function(el, progress) {
              console.log("the special element's progress is:", progress);
            },
            offset: 0.6 // enter at middle of viewport
            // once: true, // trigger just once
          });
}
function buildXAndYAxisr(xScaler, yScaler){
  let xAxisGroupr = viz1r.append("g").attr("class", 'xaxisr');
  let xAxisr = d3.axisBottom(xScaler);
  xAxisGroupr.call(xAxisr)
  xAxisGroupr.attr("transform", "translate(0,530)")
  xAxisGroupr.append("g").attr('class', 'xLabelr')
    .attr("transform", "translate(-100, 60)")
    .append("text")
    .attr("fill", "#CAE8BD")
    .text("Year of Publication")
    .attr("font-family", "'Freckle Face', cursive")
    .attr("font-size", "2.5em")
    .attr("x",530)
    .attr("y",0)
  ;
  let yAxisGroupr = viz1r.append("g").attr("class", 'yaxisr');
  let yAxisr = d3.axisLeft(yScaler);
  yAxisGroupr.call(yAxisr)
  yAxisGroupr.attr("transform", "translate(68, 20)")

  yAxisGroupr.append("g").attr('class', 'yLabelr')
    .attr("transform", "translate(-33, "+h1/2+") rotate(-90)")
    .append("text")
    .attr("fill", "#CAE8BD")
    .text("Rank")
    .attr("font-family", "'Freckle Face', cursive")
    .attr("font-size", "2.5em")
    .attr("x", 350)
    .attr("y", 0)

  ;
}







//vizContainer2
let w2 = 600;
let h2 = 790;
let xPadding2 = 70;
let yPadding2 = 70;
let viz2l = d3.select("#vizContainer2").append("svg")
  .attr("width", w2)
  .attr("height", h2)
  .attr("class", "viz2l")
  .style("background-color", "#FFB03B")
  .attr("transform", "translate(0,0)")
;
viz2l.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", (w2))
    .attr("height", (h2))
    .attr("fill", "#FFB03B")
    // .attr("stroke-width", 2)
    // .attr("stroke", "black")
;

viz2l.append("rect")
    .attr("x", xPadding2)
    .attr("y", 2*yPadding2)
    .attr("width", (w2-2*xPadding2))
    .attr("height", (h2-4*yPadding2))
    .attr("fill", "#282830")
    .attr("stroke-width", 0)
;
d3.json("data.json").then(gotData2l);
function gotData2l(incomingData){
  // console.log(incomingData);

  // get imdb data and douban data separately
  let imdbData= incomingData.filter(function(d){ return d.website == "IMDb" });
  console.log("imdbData", imdbData);

  //sub-datasets
  let dramal = imdbData.filter(function(d){ return d.genre.match(/Drama/) });
  console.log("dramal", dramal);

  let crimel = imdbData.filter(function(d){ return d.genre.match(/Crime/) });
  console.log("crimel", crimel);

  let actionl = imdbData.filter(function(d){ return d.genre.match(/Action/) });
  console.log("actionl", actionl);

  let adventurel = imdbData.filter(function(d){ return d.genre.match(/Adventure/) });
  console.log("adventurel", adventurel);

  let historyl = imdbData.filter(function(d){ return d.genre.match(/History/) });
  console.log("historyl", historyl);

  let biography1 = imdbData.filter(function(d){ return d.genre.match(/Biography/) });
  console.log("biography1", biography1);

  let sciFictionl = imdbData.filter(function(d){ return d.genre.match(/Science-fiction/) });
  console.log("sciFictionl", sciFictionl);

  let romancel = imdbData.filter(function(d){ return d.genre.match(/Romance/) });
  console.log("romancel", romancel);

  let fantasyl = imdbData.filter(function(d){ return d.genre.match(/Fantasy/) });
  console.log("fantasyl", fantasyl);

  let comedyl = imdbData.filter(function(d){ return d.genre.match(/Comedy/) });
  console.log("comedyl", comedyl);

  let thrillerl = imdbData.filter(function(d){ return d.genre.match(/Thriller/) });
  console.log("thrillerl", thrillerl);

  let familyl = imdbData.filter(function(d){ return d.genre.match(/Family/) });
  console.log("familyl", familyl);

  let warl = imdbData.filter(function(d){ return d.genre.match(/War/) });
  console.log("warl", warl);

  let mysteryl = imdbData.filter(function(d){ return d.genre.match(/Mystery/) });
  console.log("mysteryl", mysteryl);

  let animationl = imdbData.filter(function(d){ return d.genre.match(/Animation/) });
  console.log("animationl", animationl);


  // //create genre scale
  // var genreList = ["Drama", "Crime", "Action", "Adventure", "History", "Biography", "Science-fiction", "Romance", "Fantasy", "Comedy", "Thriller", "Family", "War", "Mystery", "Animation"];
  // let genreScale = d3.scaleBand()
  //       .domain(genreList)
  //       .range([w2-xPadding2, w2])
  //       // .call(wrap, x.rangeBand());
  //       // .paddingInner(0.1)
  //   ;
  //   let songAxis = d3.axisBottom(genreScale);
  //   let songAxisGroup = viz2l.append("g").attr("class", "xaxis songaxis").style("fill", "white");
  //
  //   songAxisGroup.attr("transform", "translate(100,300)");
  //   songAxisGroup.selectAll("text").attr("font-size", 24).attr("y", 15).style("fill", "white");
  //   songAxisGroup.call(songAxis);
  //   songAxisGroup.attr('opacity',0)
  //   songAxisGroup.selectAll(".tick text")
  //       .call(wrap, genreScale.bandwidth())
  //   ;

  //1. dramal
  //put the datapoints circles on the page
  viz2l.selectAll(".datapoint1").data(dramal).enter()
    .append("circle")
    .attr("class", "datapoint1")
    .attr("cx", function(d,i){
      return 0;
    })
    .attr("cy" ,function(d){
      return 0;
    })
    .attr("r", 4)
    .style("fill", "#FFB03B")
  ;
  //initializing datapoint positions
  dramal = dramal.map(function(datapoint,i){
    datapoint.x = 0;
    datapoint.y = 0;
    return datapoint;
  })
  //generate new positions with simulation
  let simulation1 = d3.forceSimulation(dramal)
    .force("forceX", d3.forceX((w2-2*xPadding2)/3))
    .force("forceY", d3.forceY((h2-4*yPadding2)/2.5))
    // .force("forceX", d3.forceX(100))
    // .force("forceY", d3.forceY(h2/4))
    .force("collide", d3.forceCollide(6))
    .on("tick", simulationRan1)
  ;
  function simulationRan1(){
    // console.log(dramal[0].x);
    viz2l.selectAll(".datapoint1")
      .attr("cx", function(d){
        return d.x;
      })
      .attr("cy", function(d){
        return d.y;
      })
    ;
  }

  //2. crimel
  //put the datapoints circles on the page
  viz2l.selectAll(".datapoint2").data(crimel).enter()
    .append("circle")
    .attr("class", "datapoint2")
    .attr("cx", function(d,i){
      return w2;
    })
    .attr("cy" ,function(d){
      return 0;
    })
    .attr("r", 4)
    .style("fill", "#FFB03B")
    // .style("fill", "green")
  ;
  //initializing datapoint positions
  // let xScale = xScale.domain([200,300]);
  crimel = crimel.map(function(datapoint,i){
    datapoint.x = w2;
    datapoint.y = 0;
    return datapoint;
  })
  //generate new positions with simulation
  let simulation2 = d3.forceSimulation(crimel)
    .force("forceX", d3.forceX((w2-2*xPadding2)))
    .force("forceY", d3.forceY((h2-4*yPadding2)/2.5))
    .force("collide", d3.forceCollide(6))
    .on("tick", simulationRan2)
  ;
  function simulationRan2(){
    viz2l.selectAll(".datapoint2")
      .attr("cx", function(d){
        return d.x;
      })
      .attr("cy", function(d){
        return d.y;
      })
    ;
  }

  //3. actionl
  //put the datapoints circles on the page
  viz2l.selectAll(".datapoint3").data(actionl).enter()
    .append("circle")
    .attr("class", "datapoint3")
    .attr("cx", function(d,i){
      return 0;
    })
    .attr("cy" ,function(d){
      return h2;
    })
    .attr("r", 4)
    .style("fill", "#FFB03B")
    // .style("fill", "white")
  ;
  //initializing datapoint positions
  // let xScale = xScale.domain([200,300]);
  actionl = actionl.map(function(datapoint,i){
    datapoint.x = 0;
    datapoint.y = h2;
    return datapoint;
  })
  //generate new positions with simulation
  let simulation3 = d3.forceSimulation(actionl)
    .force("forceX", d3.forceX((w2-2*xPadding2)/3))
    .force("forceY", d3.forceY((h2-4*yPadding2)))
    .force("collide", d3.forceCollide(6))
    .on("tick", simulationRan3)
  ;
  function simulationRan3(){
    viz2l.selectAll(".datapoint3")
      .attr("cx", function(d){
        return d.x;
      })
      .attr("cy", function(d){
        return d.y;
      })
    ;
  }

  //4. adventurel
  //put the datapoints circles on the page
  viz2l.selectAll(".datapoint4").data(adventurel).enter()
    .append("circle")
    .attr("class", "datapoint4")
    .attr("cx", function(d,i){
      return w2;
    })
    .attr("cy" ,function(d){
      return h2;
    })
    .attr("r", 4)
    .style("fill", "#FFB03B")
    // .style("fill", "white")
  ;
  //initializing datapoint positions
  // let xScale = xScale.domain([200,300]);
  adventurel = adventurel.map(function(datapoint,i){
    datapoint.x = w2;
    datapoint.y = h2;
    return datapoint;
  })
  //generate new positions with simulation
  let simulation4 = d3.forceSimulation(adventurel)
    .force("forceX", d3.forceX((w2-2*xPadding2)))
    .force("forceY", d3.forceY((h2-4*yPadding2)))
    .force("collide", d3.forceCollide(6))
    .on("tick", simulationRan4)
  ;
  function simulationRan4(){
    viz2l.selectAll(".datapoint4")
      .attr("cx", function(d){
        return d.x;
      })
      .attr("cy", function(d){
        return d.y;
      })
    ;
  }

  // //5. historyl
  // //put the datapoints circles on the page
  // viz2l.selectAll(".datapoint5").data(historyl).enter()
  //   .append("circle")
  //   .attr("class", "datapoint5")
  //   .attr("cx", function(d,i){
  //     return 2*i;
  //   })
  //   .attr("cy" ,function(d){
  //     return h2/2;
  //   })
  //   .attr("r", 4)
  //   .style("fill", "#FFB03B")
  //   // .style("fill", "white")
  // ;
  // //initializing datapoint positions
  // // let xScale = xScale.domain([200,300]);
  // historyl = historyl.map(function(datapoint,i){
  //   datapoint.x = 2*i;
  //   datapoint.y = h2/2;
  //   return datapoint;
  // })
  // //generate new positions with simulation
  // let simulation5 = d3.forceSimulation(historyl)
  // .force("forceX", d3.forceX((w2-2*xPadding2)/2))
  // .force("forceY", d3.forceY((h2-4*yPadding2)/2))
  //   .force("collide", d3.forceCollide(6))
  //   .on("tick", simulationRan5)
  // ;
  // function simulationRan5(){
  //   viz2l.selectAll(".datapoint5")
  //     .attr("cx", function(d){
  //       return d.x;
  //     })
  //     .attr("cy", function(d){
  //       return d.y;
  //     })
  //   ;
  // }
  // //6. biography1
  // //put the datapoints circles on the page
  // viz2l.selectAll(".datapoint6").data(biography1).enter()
  //   .append("circle")
  //   .attr("class", "datapoint6")
  //   .attr("cx", function(d,i){
  //     return 2*i;
  //   })
  //   .attr("cy" ,function(d){
  //     return h2/2;
  //   })
  //   .attr("r", 4)
  //   .style("fill", "#FFB03B")
  //   // .style("fill", "white")
  // ;
  // //initializing datapoint positions
  // // let xScale = xScale.domain([200,300]);
  // biography1 = biography1.map(function(datapoint,i){
  //   datapoint.x = 2*i;
  //   datapoint.y = h2/2;
  //   return datapoint;
  // })
  // //generate new positions with simulation
  // let simulation6 = d3.forceSimulation(biography1)
  // .force("forceX", d3.forceX((w2-2*xPadding2)/2))
  // .force("forceY", d3.forceY((h2-4*yPadding2)/2))
  //   .force("collide", d3.forceCollide(6))
  //   .on("tick", simulationRan6)
  // ;
  // function simulationRan6(){
  //   viz2l.selectAll(".datapoint6")
  //     .attr("cx", function(d){
  //       return d.x;
  //     })
  //     .attr("cy", function(d){
  //       return d.y;
  //     })
  //   ;
  // }
  // //7. sciFictionl
  // viz2l.selectAll(".datapoint7").data(sciFictionl).enter()
  //   .append("circle")
  //   .attr("class", "datapoint7")
  //   .attr("cx", function(d,i){
  //     return 2*i;
  //   })
  //   .attr("cy" ,function(d){
  //     return h2/2;
  //   })
  //   .attr("r", 4)
  //   .style("fill", "#FFB03B")
  //   // .style("fill", "white")
  // ;
  // //initializing datapoint positions
  // // let xScale = xScale.domain([200,300]);
  // sciFictionl = sciFictionl.map(function(datapoint,i){
  //   datapoint.x = 2*i;
  //   datapoint.y = h2/2;
  //   return datapoint;
  // })
  // //generate new positions with simulation
  // let simulation7 = d3.forceSimulation(sciFictionl)
  // .force("forceX", d3.forceX((w2-2*xPadding2)/2))
  // .force("forceY", d3.forceY((h2-4*yPadding2)/2))
  //   .force("collide", d3.forceCollide(6))
  //   .on("tick", simulationRan7)
  // ;
  // function simulationRan7(){
  //   viz2l.selectAll(".datapoint7")
  //     .attr("cx", function(d){
  //       return d.x;
  //     })
  //     .attr("cy", function(d){
  //       return d.y;
  //     })
  //   ;
  // }
  // //8. romancel
  // viz2l.selectAll(".datapoint8").data(romancel).enter()
  //   .append("circle")
  //   .attr("class", "datapoint8")
  //   .attr("cx", function(d,i){
  //     return 2*i;
  //   })
  //   .attr("cy" ,function(d){
  //     return h2/2;
  //   })
  //   .attr("r", 4)
  //   .style("fill", "#FFB03B")
  //   // .style("fill", "white")
  // ;
  // //initializing datapoint positions
  // // let xScale = xScale.domain([200,300]);
  // romancel = romancel.map(function(datapoint,i){
  //   datapoint.x = 2*i;
  //   datapoint.y = h2/2;
  //   return datapoint;
  // })
  // //generate new positions with simulation
  // let simulation8 = d3.forceSimulation(romancel)
  // .force("forceX", d3.forceX((w2-2*xPadding2)/2))
  // .force("forceY", d3.forceY((h2-4*yPadding2)/2))
  //   .force("collide", d3.forceCollide(6))
  //   .on("tick", simulationRan8)
  // ;
  // function simulationRan8(){
  //   viz2l.selectAll(".datapoint8")
  //     .attr("cx", function(d){
  //       return d.x;
  //     })
  //     .attr("cy", function(d){
  //       return d.y;
  //     })
  //   ;
  // }
  // //9. fantasyl
  // viz2l.selectAll(".datapoint9").data(fantasyl).enter()
  //   .append("circle")
  //   .attr("class", "datapoint9")
  //   .attr("cx", function(d,i){
  //     return 2*i;
  //   })
  //   .attr("cy" ,function(d){
  //     return h2/2;
  //   })
  //   .attr("r", 4)
  //   .style("fill", "#FFB03B")
  //   // .style("fill", "white")
  // ;
  // //initializing datapoint positions
  // // let xScale = xScale.domain([200,300]);
  // fantasyl = fantasyl.map(function(datapoint,i){
  //   datapoint.x = 2*i;
  //   datapoint.y = h2/2;
  //   return datapoint;
  // })
  // //generate new positions with simulation
  // let simulation9 = d3.forceSimulation(fantasyl)
  // .force("forceX", d3.forceX((w2-2*xPadding2)/2))
  // .force("forceY", d3.forceY((h2-4*yPadding2)/2))
  //   .force("collide", d3.forceCollide(6))
  //   .on("tick", simulationRan8)
  // ;
  // function simulationRan9(){
  //   viz2l.selectAll(".datapoint9")
  //     .attr("cx", function(d){
  //       return d.x;
  //     })
  //     .attr("cy", function(d){
  //       return d.y;
  //     })
  //   ;
  // }
  // //10. comedyl
  //
  // //11. thrillerl
  //
  // //12. familyl
  //
  // //13. warl
  //
  // //14. mysteryl
  //
  // //15. animationl
  //
  //




















}







let viz2r = d3.select("#vizContainer2").append("svg")
  .attr("width", w2)
  .attr("height", h2)
  .attr("class", "viz2r")
  .style("background-color", "#468966")
  .attr("transform", "translate(250,0)")
;
viz2r.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", (w2))
    .attr("height", (h2))
    .attr("fill", "#468966")
    // .attr("stroke-width", 2)
    // .attr("stroke", "black")
;

viz2r.append("rect")
    .attr("x", xPadding2)
    .attr("y", 2*yPadding2)
    .attr("width", (w2-2*xPadding2))
    .attr("height", (h2-4*yPadding2))
    .attr("fill", "#CAE8BD")
    .attr("stroke-width", 0)
;
d3.json("data.json").then(gotData2r);
function gotData2r(incomingData){
  // console.log(incomingData);

  // get imdb data and douban data separately
  let doubanData= incomingData.filter(function(d){ return d.website == "Douban" });
  console.log("doubanData", doubanData);

  //sub-datasets
  let dramar = doubanData.filter(function(d){ return d.genre.match(/Drama/) });
  console.log("dramar", dramar);

  let crimer = doubanData.filter(function(d){ return d.genre.match(/Crime/) });
  console.log("crimer", crimer);

  let actionr = doubanData.filter(function(d){ return d.genre.match(/Action/) });
  console.log("actionr", actionr);

  let adventurer = doubanData.filter(function(d){ return d.genre.match(/Adventure/) });
  console.log("adventurer", adventurer);

  let historyr = doubanData.filter(function(d){ return d.genre.match(/History/) });
  console.log("historyr", historyr);

  let biographyr = doubanData.filter(function(d){ return d.genre.match(/Biography/) });
  console.log("biographyr", biographyr);

  let sciFictionr = doubanData.filter(function(d){ return d.genre.match(/Science-fiction/) });
  console.log("sciFictionr", sciFictionr);

  let romancer = doubanData.filter(function(d){ return d.genre.match(/Romance/) });
  console.log("romancer", romancer);

  let fantasyr = doubanData.filter(function(d){ return d.genre.match(/Fantasy/) });
  console.log("fantasyr", fantasyr);

  let comedyr = doubanData.filter(function(d){ return d.genre.match(/Comedy/) });
  console.log("comedyr", comedyr);

  let thrillerr = doubanData.filter(function(d){ return d.genre.match(/Thriller/) });
  console.log("thrillerr", thrillerr);

  let familyr = doubanData.filter(function(d){ return d.genre.match(/Family/) });
  console.log("familyr", familyr);

  let warr = doubanData.filter(function(d){ return d.genre.match(/War/) });
  console.log("warr", warr);

  let mysteryr = doubanData.filter(function(d){ return d.genre.match(/Mystery/) });
  console.log("mysteryr", mysteryr);

  let animationr = doubanData.filter(function(d){ return d.genre.match(/Animation/) });
  console.log("animationr", animationr);


  //1. dramal
  //put the datapoints circles on the page
  viz2r.selectAll(".datapoint5").data(dramar).enter()
    .append("circle")
    .attr("class", "datapoint5")
    .attr("cx", function(d,i){
      return 0;
    })
    .attr("cy" ,function(d){
      return 0;
    })
    .attr("r", 4)
    .style("fill", "#468966")
  ;
  //initializing datapoint positions
  dramar = dramar.map(function(datapoint,i){
    datapoint.x = 0;
    datapoint.y = 0;
    return datapoint;
  })
  //generate new positions with simulation
  let simulation5 = d3.forceSimulation(dramar)
    .force("forceX", d3.forceX((w2-2*xPadding2)/3))
    .force("forceY", d3.forceY((h2-4*yPadding2)/2.5))
    // .force("forceX", d3.forceX(100))
    // .force("forceY", d3.forceY(h2/4))
    .force("collide", d3.forceCollide(6))
    .on("tick", simulationRan5)
  ;
  function simulationRan5(){
    // console.log(dramar[0].x);
    viz2r.selectAll(".datapoint5")
      .attr("cx", function(d){
        return d.x;
      })
      .attr("cy", function(d){
        return d.y;
      })
    ;
  }

  //2. crimel
  //put the datapoints circles on the page
  viz2r.selectAll(".datapoint6").data(crimer).enter()
    .append("circle")
    .attr("class", "datapoint6")
    .attr("cx", function(d,i){
      return w2;
    })
    .attr("cy" ,function(d){
      return 0;
    })
    .attr("r", 4)
    .style("fill", "#468966")
    // .style("fill", "green")
  ;
  //initializing datapoint positions
  // let xScale = xScale.domain([200,300]);
  crimer = crimer.map(function(datapoint,i){
    datapoint.x = w2;
    datapoint.y = 0;
    return datapoint;
  })
  //generate new positions with simulation
  let simulation6 = d3.forceSimulation(crimer)
    .force("forceX", d3.forceX((w2-2*xPadding2)))
    .force("forceY", d3.forceY((h2-4*yPadding2)/2.5))
    .force("collide", d3.forceCollide(6))
    .on("tick", simulationRan6)
  ;
  function simulationRan6(){
    viz2r.selectAll(".datapoint6")
      .attr("cx", function(d){
        return d.x;
      })
      .attr("cy", function(d){
        return d.y;
      })
    ;
  }

  //3. actionl
  //put the datapoints circles on the page
  viz2r.selectAll(".datapoint7").data(actionr).enter()
    .append("circle")
    .attr("class", "datapoint7")
    .attr("cx", function(d,i){
      return 0;
    })
    .attr("cy" ,function(d){
      return h2;
    })
    .attr("r", 4)
    .style("fill", "#468966")
    // .style("fill", "white")
  ;
  //initializing datapoint positions
  // let xScale = xScale.domain([200,300]);
  actionr = actionr.map(function(datapoint,i){
    datapoint.x = 0;
    datapoint.y = h2;
    return datapoint;
  })
  //generate new positions with simulation
  let simulation7 = d3.forceSimulation(actionr)
    .force("forceX", d3.forceX((w2-2*xPadding2)/3))
    .force("forceY", d3.forceY((h2-4*yPadding2)))
    .force("collide", d3.forceCollide(6))
    .on("tick", simulationRan7)
  ;
  function simulationRan7(){
    viz2r.selectAll(".datapoint7")
      .attr("cx", function(d){
        return d.x;
      })
      .attr("cy", function(d){
        return d.y;
      })
    ;
  }

  //4. adventurel
  //put the datapoints circles on the page
  viz2r.selectAll(".datapoint8").data(adventurer).enter()
    .append("circle")
    .attr("class", "datapoint8")
    .attr("cx", function(d,i){
      return w2;
    })
    .attr("cy" ,function(d){
      return h2;
    })
    .attr("r", 4)
    .style("fill", "#468966")
    // .style("fill", "white")
  ;
  //initializing datapoint positions
  // let xScale = xScale.domain([200,300]);
  adventurer = adventurer.map(function(datapoint,i){
    datapoint.x = w2;
    datapoint.y = h2;
    return datapoint;
  })
  //generate new positions with simulation
  let simulation8 = d3.forceSimulation(adventurer)
    .force("forceX", d3.forceX((w2-2*xPadding2)))
    .force("forceY", d3.forceY((h2-4*yPadding2)))
    .force("collide", d3.forceCollide(6))
    .on("tick", simulationRan8)
  ;
  function simulationRan8(){
    viz2r.selectAll(".datapoint8")
      .attr("cx", function(d){
        return d.x;
      })
      .attr("cy", function(d){
        return d.y;
      })
    ;
  }

}




//svg visualization
//viz3
let w3 = 600;
let h3 = 790;
let xPadding3 = 70;
let yPadding3 = 70;
let viz3l = d3.select("#vizContainer3").append("svg")
  .attr("width", w3)
  .attr("height", h3)
  .attr("class", "viz3l")
  .style("background-color", "#FFB03B")
  .attr("transform", "translate(0,0)")
;

d3.json("data.json").then(gotData3l);
function gotData3l(incomingData){
  console.log(incomingData);

  // get imdb data and douban data separately
  let imdbData= incomingData.filter(function(d){ return d.website == "IMDb" });
  console.log("imdbData", imdbData);

  let americaData = imdbData.filter(function(d){ return d.country == "America"});
  console.log("americaData", americaData);

  let chinaData = imdbData.filter(function(d){ return d.country == "China"});
  console.log("chinaData", chinaData);

  let italyData = imdbData.filter(function(d){ return d.country == "Italy"});
  console.log("italyData", italyData);

  let brazilData = imdbData.filter(function(d){ return d.country == "Brazil"});
  console.log("brazilData", brazilData);

  let japanData = imdbData.filter(function(d){ return d.country == "Japan"});
  console.log("japanData", japanData);

  let koreaData = imdbData.filter(function(d){ return d.country == "Korea"});
  console.log("koreaData", koreaData);

  let franceData = imdbData.filter(function(d){ return d.country == "France"});
  console.log("franceData", franceData);

  let britainData = imdbData.filter(function(d){ return d.country == "Britain"});
  console.log("britainData", britainData);

  let indiaData = imdbData.filter(function(d){ return d.country == "India"});
  console.log("indiaData", indiaData);

//   let allNames = imdbData.map(function(d){return d.country});
// // check it:
//   console.log(allNames);
//
//   let xScale = d3.scaleBand()
//     .domain(allNames)
//     .range([xPadding3, w3-xPadding3])
//     .paddingInner(0.1)
// ;
// let xAxis = d3.axisBottom(xScale)
// xAxis.tickFormat(d=>{return imdbData.filter(dd=>dd.key==d)[0].country;});
// let xAxisGroup = viz3l.append("g").classed("xAxis", true);
// xAxisGroup.call(xAxis);
// xAxisGroup.selectAll("text").attr("font-size", 24).attr("y", 9);
// xAxisGroup.selectAll("line").remove();
// xAxisGroup.attr("transform", "translate(0,"+ (h3-yPadding3) +")")

  let rectl = viz3l.append("svg")
  rectl.append("rect")
    .attr("class", "rectl")
    .attr("width", w3/50*36)
    .attr("height", 40)
    .style("fill", "#282830")
    .attr("transform", "translate(100,100)")
  ;
  rectl.append("rect")
  .attr("class", "rectl")
    .attr("width", w3/50*4)
    .attr("height", 40)
    .style("fill", "#282830")
    .attr("transform", "translate(100,180)")
  ;
  rectl.append("rect")
  .attr("class", "rectl")
    .attr("width", w3/50*3)
    .attr("height", 40)
    .style("fill", "#282830")
    .attr("transform", "translate(100,260)")
  ;
  rectl.append("rect")
  .attr("class", "rectl")
    .attr("width", w3/50*3)
    .attr("height", 40)
    .style("fill", "#282830")
    .attr("transform", "translate(100,340)")
  ;
  rectl.append("rect")
  .attr("class", "rectl")
    .attr("width", w3/50*1)
    .attr("height", 40)
    .style("fill", "#282830")
    .attr("transform", "translate(100,420)")
  ;
  rectl.append("rect")
  .attr("class", "rectl")
    .attr("width", w3/50*1)
    .attr("height", 40)
    .style("fill", "#282830")
    .attr("transform", "translate(100,500)")
  ;
  rectl.append("rect")
  .attr("class", "rectl")
    .attr("width", w3/50*1)
    .attr("height", 40)
    .style("fill", "#282830")
    .attr("transform", "translate(100,580)")
  ;
  rectl.append("rect")
  .attr("class", "rectl")
    .attr("width", w3/50*1)
    .attr("height", 40)
    .style("fill", "#282830")
    .attr("transform", "translate(100,660)")
  ;
  enterView({
            selector: '#countryTitle',
            enter: function(el) {
              console.log('a special element entered');
              rectl.transition().duration(1200).attr('opacity',1);
            },
            exit: function(el) {
              console.log('a special element exited');
              rectl.transition().duration(1200).attr('opacity',0);
            },
            progress: function(el, progress) {
              console.log("the special element's progress is:", progress);
            },
            offset: 0.6 // enter at middle of viewport
            // once: true, // trigger just once
          });
}

// // set the dimensions and margins of the graph
// var margin = {top: 10, right: 30, bottom: 90, left: 40},
//     width = 460 - margin.left - margin.right,
//     height = 450 - margin.top - margin.bottom;
//
// // append the svg object to the body of the page
// var svg = viz3l
//   .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform",
//           "translate(" + margin.left + "," + margin.top + ")");
//
// // Parse the Data
// d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv", function(data) {
//
// // X axis
// var x = d3.scaleBand()
//   .range([ 0, width ])
//   .domain(data.map(function(d) { return d.Country; }))
//   .padding(0.2);
// svg.append("g")
//   .attr("transform", "translate(0," + height + ")")
//   .call(d3.axisBottom(x))
//   .selectAll("text")
//     .attr("transform", "translate(-10,0)rotate(-45)")
//     .style("text-anchor", "end");
//
// // Add Y axis
// var y = d3.scaleLinear()
//   .domain([0, 13000])
//   .range([ height, 0]);
// svg.append("g")
//   .call(d3.axisLeft(y));
//
// // Bars
// svg.selectAll("mybar")
//   .data(data)
//   .enter()
//   .append("rect")
//     .attr("x", function(d) { return x(d.Country); })
//     .attr("width", x.bandwidth())
//     .attr("fill", "#69b3a2")
//     // no bar at the beginning thus:
//     .attr("height", function(d) { return height - y(0); }) // always equal to 0
//     .attr("y", function(d) { return y(0); })
//
// // Animation
// svg.selectAll("rect")
//   .transition()
//   .duration(800)
//   .attr("y", function(d) { return y(d.Value); })
//   .attr("height", function(d) { return height - y(d.Value); })
//   .delay(function(d,i){console.log(i) ; return(i*100)})
//
// })
// // set the dimensions and margins of the graph
// var width = 450
//     height = 450
//     margin = 40
//
// // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
// var radius = Math.min(width, height) / 2 - margin
//
// // append the svg object to the div called 'my_dataviz'
// var svg = viz3l
//   .append("svg")
//     .attr("width", width)
//     .attr("height", height)
//   .append("g")
//     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
//
// // Create dummy data
// var data = {a: 9, b: 20, c:30, d:8, e:12}
//
// // set the color scale
// var color = d3.scaleOrdinal()
//   .domain(data)
//   .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])
//
// // Compute the position of each group on the pie:
// var pie = d3.pie()
//   .value(function(d) {return d.value; })
// var data_ready = pie(d3.entries(data))
//
// // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
// svg
//   .selectAll('whatever')
//   .data(data_ready)
//   .enter()
//   .append('path')
//   .attr('d', d3.arc()
//     .innerRadius(0)
//     .outerRadius(radius)
//   )
//   .attr('fill', function(d){ return(color(d.data.key)) })
//   .attr("stroke", "black")
//   .style("stroke-width", "2px")
//   .style("opacity", 0.7)








let viz3r = d3.select("#vizContainer3").append("svg")
  .attr("width", w3)
  .attr("height", h3)
  .attr("class", "viz3r")
  .style("background-color", "#468966")
  .attr("transform", "translate(250,0)")
;

d3.json("data.json").then(gotData3r);
function gotData3r(incomingData){
  console.log(incomingData);

  // get imdb data and douban data separately
  let doubanData= incomingData.filter(function(d){ return d.website == "Douban" });
  console.log("doubanData", doubanData);
  let americaData = doubanData.filter(function(d){ return d.country == "America"});
  console.log("americaData", americaData);

  let chinaData = doubanData.filter(function(d){ return d.country == "China"});
  console.log("chinaData", chinaData);

  let italyData = doubanData.filter(function(d){ return d.country == "Italy"});
  console.log("italyData", italyData);

  let lebanonData = doubanData.filter(function(d){ return d.country == "Lebanon"});
  console.log("lebanonData", lebanonData);

  let japanData = doubanData.filter(function(d){ return d.country == "Japan"});
  console.log("japanData", japanData);

  let koreaData = doubanData.filter(function(d){ return d.country == "Korea"});
  console.log("koreaData", koreaData);

  let franceData = doubanData.filter(function(d){ return d.country == "France"});
  console.log("franceData", franceData);

  let indiaData = doubanData.filter(function(d){ return d.country == "India"});
  console.log("indiaData", indiaData);

  let rectr = viz3r.append("svg");
  rectr.append("rect")
    .attr("width", w3/50*25)
    .attr("height", 40)
    .style("fill", "#CAE8BD")
    .attr("transform", "translate(180,100)")
  ;
  rectr.append("rect")
    .attr("width", w3/50*9)
    .attr("height", 40)
    .style("fill", "#CAE8BD")
    .attr("transform", "translate(372,180)")
  ;
  rectr.append("rect")
    .attr("width", w3/50*4)
    .attr("height", 40)
    .style("fill", "#CAE8BD")
    .attr("transform", "translate(432,260)")
  ;
  rectr.append("rect")
    .attr("width", w3/50*3)
    .attr("height", 40)
    .style("fill", "#CAE8BD")
    .attr("transform", "translate(444,340)")
  ;
  rectr.append("rect")
    .attr("width", w3/50*3)
    .attr("height", 40)
    .style("fill", "#CAE8BD")
    .attr("transform", "translate(444,420)")
  ;
  rectr.append("rect")
    .attr("width", w3/50*3)
    .attr("height", 40)
    .style("fill", "#CAE8BD")
    .attr("transform", "translate(444,500)")
  ;
  rectr.append("rect")
    .attr("width", w3/50*2)
    .attr("height", 40)
    .style("fill", "#CAE8BD")
    .attr("transform", "translate(456,580)")
  ;
  rectr.append("rect")
    .attr("width", w3/50*1)
    .attr("height", 40)
    .style("fill", "#CAE8BD")
    .attr("transform", "translate(468,660)")
  ;
  enterView({
            selector: '#countryContent',
            enter: function(el) {
              console.log('a special element entered');
              rectr.transition().duration(1000).attr('opacity',1);
            },
            exit: function(el) {
              console.log('a special element exited');
              rectr.transition().duration(1000).attr('opacity',0);
            },
            progress: function(el, progress) {
              console.log("the special element's progress is:", progress);
            },
            offset: 0.6 // enter at middle of viewport
            // once: true, // trigger just once
          });
}
