function getInsight(){
var xValues = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "oct", "Nov", "Dec"];
var currentYear;
if((document.getElementById("retiredYear").value)!=null){
 currentYear=document.getElementById("retiredYear").value;
}
else {
var today = new Date();
currentYear=today.getFullYear();
}
console.log(currentYear);
var yValues=[];

console.log(getValue(currentYear));
new Chart("myChartInsights", {
  type: "line",
  title:{
  		text: "Current Year Savings ReachOut"
  	},
  data: {
    labels: xValues,
    datasets: [{

      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false
    }, {
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "green",
      fill: false
    }, {
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});
function getValue(year){
var currentYear=year;
const url=`http://localhost:8080/Personal_Finance/savings?year=${currentYear}`;
console.log(url);
    async function getapi(url) {
        const response = await fetch(url);
        var data = await response.json();
        console.log(data);
        show(data);
    }
    getapi(url);
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
    console.log(yValue);
    return yValues;
}
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
