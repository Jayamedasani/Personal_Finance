const hostname="localhost";
const warname="Personal_Finance";
function getIncome(){
    const url = `http://${hostname}:8080/${warname}/incomes`;
    async function getapi(url) {
        const response = await fetch(url);
        var data = await response.json();
        console.log(data);
        show(data);
    }
    getapi(url);
    function show(data) {
        const tdBody = document.getElementById('tableDataContainer');
        for(let i=0;i<data.length;i++){

                          console.log(data[i]);
                          let currentValue = data[i]['id'];
            let content = `
                          <tr  scope="row" >
                          <td > <span>#</span>${i+1}   </td>
                          <td > ${data[i]['name']}   </td>
                          <td > ${data[i]['category']}   </td>
                          <td > <i class="fa fa-rupee"></i>${data[i]['amount']}   </td>
                          <td > ${data[i]['processedDate']}   </td>
                          <td > ${data[i]['processedTime']}   </td>
                          <td > <span class="bi bi-pencil" aria-hidden="true" onclick="updateIncome(${data[i]})"></span> </td>
                          <td>
                          <span class="bi bi-trash-fill" aria-hidden="true" onclick="deleteIncome(${currentValue})"></span>
                          </td>
                          </tr>

            `
                tdBody.innerHTML += content;
                }
                var x=document.getElementById("incomeCategory");
                const incomeurl = `http://${hostname}:8080/${warname}/incomecategories`;
                async function getselect(url) {
                        const response = await fetch(url);
                        var data = await response.json();
                        console.log(data);
                        var option=document.createElement("option");
                        for(let i=0;i<data.length;i++){
                            option=document.createElement("option");
                            option.innerHTML=data[i]['name'];
                            x.appendChild(option);
                        }

                 }
                getselect(incomeurl);

    }

}
function addIncome() {
    document.getElementById('formmain').style.display = 'block';
    document.getElementById('datamain').style.display='none';
}
function submitIncome() {
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
    var raw = JSON.stringify({
      "name": document.getElementById("incomeName").value,
      "category": document.getElementById("incomeCategory").value,
      "amount":document.getElementById("incomeAmount").value ,
      "processedDate": currentDate,
      "processedTime": currentTime
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`http://${hostname}:8080/${warname}/incomes`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function deleteIncome(data){
    var raw = "";

    var requestOptions = {
      method: 'DELETE',
      body: raw,
      redirect: 'follow'
    };
    fetch(`http://${hostname}:8080/${warname}/incomes?id=${data}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

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
