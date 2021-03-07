console.log("js is loaded");
let w = 1200;
let h = 800;
let c1XLocation = w/5.5;
let c1YLocation = h/2.7;
let r = 130;

let viz = d3.select("#container")
  .append("svg")
    .attr("class", "viz")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "#025951")
;
//left
let circle1 = viz
  .append("circle")
    .attr("class", "circle1")
    .attr("cx", c1XLocation)
    .attr("cy", c1YLocation)
    .attr("r", r)
    .attr("fill", "#735702")
;
let circle2 = viz
  .append("circle")
    .attr("class", "circle2")
    .attr("cx", c1XLocation + 1.3*r)
    .attr("cy", c1YLocation - 0.3*r)
    .attr("r", r)
    .attr("fill", "#8C8303")
;
let circle3 = viz
  .append("circle")
    .attr("class", "circle3")
    .attr("cx", c1XLocation + 2.6*r)
    .attr("cy", c1YLocation - 0.6*r)
    .attr("r", r)
    .attr("fill", "#BABF2A")
;
let circle4 = viz
  .append("circle")
    .attr("class", "circle4")
    .attr("cx", c1XLocation + 1.0*r)
    .attr("cy", c1YLocation + 1.0*r)
    .attr("r", r)
    .attr("fill", "#829FD9")
;
let circle5 = viz
  .append("circle")
    .attr("class", "circle5")
    .attr("cx", c1XLocation + 2.0*r)
    .attr("cy", c1YLocation + 0.7*r)
    .attr("r", r)
    .attr("fill", "#027368")
;
let title = viz
  .append("text")
    .attr("class", "title")
    .attr("x", w/15)
    .attr("y", h*6/7)
    .text("Absent-Minded")
    .attr("fill", "#F25116")
    .style("font-family", "'Ravi Prakash', cursive")
    .style("font-size", "110")
    .style("stroke","white")
    .style("stroke-width","3px")
;
//right
let icon = viz
  .append("g")
    .attr("class", ".icon")
;
let iconList = icon
  .append("rect")
    .attr("class", "iconList")
    .attr("width", 360)
    .attr("height", 720)
    .attr("x", 0)
    .attr("y", 0)
    .style("fill", "#027368")
    //.attr("opacity",0.7)
;
let iconTitle = icon
  .append("text")
    .attr("class", "iconText")
    .text("Icon List")
    .attr("x", 190)
    .attr("y", 50)
    .attr("fill", "white")
    .style("font-family", "'Ravi Prakash', cursive")
    .style("font-size", "50")
;
//specific icon list 1 -- color -- doingWhat
let text1 = icon
  .append("text")
    .attr("class","textTitle")
    .text("Color-What I was Doing")
    .attr("x", 5)
    .attr("y", 80)
    .attr("fill", "white")
    .style("font-family", "'Ravi Prakash', cursive")
    .style("font-size", "20")
;
  //1
  icon
    .append("circle")
      .attr("cx",15)
      .attr("cy",105)
      .attr("r",10)
      .attr("fill","#F02B25")
  ;
  icon
    .append("text")
      .text("Taking a Course")
      .attr("x",40)
      .attr("y",110)
      .attr("fill", "white")
      .style("font-family", "'Architects Daughter', cursive")
      .style("font-size", "15")
  ;
  //2
  icon
    .append("circle")
      .attr("cx",15)
      .attr("cy",130)
      .attr("r",10)
      .attr("fill","#FF6702")
  ;
  icon
    .append("text")
      .text("Watching a Movie")
      .attr("x",40)
      .attr("y",135)
      .attr("fill", "white")
      .style("font-family", "'Architects Daughter', cursive")
      .style("font-size", "15")
  ;
  //3
  icon
    .append("circle")
      .attr("cx",15)
      .attr("cy",155)
      .attr("r",10)
      .attr("fill","#FFC500")
  ;
  icon
    .append("text")
      .text("Reading a Text")
      .attr("x",40)
      .attr("y",160)
      .attr("fill", "white")
      .style("font-family", "'Architects Daughter', cursive")
      .style("font-size", "15")
  ;
  //4
  icon
    .append("circle")
      .attr("cx",15)
      .attr("cy",180)
      .attr("r",10)
      .attr("fill","#4C571C")
  ;
  icon
    .append("text")
      .text("Eating a Meal")
      .attr("x",40)
      .attr("y",185)
      .attr("fill", "white")
      .style("font-family", "'Architects Daughter', cursive")
      .style("font-size", "15")
  ;
  //5
  icon
    .append("circle")
      .attr("cx",15)
      .attr("cy",205)
      .attr("r",10)
      .attr("fill","#003280")
  ;
  icon
    .append("text")
      .text("Having a Meeting")
      .attr("x",40)
      .attr("y",210)
      .attr("fill", "white")
      .style("font-family", "'Architects Daughter', cursive")
      .style("font-size", "15")
  ;
  //6
  icon
    .append("circle")
      .attr("cx",15)
      .attr("cy",230)
      .attr("r",10)
      .attr("fill","#510E80")
  ;
  icon
    .append("text")
      .text("Doing an Assignment")
      .attr("x",40)
      .attr("y",235)
      .attr("fill", "white")
      .style("font-family", "'Architects Daughter', cursive")
      .style("font-size", "15")
  ;
//specific icon list 2 -- shape -- why
let text2 = icon
  .append("text")
    .attr("class","textTitle")
    .text("Shape-What Caught my Attention")
    .attr("x", 5)
    .attr("y", 275)
    .attr("fill", "white")
    .style("font-family", "'Ravi Prakash', cursive")
    .style("font-size", "20")
;
  //1.SS_C
  icon
    .append("circle")
      .attr("cx",15)
      .attr("cy",300)
      .attr("r",10)
      .attr("fill","white")
  ;
  icon
    .append("text")
      .text("Social Surroundings")
      .attr("x",40)
      .attr("y",305)
      .attr("fill", "white")
      .style("font-family", "'Architects Daughter', cursive")
      .style("font-size", "15")
  ;
  //2.PS_R
  icon
    .append("rect")
      .attr("x",6)
      .attr("y",320)
      .attr("height",18)
      .attr("width",18)
      .attr("fill","white")
  ;
  icon
    .append("text")
      .text("Physical Surroundings")
      .attr("x",40)
      .attr("y",335)
      .attr("fill", "white")
      .style("font-family", "'Architects Daughter', cursive")
      .style("font-size", "15")
  ;
  //3.TCM_S
  let star = `<polygon class="cls-1" points="103.17 8.54 8.05 91.46 43.41 192.68 164.15 193.9 198.29 92.68 103.17 8.54"/>`
  let bgS = icon.append("g").attr("class", "starShape").html(star)
    .attr("fill","white")
  ;
  bgS.attr("transform", "translate(3,345),scale(0.12)");
  icon
    .append("text")
      .text("Thoughts Came up in my Mind")
      .attr("x",40)
      .attr("y",365)
      .attr("fill", "white")
      .style("font-family", "'Architects Daughter', cursive")
      .style("font-size", "15")
  ;
  //4.TB_F
  let flower = `<path class="cls-1" d="M59.16,62.19S39.24,24,76.38,8,133,30.36,133,30.36s29.79-37,60.29-26,16.58,53,16.58,53,45.06-12.24,58.79,13-19.17,56.36-19.17,56.36,44.26,16.4,33.89,41.44-54,23.3-54,23.3Z"/><path class="cls-1" d="M229.62,190.78S249.57,229,212.44,245s-56.6-22.36-56.6-22.36-29.76,37-60.27,26-16.62-53-16.62-53S33.89,208,20.14,182.77,39.27,126.4,39.27,126.4-5,110,5.34,85s54-23.34,54-23.34Z"/>`
  let bgF = icon.append("g").attr("class", "flowerShape").html(flower)
    .attr("fill","white")
  ;
  bgF.attr("transform", "translate(2,380),scale(0.09)");
  icon
    .append("text")
      .text("Feeling Tired or Boring")
      .attr("x",40)
      .attr("y",397)
      .attr("fill", "white")
      .style("font-family", "'Architects Daughter', cursive")
      .style("font-size", "15")
  ;
  //specific icon list 3 -- arc -- timePeriod
  let text3 = icon
    .append("text")
      .attr("class","textTitle")
      .text("Arc-When Did I Feel Absent-minded")
      .attr("x", 5)
      .attr("y", 435)
      .attr("fill", "white")
      .style("font-family", "'Ravi Prakash', cursive")
      .style("font-size", "20")
  ;
  icon
    .append("path")
      .attr("d",d3.arc()
            .outerRadius(20)
            .innerRadius(10)
            .startAngle(0)
            .endAngle(0.5 * Math.PI)
        )
      .attr("fill","#025951")
      .attr("stroke","#A7C8F2")
      .attr("transform","translate(25,470),rotate(-90)")
  ;
  icon
    .append("text")
      .text("12am - 6am")
      .attr("x",40)
      .attr("y",465)
      .attr("fill", "white")
      .style("font-family", "'Architects Daughter', cursive")
      .style("font-size", "15")
  ;
  icon
    .append("path")
      .attr("d",d3.arc()
            .outerRadius(20)
            .innerRadius(10)
            .startAngle(0)
            .endAngle(0.5 * Math.PI)
        )
      .attr("fill","#025951")
      .attr("stroke","#A7C8F2")
      .attr("transform","translate(8,500),rotate(0)")
  ;
  icon
    .append("text")
      .text("6am - 12pm")
      .attr("x",40)
      .attr("y",495)
      .attr("fill", "white")
      .style("font-family", "'Architects Daughter', cursive")
      .style("font-size", "15")
  ;
  icon
    .append("path")
      .attr("d",d3.arc()
            .outerRadius(20)
            .innerRadius(10)
            .startAngle(0)
            .endAngle(0.5 * Math.PI)
        )
      .attr("fill","#025951")
      .attr("stroke","#A7C8F2")
      .attr("transform","translate(8,510),rotate(90)")
  ;
  icon
    .append("text")
      .text("12pm - 6pm")
      .attr("x",40)
      .attr("y",525)
      .attr("fill", "white")
      .style("font-family", "'Architects Daughter', cursive")
      .style("font-size", "15")
  ;
  icon
    .append("path")
      .attr("d",d3.arc()
            .outerRadius(20)
            .innerRadius(10)
            .startAngle(0)
            .endAngle(0.5 * Math.PI)
        )
      .attr("fill","#025951")
      .attr("stroke","#A7C8F2")
      .attr("transform","translate(25,540),rotate(180)")
  ;
  icon
    .append("text")
      .text("6pm - 12am")
      .attr("x",40)
      .attr("y",555)
      .attr("fill", "white")
      .style("font-family", "'Architects Daughter', cursive")
      .style("font-size", "15")
  ;
  //specific icon list 4 -- opacity -- duration
  let text4 = icon
    .append("text")
      .attr("class","textTitle")
      .text("Opacity-How Long I Felt Absent-minded")
      .attr("x", 5)
      .attr("y", 595)
      .attr("fill", "white")
      .style("font-family", "'Ravi Prakash', cursive")
      .style("font-size", "20")
  ;
  //line 1
  icon
    .append("circle")
      .attr("cx",15)
      .attr("cy",620)
      .attr("r",10)
      .attr("fill","white")
      .attr("opacity",0.2)
  ;
  icon
    .append("text")
      .text("1 min")
      .attr("x",5)
      .attr("y",650)
      .attr("fill", "white")
      .style("font-family", "'Architects Daughter', cursive")
      .style("font-size", "15")
  ;
  icon
    .append("circle")
      .attr("cx",65)
      .attr("cy",620)
      .attr("r",10)
      .attr("fill","white")
      .attr("opacity",0.3)
  ;
  icon
    .append("text")
      .text("2 min")
      .attr("x",55)
      .attr("y",650)
      .attr("fill", "white")
      .style("font-family", "'Architects Daughter', cursive")
      .style("font-size", "15")
  ;
  icon
    .append("circle")
      .attr("cx",115)
      .attr("cy",620)
      .attr("r",10)
      .attr("fill","white")
      .attr("opacity",0.4)
  ;
  icon
    .append("text")
      .text("3 min")
      .attr("x",105)
      .attr("y",650)
      .attr("fill", "white")
      .style("font-family", "'Architects Daughter', cursive")
      .style("font-size", "15")
  ;
  icon
    .append("circle")
      .attr("cx",165)
      .attr("cy",620)
      .attr("r",10)
      .attr("fill","white")
      .attr("opacity",0.5)
  ;
  icon
    .append("text")
      .text("4 min")
      .attr("x",155)
      .attr("y",650)
      .attr("fill", "white")
      .style("font-family", "'Architects Daughter', cursive")
      .style("font-size", "15")
  ;
  icon
    .append("circle")
      .attr("cx",215)
      .attr("cy",620)
      .attr("r",10)
      .attr("fill","white")
      .attr("opacity",0.6)
  ;
  icon
    .append("text")
      .text("5 min")
      .attr("x",205)
      .attr("y",650)
      .attr("fill", "white")
      .style("font-family", "'Architects Daughter', cursive")
      .style("font-size", "15")
  ;
  //line 2
  icon
    .append("circle")
      .attr("cx",15)
      .attr("cy",675)
      .attr("r",10)
      .attr("fill","white")
      .attr("opacity",0.7)
  ;
  icon
    .append("text")
      .text("6 min")
      .attr("x",5)
      .attr("y",705)
      .attr("fill", "white")
      .style("font-family", "'Architects Daughter', cursive")
      .style("font-size", "15")
  ;
  icon
    .append("circle")
      .attr("cx",65)
      .attr("cy",675)
      .attr("r",10)
      .attr("fill","white")
      .attr("opacity",0.8)
  ;
  icon
    .append("text")
      .text("7 min")
      .attr("x",55)
      .attr("y",705)
      .attr("fill", "white")
      .style("font-family", "'Architects Daughter', cursive")
      .style("font-size", "15")
  ;
  icon
    .append("circle")
      .attr("cx",115)
      .attr("cy",675)
      .attr("r",10)
      .attr("fill","white")
      .attr("opacity",0.9)
  ;
  icon
    .append("text")
      .text("8 min")
      .attr("x",105)
      .attr("y",705)
      .attr("fill", "white")
      .style("font-family", "'Architects Daughter', cursive")
      .style("font-size", "15")
  ;
  icon
    .append("circle")
      .attr("cx",165)
      .attr("cy",675)
      .attr("r",10)
      .attr("fill","white")
      .attr("opacity",0.95)
  ;
  icon
    .append("text")
      .text("9 min")
      .attr("x",155)
      .attr("y",705)
      .attr("fill", "white")
      .style("font-family", "'Architects Daughter', cursive")
      .style("font-size", "15")
  ;
  icon
    .append("circle")
      .attr("cx",215)
      .attr("cy",675)
      .attr("r",10)
      .attr("fill","white")
      .attr("opacity",1.0)
  ;
  icon
    .append("text")
      .text("10 min")
      .attr("x",205)
      .attr("y",705)
      .attr("fill", "white")
      .style("font-family", "'Architects Daughter', cursive")
      .style("font-size", "15")
  ;

icon.attr("transform", "translate(800,40)");
