const hostname="3.19.32.109";
const warname="jayapersonalfinanceapp";
window.onload=function(){
getDashboard();
}
function getDashboard(){
getExpenditureDashboard();
getIncomeDashboard();
function getExpenditureDashboard(){

    const url=`http://${hostname}:8080/${warname}/dashboards?month=09&year=2022&name=expenditure`;

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
async function getIncomeDashboard(){

    const url=`http://${hostname}:8080/${warname}/dashboards?month=09&year=2022&name=income`;
        async function getapi(url) {
                    const response = await fetch(url);
                    var data = await response.json();
                    console.log(data);
                    show(data);
                }
        getapi(url);
    function show(data){
    console.log("called");
        var xValues=[];
        var yValues=[];
        for(let month in data){
            xValues.push(month);
            yValues.push(data[month]);
        }
        console.log(yValues);
        console.log(xValues);
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