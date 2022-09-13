const hostname="localhost";
const warname="Personal_Finance";
async function getSavings() {
var url;
var currentYear=document.getElementById("savingYear").value;
console.log(currentYear);
    if(currentYear != ''){
    console.log("given");
    }
    else{
    var today=new Date();
     currentYear= await today.getFullYear();
     console.log("inside"+currentYear);
    }
    console.log("outside"+currentYear);
url=`http://${hostname}:8080/${warname}/savings?year=${currentYear}`;
    getapi(url);
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

        var barColors = ["#ff6666","#b91d47",
                                     "#00aba9",
                                     "#2b5797",
                                     "#e8c3b9",
                                     "#1e7145","#2b5797","#fcba03","#99ffff","#99ffff","#99ffff","#99ffff"];

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