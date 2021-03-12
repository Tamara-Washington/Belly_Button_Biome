// Use d3 to read in samples.json

d3.json("././samples.json").then(data => {

        console.log(data)
        //get ids for dropdown
        data.names.forEach(element => {
            d3.select('#selDataset').append('option').text(element)
        });

    });

    function optionChanged(info) {
        d3.json("././samples.json").then(data => {
        data.samples.forEach( d => {
            if (d.id == info) {
                var otu= d.otu_ids
                var otuValues = d.sample_values
                var otuLabels = d.otu_labels
                console.log(otu)

                var trace = [{
                    x:otuValues.slice(0,10).reverse(),
                    y:otu.slice(0,10).reverse().map(d => `OTUID ${d}`),
                    type: 'bar',
                    orientation: 'h',
                    hovertext: otuLabels.slice(0,10).reverse()

                }]
                Plotly.newPlot('bar', trace)
            }
        })
    })
    }
