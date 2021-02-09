let data = [
  {
      "time": "2021-01-27T14:14:08.421Z",
      "Do You Agree That We Are Facing Severe Environmental Problems?": 7,
      "Have You Ever Followed Any Environmentally-friendly Institution?": 7,
      "Are You Willing to Make Some Changes in Your Daily Life for the Sake of Protecting the Environment?": 6,
      "How Often Do You Have Leftovers?": 7,
      "Do You Think Plastics Are Bad for the Environment? ": 7,
      "email": "zw2375@nyu.edu"
  },
  {
      "time": "2021-01-27T14:16:46.276Z",
      "Do You Agree That We Are Facing Severe Environmental Problems?": 4,
      "Have You Ever Followed Any Environmentally-friendly Institution?": 3,
      "Are You Willing to Make Some Changes in Your Daily Life for the Sake of Protecting the Environment?": 5,
      "How Often Do You Have Leftovers?": 4,
      "Do You Think Plastics Are Bad for the Environment? ": 6,
      "email": "cp3307@nyu.edu"
  },
  {
      "time": "2021-01-27T14:20:47.431Z",
      "Do You Agree That We Are Facing Severe Environmental Problems?": 5,
      "Have You Ever Followed Any Environmentally-friendly Institution?": 2,
      "Are You Willing to Make Some Changes in Your Daily Life for the Sake of Protecting the Environment?": 6,
      "How Often Do You Have Leftovers?": 4,
      "Do You Think Plastics Are Bad for the Environment? ": 7,
      "email": "jl10902@nyu.edu"
  },
  {
      "time": "2021-01-27T14:30:23.525Z",
      "Do You Agree That We Are Facing Severe Environmental Problems?": 7,
      "Have You Ever Followed Any Environmentally-friendly Institution?": 5,
      "Are You Willing to Make Some Changes in Your Daily Life for the Sake of Protecting the Environment?": 6,
      "How Often Do You Have Leftovers?": 5,
      "Do You Think Plastics Are Bad for the Environment? ": 7,
      "email": "dl4224@nyu.edu"
  },
  {
      "time": "2021-01-27T14:39:12.183Z",
      "Do You Agree That We Are Facing Severe Environmental Problems?": 7,
      "Have You Ever Followed Any Environmentally-friendly Institution?": 6,
      "Are You Willing to Make Some Changes in Your Daily Life for the Sake of Protecting the Environment?": 7,
      "How Often Do You Have Leftovers?": 2,
      "Do You Think Plastics Are Bad for the Environment? ": 4,
      "email": "cz1627@nyu.edu"
  },
  {
      "time": "2021-01-27T15:36:45.420Z",
      "Do You Agree That We Are Facing Severe Environmental Problems?": 6,
      "Have You Ever Followed Any Environmentally-friendly Institution?": 5,
      "Are You Willing to Make Some Changes in Your Daily Life for the Sake of Protecting the Environment?": 7,
      "How Often Do You Have Leftovers?": 6,
      "Do You Think Plastics Are Bad for the Environment? ": 7,
      "email": "xc2144@nyu.edu"
  },
  {
      "time": "2021-01-27T17:37:55.868Z",
      "Do You Agree That We Are Facing Severe Environmental Problems?": 5,
      "Have You Ever Followed Any Environmentally-friendly Institution?": 7,
      "Are You Willing to Make Some Changes in Your Daily Life for the Sake of Protecting the Environment?": 7,
      "How Often Do You Have Leftovers?": 4,
      "Do You Think Plastics Are Bad for the Environment? ": 7,
      "email": "jf4043@nyu.edu"
  },
  {
      "time": "2021-01-27T23:43:29.359Z",
      "Do You Agree That We Are Facing Severe Environmental Problems?": 7,
      "Have You Ever Followed Any Environmentally-friendly Institution?": 5,
      "Are You Willing to Make Some Changes in Your Daily Life for the Sake of Protecting the Environment?": 6,
      "How Often Do You Have Leftovers?": 5,
      "Do You Think Plastics Are Bad for the Environment? ": 7,
      "email": "hlo210@nyu.edu"
  },
  {
      "time": "2021-01-28T06:04:49.431Z",
      "Do You Agree That We Are Facing Severe Environmental Problems?": 6,
      "Have You Ever Followed Any Environmentally-friendly Institution?": 4,
      "Are You Willing to Make Some Changes in Your Daily Life for the Sake of Protecting the Environment?": 6,
      "How Often Do You Have Leftovers?": 6,
      "Do You Think Plastics Are Bad for the Environment? ": 6,
      "email": "hl3797@nyu.edu"
  },
  {
      "time": "2021-01-29T16:05:50.975Z",
      "Do You Agree That We Are Facing Severe Environmental Problems?": 7,
      "Have You Ever Followed Any Environmentally-friendly Institution?": 4,
      "Are You Willing to Make Some Changes in Your Daily Life for the Sake of Protecting the Environment?": 7,
      "How Often Do You Have Leftovers?": 5,
      "Do You Think Plastics Are Bad for the Environment? ": 3,
      "email": "sy2821@nyu.edu"
  }
]


// the function dates a data
// arrayn as an argument
function averageData(data){
  // new empty array to be filled
  // with data in new structure
  let newData = [];
  // assuming each data point has the same
  // keys/categories, we extract an array of them from the
  // first data point in the array
  // in class we changed it to the last element instead
  // as the first one did not have all the categories filled out
  // there is more thorough ways to do this, but for out purposes
  // now, this will be enough
  let keys = Object.keys(data[0]);
  // now we loop over the keys/categories
  for(let i = 0; i < keys.length; i++){
    // store the current key/category in
    // a variable:
    let key = keys[i];
    // now we will loop over each data point
    // in the data set, check if it has a value
    // for the key/category and add them to
    // a total sum variable
    // as well as count the occurences in order to
    // calulate the averae in the end
    let sum = 0;
    let num = 0;
    for(let j = 0; j < data.length; j++){
      let datum = data[j];
      // check if the key exists
      // for this datapoint
      if(key in datum){
        // add to sum
        sum += datum[key];
        // increase count
        num++;
      }
    }
    // now calculate the average
    let avg = sum/num;
    // make sure the value is a number
    // (some value might be strings)
    if(!isNaN(avg)){
      // create an object with both the average
      // and also the number of measurements that
      // went into the average
      let newDataPoint = {"name": key, "average": avg, 'numMeasurements': num};
      // add the new datapoint to the new data array
      newData.push(newDataPoint);
    }
  }
  // return everything when it is done
  return newData;
}


//----------------------------

let container = document.getElementById("container");

console.log("data", data);

let transformedData = averageData(data);

console.log("transformedData", transformedData);

for (let i = 0; i < transformedData.length; i++){
  console.log("i", i);

  let questionSet = transformedData[i];
  console.log("questionSet", questionSet);

  let bar = document.createElement("div");
  bar.className = "bar";
  let barWidth = questionSet.average * 200;
  bar.style.width = barWidth + "px";

  let name = questionSet.name;
  let ptag = document.createElement("p");
  ptag.className = "p";
  ptag.innerHTML = name;
  bar.appendChild(ptag);

  container.appendChild(bar);


  // function changeText(){
  //   ptag.innerHTML = questionSet.average;
  // }
  // function remainText(){
  //   ptag.innerHTML = name;
  // }
  //
  // bar.addEventListener("mouseover", changeText(), true);
  // bar.addEventListener("mouseout", remainText(), true);
  // have tried a lot but all failed
}
