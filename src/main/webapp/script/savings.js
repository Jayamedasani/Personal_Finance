function getSavings() {

    const url="http://localhost:8080/Personal_Finance/savings?year=2022";
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
function getMonthlyReport(){
const url = "http://localhost:8080/Personal_Finance/savings";
var message;
        async function getapi(url) {
            const response = await fetch(url);
            var data = await response.json();
            var data1=data[1];
            console.log(data1);
            var data2=data[2];
            var data3=data[3];
            message=`Current Month Income: ${data1}  Your Expenditure is:  ${data2} Balance Amount is: ${data3}`;
        }
        getapi(url);
        console.log(message);
    emailjs.send("service_35nruh8","template_o17xhco",{
    message: "hii",
    });
}