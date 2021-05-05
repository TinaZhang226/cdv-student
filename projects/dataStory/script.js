d3.csv("IMDB_top_1000.csv").then(function(incomingData){
	//console.log(incomingData);
	let filteredData = incomingData.filter(function(d,i){ return i<100 })
	console.log(filteredData);
	

















}
);




// let w = 700;
// let h = 450;
//
// let viz1 = d3.select("#vizContainer1").append("svg")
// 	.attr("width", w)
// 	.attr("height", h)
// 	.attr("class", "viz1")
// 	.style("background-color", "black")
// ;
//
//
// let myData1 = [
// 	[50, 50, 50, "lightblue"]
// ]
//
// let xScale1 = d3.scaleLinear().domain([0, 100]).range([0, w]);
// let yScale1 = d3.scaleLinear().domain([0, 100]).range([0, h]);
// let rScale1 = d3.scaleLinear().domain([0, 100]).range([10, h/2]);
//
//
// let graphGroup1 = viz1.append("g").attr("class", "graphGroup1");
//
// function updateGraph1(){
//
// 	let elements1 = graphGroup1.selectAll(".datapoint1").data(myData1);
//
// 	let enteringElements1 = elements1.enter();
// 	let exitingElements1 = elements1.exit();
//
// 	enteringElements1.append("circle")
// 		.attr("class", "datapoint1")
// 		.attr("cx", function(d, i){
// 			let x = d[0]
// 			return xScale1(x)
// 		})
// 		.attr("cy", function(d, i){
// 			let y = d[1]
// 			return yScale1(y)
// 		})
// 		.attr("r", function(d, i){
// 			let r = d[2]
// 			return rScale1(r)
// 		})
// 		.attr("fill", function(d,i){
// 			return d[3]
// 		})
// 	;
//
// 	elements1
// 		.transition()
// 		.duration(700)
// 		.attr("cx", function(d, i){
// 			let x = d[0]
// 			return xScale1(x)
// 		})
// 		.attr("cy", function(d, i){
// 			let y = d[1]
// 			return yScale1(y)
// 		})
// 		.attr("r", function(d, i){
// 			let r = d[2]
// 			return rScale1(r)
// 		})
// 		.attr("fill", function(d,i){
// 			return d[3]
// 		})
// 	;
//
// }
//
//
// updateGraph1();
//
// enterView({
// 	selector: '#genre1',
// 	enter: function(el) {
// 		console.log('a special element entered');
// 		console.log("Color")
// 		myData1[0][3] = "lightyellow"
// 		updateGraph1();
//
// 	},
// 	exit: function(el) {
//     console.log('a special element exited');
// 		myData1[0][3] = "lightblue"
// 		updateGraph1();
//
// 	},
// 	progress: function(el, progress) {
//     console.log("the special element's progress is:", progress);
// 	},
// 	offset: 0.5, // enter at middle of viewport
// 	// once: true, // trigger just once
// });
//
//
//
// enterView({
// 	selector: '#genre2',
// 	enter: function(el) {
// 		console.log('a special element entered');
// 		console.log("Color")
// 		myData1[0][3] = "lightblue"
// 		updateGraph1();
//
// 	},
// 	exit: function(el) {
//     console.log('a special element exited');
// 		myData1[0][3] = "lightyellow"
// 		updateGraph1();
//
// 	},
// 	progress: function(el, progress) {
//     console.log("the special element's progress is:", progress);
// 	},
// 	offset: 0.5, // enter at middle of viewport
// 	// once: true, // trigger just once
// });
//
//
// enterView({
// 	selector: '#genre3',
// 	enter: function(el) {
// 		console.log('a special element entered');
// 		myData1[0][2] = 300
// 		updateGraph1();
//
// 	},
// 	exit: function(el) {
//     console.log('a special element exited');
// 		myData1[0][2] = 50
// 		updateGraph1();
//
// 	},
// 	progress: function(el, progress) {
//     console.log("the special element's progress is:", progress);
// 	},
// 	offset: 0.5, // enter at middle of viewport
// 	// once: true, // trigger just once
// });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// let viz2 = d3.select("#vizContainer2").append("svg")
// 	.attr("width", w)
// 	.attr("height", h)
// 	.attr("class", "viz2")
// 	.style("background-color", "black")
// ;
//
// let myData2 = [
// 	[50, 50, 50, "lightblue"]
// ]
//
// let xScale2 = d3.scaleLinear().domain([0, 100]).range([0, w]);
// let yScale2 = d3.scaleLinear().domain([0, 100]).range([0, h]);
// let rScale2 = d3.scaleLinear().domain([0, 100]).range([10, h/2]);
//
//
// let graphGroup2 = viz2.append("g").attr("class", "graphGroup2");
//
// function updateGraph2(){
//
// 	let elements2 = graphGroup2.selectAll(".datapoint2").data(myData2);
//
// 	let enteringElements2 = elements2.enter();
// 	let exitingElements2 = elements2.exit();
//
// 	enteringElements2.append("circle")
// 		.attr("class", "datapoint2")
// 		.attr("cx", function(d, i){
// 			let x = d[0]
// 			return xScale2(x)
// 		})
// 		.attr("cy", function(d, i){
// 			let y = d[1]
// 			return yScale2(y)
// 		})
// 		.attr("r", function(d, i){
// 			let r = d[2]
// 			return rScale2(r)
// 		})
// 		.attr("fill", function(d,i){
// 			return d[3]
// 		})
// 	;
//
// 	elements2
// 		.transition()
// 		.duration(700)
// 		.attr("cx", function(d, i){
// 			let x = d[0]
// 			return xScale2(x)
// 		})
// 		.attr("cy", function(d, i){
// 			let y = d[1]
// 			return yScale2(y)
// 		})
// 		.attr("r", function(d, i){
// 			let r = d[2]
// 			return rScale2(r)
// 		})
// 		.attr("fill", function(d,i){
// 			return d[3]
// 		})
// 	;
//
// }
//
//
// updateGraph2();
//
// enterView({
// 	selector: '#year1',
// 	enter: function(el) {
// 		console.log('a special element entered');
// 		console.log("Color")
// 		myData2[0][3] = "lightyellow"
// 		updateGraph2();
//
// 	},
// 	exit: function(el) {
//     console.log('a special element exited');
// 		myData2[0][3] = "lightblue"
// 		updateGraph2();
//
// 	},
// 	progress: function(el, progress) {
//     console.log("the special element's progress is:", progress);
// 	},
// 	offset: 0.5, // enter at middle of viewport
// 	// once: true, // trigger just once
// });
//
//
//
// enterView({
// 	selector: '#year2',
// 	enter: function(el) {
// 		console.log('a special element entered');
// 		console.log("Color")
// 		myData2[0][3] = "lightblue"
// 		updateGraph2();
//
// 	},
// 	exit: function(el) {
//     console.log('a special element exited');
// 		myData2[0][3] = "lightyellow"
// 		updateGraph2();
//
// 	},
// 	progress: function(el, progress) {
//     console.log("the special element's progress is:", progress);
// 	},
// 	offset: 0.5, // enter at middle of viewport
// 	// once: true, // trigger just once
// });
//
//
// enterView({
// 	selector: '#year3',
// 	enter: function(el) {
// 		console.log('a special element entered');
// 		myData2[0][2] = 300
// 		updateGraph2();
//
// 	},
// 	exit: function(el) {
//     console.log('a special element exited');
// 		myData2[0][2] = 50
// 		updateGraph2();
//
// 	},
// 	progress: function(el, progress) {
//     console.log("the special element's progress is:", progress);
// 	},
// 	offset: 0.5, // enter at middle of viewport
// 	// once: true, // trigger just once
// });
