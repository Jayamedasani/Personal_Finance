const hostname="3.19.32.109";
const warname="jayapersonalfinance";
/*const hostname="localhost";
const warname="Personal_Finance";*/
function getInsight(){
var today = new Date();
var currentYear=today.getFullYear();
console.log( currentYear);
const url=`http://${hostname}:8080/${warname}/savings?year=${currentYear}`;
console.log(url);
    async function getapi(url) {
        const response = await fetch(url);
        var data = await response.json();
        console.log(data);
        show(data);
    }
    getapi(url);
}
   function show(data){
   var yValues=[];
    var yValue=[];
    for(let i=1;i<=12;i++){
        yValue.push(data[i]);
    }
    for(let value of yValue){
        if(value<0){
            yValues.push(0);
        }
        else{
            yValues.push(value);
        }
    }
    var monthlyAmount=getMonthSavingValue();
    var yValuesfixed=[];
    for(let i=0;i<12;i++){
        yValuesfixed.push(monthlyAmount);
    }
    var xValues = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "oct", "Nov", "Dec"];

    new Chart("myChartInsights", {
      type: "line",
      title:{
      		text: "Current Year Savings ReachOut"
      	},
      data: {
        labels: xValues,
        datasets: [{
          data: yValues,
          borderColor: "red",
          fill: false
        }, {
          data: yValuesfixed,
          borderColor: "green",
          fill: false
        }]
      },
      options: {
        legend: {display: false}
      }
    });
}

function getMonthSavingValue(){
console.log("called");
var currentYear=document.getElementById('retiredYear').value;
if(currentYear == ''){
var balanceYear=2030-2022;
var amount=1000000;
var monthlyAmount=amount/(balanceYear*12);
return monthlyAmount;
}
console.log(currentYear);
var balanceYear=currentYear-2022;
console.log(balanceYear);
var amount=document.getElementById("retirementAmount").value;
var monthlyAmount=amount/(balanceYear*12);
console.log(monthlyAmount);
return monthlyAmount;
}
function getMonthlyReport(){
const url = `http://${hostname}:8080/${warname}/savings`;
var message;
        async function getapi(url) {
            const response = await fetch(url);
            var data = await response.json();
            var data1=data[1];
            var data2=data[2];
            var data3=data[3];
            message="Current Month Income: ";
            message+= data1 ;
            message+=" Current Month Expenditure: ";
            message+= data2 ;
            message+=" Current Month Balance: ";
            message+= data3 ;
            console.log(message);
            emailjs.send("service_35nruh8","template_fpfaqxe",{
                            message: message });
                getToast();
        }
        getapi(url);
}
function getReport(){
    var Val = confirm("Get Monthly Report To EMail?");
                    if( Val == true ){
                        getMonthlyReport();
                    }
}
function getToast() {
  var toastElList = [].slice.call(document.querySelectorAll('.toast'))
  var toastList = toastElList.map(function(toastEl) {
    return new bootstrap.Toast(toastEl)
  })
  toastList.forEach(toast => toast.show())
}
