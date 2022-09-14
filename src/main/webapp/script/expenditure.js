const hostname="3.19.32.109";
const warname="jayapersonalfinance";
/*const hostname="localhost";
const warname="Personal_Finance";*/
function getExpenditure(){
    const url=`http://${hostname}:8080/${warname}/expenditures`;
    console.log(url);
    async function getapi(url) {
        const response = await fetch(url);
        var data = await response.json();
        console.log(data);
        show(data);
    }
    getapi(url);
    function show(data){
        const tdBody = document.getElementById('tableExpenditureDataContainer');
                for(let i=0;i<data.length;i++){
                let currentValue=data[i]['id'];

                    let content = `
                                  <tr  scope="row" >
                                  <td > <span>#</span>${i+1}   </td>
                                  <td > ${data[i]['name']}   </td>
                                  <td > ${data[i]['category']}   </td>
                                  <td > <i class="fa fa-rupee"></i>${data[i]['amount']}   </td>
                                  <td > ${data[i]['processedDate']}   </td>
                                  <td > ${data[i]['processedTime']}   </td>

                                  <td>
                                  <span class="bi bi-trash-fill" aria-hidden="true" onclick="deleteExpenditure(${currentValue})"></span>
                                  </td>
                                  </tr>

                    `
                        tdBody.innerHTML += content;
                }
                var x=document.getElementById("expenditureCategory");
                                    const expenditureurl = `http://${hostname}:8080/${warname}/expenditurecategories`;
                                    async function getselect(url) {
                                            const response = await fetch(url);
                                            var data = await response.json();
                                            console.log(data);
                                            var option=document.createElement("option");
                                            for(let i=0;i<data.length;i++){
                                            console.log("loop");
                                                option=document.createElement("option");
                                                option.innerHTML=data[i]['name'];
                                                x.appendChild(option);
                                            }

                                     }
                                    getselect(expenditureurl);
    }
}
function addExpenditure() {
    document.getElementById('formmain').style.display = 'block';
    document.getElementById('datamain').style.display = 'none';
}
function submitExpenditure() {

console.log("called");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var today = new Date();
                var month=(today.getMonth()+1)<10? '0'+(today.getMonth()+1):(today.getMonth()+1);
                var date=today.getDate()<10?'0'+today.getDate():today.getDate();
                var currentDate = today.getFullYear()+'-'+month+'-'+date;
                var hour=today.getHours()<10?'0'+today.getHours():today.getHours();
                var min=today.getMinutes()<10?'0'+today.getMinutes():today.getMinutes();
                var sec=today.getSeconds()<10?'0'+today.getSeconds():today.getSeconds();
                var currentTime = hour + ":" + min + ":" + sec;
        var name= document.getElementById("expenditureName").value;
        var category = document.getElementById("expenditureCategory").value;
        var amount = document.getElementById("expenditureAmount").value;

        var raw =JSON.stringify ({
            "name": name,
            "category":category,
            "amount": amount,
            "processedDate": currentDate,
            "processedTime": currentTime
        });
        console.log(raw);
    /*var raw = JSON.stringify({
      "name": "new",
      "category": "food",
      "amount": 600,
      "processedDate": "2032-10-05",
      "processedTime": "10:53:49"
    });*/

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
//debugger;

    fetch(`http://${hostname}:8080/${warname}/expenditures`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      var res=1;
      if(res==1){
        getToast();
      }
 }
 function deleteExpenditure(data){
    console.log(data);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = "";

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`http://${hostname}:8080/${warname}/expenditures?id=${data}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      let res=1;
            if(res==1){
             getToast();
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