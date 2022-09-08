window.onload=function(){
getExpenditureDashboard();
getIncomeDashboard();
}
function getExpenditureDashboard(){
    const url="http://localhost:8080/Personal_Finance/dashboards?month=09&year=2022&name=expenditure";
        async function getapi(url) {
            const response = await fetch(url);
            var data = await response.json();
            console.log(data);
            show(data);
        }
        getapi(url);
    function show(data){
        var xValues=[];
        var yValues=[];
        for(let month in data){
            xValues.push(month);
            yValues.push(data[month]);
        }
        var barColors = [
          "#b91d47",
          "#00aba9",
          "#2b5797",
          "#e8c3b9",
          "#1e7145"
        ];

        new Chart("myExpenditurePie", {
          type: "pie",
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues
            }]
          },
          options: {
            title: {
              display: true,
              text: "Expenditure Dashboard"
            }
          }
        });
    }
}
function getIncomeDashboard(){
    const url="http://localhost:8080/Personal_Finance/dashboards?month=08&year=2022&name=income";
        async function getapi(url) {
            const response = await fetch(url);
            var data = await response.json();
            console.log(data);
            show(data);
        }
        getapi(url);
    function show(data){
        var xValues=[];
        var yValues=[];
        for(let month in data){
            xValues.push(month);
            yValues.push(data[month]);
        }
        var barColors = [
          "#b91d47",
          "#00aba9",
          "#2b5797",
          "#e8c3b9",
          "#1e7145"
        ];

        new Chart("myIncomePie", {
          type: "pie",
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues
            }]
          },
          options: {
            title: {
              display: true,
              text: "Income Dashboard"
            }
          }
        });
    }
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