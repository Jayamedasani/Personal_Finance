function getDetails(){
    let incomeBox=document.getElementById("incomeamount");
    let expenditureBox=document.getElementById("expenditureamount");
    let balanceBox=document.getElementById("balanceamount");
    const url = "http://localhost:8080/Personal_Finance/savings";
        async function getapi(url) {
            const response = await fetch(url);
            var data = await response.json();
            incomeBox.innerHTML=data[1];
            expenditureBox.innerHTML=data[2];
            balanceBox.innerHTML=data[3];
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
    /*Email.send({
            Host: "smtp.gmail.com",
            Username: "lakshjaya21@gmail.com",
            Password: "Jaya_0803",
            To: '18j41a0596@mrec.ac.in',
            From: "lakshjaya21@gmail.com",
            Subject: "Sending Email using javascript",
            Body: "Well that was easy!!",
          })
            .then(function (message) {
              alert("mail sent successfully")
            });*/
