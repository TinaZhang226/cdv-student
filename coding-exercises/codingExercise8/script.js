let w = 1200;
let h = 800;
let padding = 150;
let h2 = h - padding;
let i = 0;
// SVG
let viz = d3.select("#container").append("svg")
    .style("width", w)
    .style("height", h2)
    .style("background-color", "#475478")
;


// IMPORT DATA
d3.csv("china-pop-2018.csv").then(incomingData => {

	d3.json("mainland.geojson").then(geoData => {


		let projection1 = d3.geoEqualEarth()
			.translate(w/2,h2/2)
			.fitExtent([[padding, padding], [w-padding, h2-padding]], geoData)
		let projection2 =  d3.geoAiry()
			.translate(w/2,h2/2)
			.fitExtent([[padding, padding], [w-padding, h2-padding]], geoData)
		let projection3 =  d3.geoAlbers()
			.translate(w/2,h2/2)
			.fitExtent([[padding, padding], [w-padding, h2-padding]], geoData)
		let projection4 = d3.geoAugust()
			.translate(w/2,h2/2)
			.fitExtent([[padding, padding], [w-padding, h2-padding]], geoData)
		let projection5 = d3.geoEquirectangular()
				.translate(w/2,h2/2)
			.fitExtent([[padding, padding], [w-padding, h2-padding]], geoData)
    let projection6 = d3.geoMercator()
  			.translate(w/2,h2/2)
  		.fitExtent([[padding, padding], [w-padding, h2-padding]], geoData)
    let projection7 = d3.geoPolyconic()
        .translate(w/2,h2/2)
      .fitExtent([[padding, padding], [w-padding, h2-padding]], geoData)
		let projection = [projection1, projection2, projection3, projection4, projection5, projection6, projection7]
		let name = ["geoEqualEarth","geoAiry","geoAlbers","geoAugust","geoEquirectangular","geoMercator","geoPolyconic"]

		let pathMaker = d3.geoPath(projection[i])

		incomingData = incomingData.map(d => {
			d.population = Number(d.population)
			return d
		})

		let minpop = d3.min(incomingData, d => d.population)
		let maxpop = d3.max(incomingData, d => d.population)
		let colorScale = d3.scaleLinear().domain([minpop, maxpop/2, maxpop]).range(["#f5f5b0", "#e69017", "#d91c07"])

		viz.selectAll(".province").data(geoData.features).enter()
			.append("path")
				.attr("class", "province")
				.attr("d", pathMaker)
				.attr("stroke", "#073d63")
        .attr("stroke-width", "3")
				.attr("fill", d => {
					let correspondingDatapoint = incomingData.find(datapoint => datapoint.province == d.properties.name)
					if(correspondingDatapoint != undefined){
						return colorScale(correspondingDatapoint.population)
					} else {
						return "white";
					}

				});
		document.getElementById("btn").addEventListener("click", ()=>{
			i = (i+1)%projection.length
			let pathMaker = d3.geoPath(projection[i])
			viz.selectAll(".province").data(geoData.features).attr("d", pathMaker)
			document.querySelector("#pp").innerHTML = "Projection Type " + (i+1) + ": " + name[i]
		})

	});

})
