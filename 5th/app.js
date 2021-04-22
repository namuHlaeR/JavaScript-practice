//Y and X values arrays
const xlabels = [];
const ytemps = [];

chartIt();

//API chart builder
async function chartIt(){
    await getData();
    console.log(xlabels)
    const ctx = document.getElementById('chart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xlabels,
            datasets: [{
                label: 'Global average temperature',
                data: ytemps,
                fill: false,
                backgroundColor: 
                    'rgba(255, 99, 132, 0.2)',
                borderColor:
                    'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        scale: {
            yAxes: [
                {
                    ticks: {
                        callback: function(value, index, value) {
                            return value + 'C';
                        }
                    }
                }
            ]
        }
    }
 });
};

//Fetch the data from.csv file
async function getData(){
    const response = await fetch("ZonAnn.Ts+dSST.csv");
    const data = await response.text();

//Data seperation engine

    //Remove first row / make new row
    const table = data.split('\n').slice(1);
    //Seperate by row
    table.forEach(row => {
        //Seperate by comma
        const columns = row.split(',');
        //Create a X values
        const year = columns[0];
        xlabels.push(year);
        //Create a Y value
        const temp = columns[1];
        ytemps.push(parseFloat(temp) + 14);
    })
};