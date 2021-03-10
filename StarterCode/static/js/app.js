// Use d3 to read in samples.json

let dataPromise = d3.json("./samples.json");

dataPromise.then(processData);

function processData(data){
    console.log(data);
}


// d3.json("data/samples.json").then((data) => {
//     console.log(data);
// };
