// Use d3 to read in samples.json

// let dataPromise = d3.json("./samples.json");

// function processData(data){
//     console.log(data);
// }

// dataPromise.then(processData);

// Create function to get info needed
function getInfo() {
    //Read in JSON
    d3.json("./samples.json").then ((data) =>{
        console.log(data)
    //collect the out ids
    // var otuId = data.samples[0].otu_ids;
    // console.log(otuId)
    });



//Get a handle on the dropdown
// data.map((

    
// ))  
// let dropDown = d3.select('#selDataset');




// //Get top out_ids
// function getId(data) {
//     return data.samples[0].out_ids
// }