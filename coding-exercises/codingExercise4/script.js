let viz = d3.select("#viz-container")
  .append("svg")
    .attr("id", "viz")
;
viz.append("text")
  .text("Absent-Minded Data")
    .attr("x", 560)
    .attr("y", 100)
    .attr("font-size", 30)

d3.json("data.json").then(gotData);



function gotData(incomingData){
    console.log(incomingData);

//start to build groups
let datagroups = viz.selectAll(".datagroup").data(incomingData).enter()
  .append("g")
    .attr("class", "datagroup")
;
datagroups.append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", durationOfDesertion)
  .attr("fill", whatAmIDoing)
  .attr("stroke-width", why)
  .attr("stroke", whatDoIThinkOf)

;
datagroups.append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", why)
  .attr("height", 20)
  .attr("fill", whatDoIThinkOf)
;
datagroups.append("text")
  .attr("x", -50)
  .attr("y", 100)
  .text(text)
;
datagroups.attr("transform", circleLocation);

}

function circleLocation(incomingData, i){
  let x = (i+1)*200;
  let y = 250;
  if (i > 5 && i < 12){
    x = (i-5)*200;
    y = 500;
  }
  return "translate(" + x + "," + y + ")";
}
//data collection--transforming json data to functions to process data
function text(incomingData){
  return "Duration:"+incomingData.durationOfDesertion;
}
function textXLocation(incomingData){
  return incomingData.durationOfDesertion /20
}
function textYLocation(incomingData){
  return incomingData.durationOfDesertion * 20
}
// a--fill color of circle
// whatAmIDoing
// Taking a course
// Having a meeting
// Exercising
// Doing Homework
// Playing guitar
// Watching a movie
// Eating
// Taking a shower
function whatAmIDoing(datapoint){
  let a = datapoint.whatAmIDoing;
  if (a == "Taking a course"){
    return "red";
  }else if (a == "Having a meeting"){
    return "white";
  }else if (a == "Exercising"){
    return "green";
  }else if (a == "Doing Homework"){
    return "blue";
  }else if (a == "Playing guitar"){
    return "purple";
  }else if (a == "Watching a movie"){
    return "yellow";
  }else if (a == "Eating"){
    return "pink";
  }else if (a == "Taking a shower"){
    return "black";
  }
}

// g--radius of circle
// durationOfDesertion
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 (integer)
function durationOfDesertion(datapoint){
  let g = datapoint.durationOfDesertion;
  return g*15;
}

// h--stoke-width of circle
// why
// pop-up text
// receive an email
// feel boring
// be reminded of sth.
// suddenly think of sth.
function why(datapoint){
  let h = datapoint.why;
  if (h == "pop-up text"){
    return "2";
  }else if (h == "receive an email"){
    return "4";
  }else if (h == "feel boring"){
    return "6";
  }else if (h == "be reminded of sth."){
    return "8";
  }else if (h == "suddenly think of sth."){
    return "10";
  }
}

// l (L)--color of stroke
// whatDoIThinkOf
// academic stuff
// people(friends, family, etc)
// international issues/news
// things that I have read/watched before
// relaxation
// work(raising activities)
// Other…
function whatDoIThinkOf(datapoint){
  let l = datapoint.whatDoIThinkOf;
  if (l == "academic stuff"){
    return "red";
  }else if (l == "people(friends, family, etc)"){
    return "white";
  }else if (l == "international issues/news"){
    return "yellow";
  }else if (l == "things that I have read/watched before"){
    return "green";
  }else if (l == "relaxation"){
    return "purple";
  }else if (l == "work(raising activities)"){
    return "black";
  }
}

// b--rect in red (capacity change)
// whichCourse
// cdv
// psyc
// mkt
// acct
function whichCourse(datapoint){
  let b = datapoint.whichCourse;
  if (b == "cdv"){
    return "0.1";
  }else if (b == "psyc"){
    return "0.4";
  }else if (b == "mkt"){
    return "0.7";
  }else if (b == "acct"){
      return "1";
  }
}

// c--rect in white (capacity change)
// whatMeeting
// Youth League
// Music Club
// Voice-Acting Club
// Psychology
// Competition groups
function whatMeeting(datapoint){
  let c = datapoint.whatMeeting;
  if (c == "Youth League"){
    return "0.1";
  }else if (c == "Music Club"){
    return "0.3";
  }else if (c == "Voice-Acting Club"){
    return "0.5";
  }else if (c == "Psychology"){
    return "0.7";
  }else if (c == "Competition groups"){
    return "0.9";
  }
}

// if (c == "Youth League"){
//   capacity = "0.1";
// }else if (c == "Music Club"){
//   capacity = "0.3";
// }
// return capacity;

// d--rect in blue (capacity change)
// whatHomework
// calculation
// reading
// watching
// listening
// writing
// coding
// reviewing
function whatHomework(datapoint){
  let d = datapoint.whatHomework;
  if (d = "calculation"){
    return "0.1";
  }else if (d = "reading"){
    return "0.2";
  }else if (d = "watching"){
    return "0.4";
  }else if (d = "listening"){
    return "0.6";
  }else if (d = "writing"){
    return "0.7";
  }else if (d = "coding"){
    return "0.9";
  }else if (d = "reviewing"){
    return "1";
  }
}

// e--rect in yellow (capacity change)
// whatKindOfMovie
// romantic
// fictional
// non-fictional
// adventurous
// detective
function whatKindOfMovie(datapoint){
  let e = datapoint.whatKindOfMovie;
  if (e = "romantic"){
    return "0.2";
  }else if (e = "fictional"){
    return "0.4";
  }else if (e = "non-fictional"){
    return "0.6";
  }else if (e = "adventurous"){
    return "0.8";
  }else if (e = "detective"){
    return "1";
  }
}

// f--rect in pink (capacity change)
// whichMeal
// breakfast
// lunch
// dinner
function whichMeal(datapoint){
  let f = datapoint.whichMeal;
  if (f = "breakfast"){
    return "0.1";
  }else if (f = "lunch"){
    return "0.5";
  }else if (f = "lunch"){
    return "1";
  }
}

//change group position
// function randomGroupPosition(){
//   let x = Math.random()*600;
//   let y = Math.random()*400;
//   return "translate(" + x + "," + y + ")";
// }


// function gotData(incomingData){
//   console.log("the incoming data is", incomingData);
// }

//Random function
// function randomX(){
//   return Math.random()*600;
// }
//
// function randomY(){
//   return Math.random()*400;
// }
//
// function randomGroupPosition(){
//   let x = Math.random()*600;
//   let y = Math.random()*400;
//   return "translate(" + x + ", " + y ")"
// }
