function getSavings() {

    const url="http://localhost:8080/income/savings?year=2022";
    async function getapi(url) {
        const response = await fetch(url);
        var data = await response.json();
        console.log(data);
        show(data);
    }
   function show(data){
    var yValue=[];
    for(let i=1;i<=12;i++){
        yValue.push(data[i]);
    }
    console.log(yValue);
    var yValues=[];

    for(let value of yValue){
        if(value<0){
            yValues.push(0);
        }
        else{
            yValues.push(value);
        }
    }
    var xValues = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "oct", "Nov", "Dec"];

        var barColors = ["#ff6666","#99ffff","#99ffff","#99ffff","#99ffff","#99ffff","#99ffff","#99ffff","#99ffff","#99ffff","#99ffff","#99ffff"];

        new Chart("myChart", {
            type: "bar",
            data: {
                labels: xValues,
                datasets: [{
                    backgroundColor: barColors,
                    data: yValues
                }]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: "Year Savings"
                }
            }
        });
   }
    getapi(url);
}
