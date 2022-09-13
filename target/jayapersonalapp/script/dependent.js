const hostname="localhost";
const warname="Personal_Finance";
function getDependents(){
    const url=`http://${hostname}:8080/${warname}/dependents`;
    async function getapi(url) {
        const response = await fetch(url);
        var data = await response.json();
        console.log(data);
        show(data);
    }
    getapi(url);
    function show(data){
        const tdBody = document.getElementById('tableDependentData');
                for(let i=0;i<data.length;i++){
                    let content = `
                                  <tr  scope="row" >
                                  <td > <span>#</span>${i+1}   </td>
                                  <td > ${data[i]['name']}   </td>
                                  <td > ${data[i]['relation']}   </td>
                                  <td > ${data[i]['email']}   </td>
                                  <td > ${data[i]['dob']}   </td>
                                  <td > ${data[i]['phnno']}   </td>
                                  <td > <span class="bi bi-pencil" aria-hidden="true" onclick="updateIncome(${data[i]})"></span> </td>
                                  <td>
                                  <span class="bi bi-trash-fill" aria-hidden="true" onclick="deleteIncome(${data[i]})"></span>
                                  </td>
                                  </tr>`
                                  console.log(content);
                        tdBody.innerHTML += content;
                }

    }
    
}
function addDependent() {
    document.getElementById('formmain').style.display = 'block';
    document.getElementById("main").style.display='none';
}
function submitDependent() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "name": document.getElementById("dependentName").value,
      "relation":document.getElementById("dependentRelation").value,
      "phnno": document.getElementById("dependentphn").value,
      "email": document.getElementById("dependentEmail").value,
      "dob": document.getElementById("dependentDOB").value
    });
console.log(raw);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`http://${hostname}:8080/${warname}/dependents`, requestOptions)
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