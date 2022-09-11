function getDependents(){
    const url="http://localhost:8080/Personal_Finance/dependents";
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
                                  <td > ${i+1}   </td>
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
        /*var divExpenditure=document.createElement("div");
        var main=document.getElementById("main");
        var span=document.createElement("span");
        var p=document.createElement("p");
        var h5=document.createElement("h5");
        var h4=document.createElement("h4");
        main.appendChild(divExpenditure);
        
        for (let i = 0; i < data.length; i++) {
            divExpenditure = document.createElement("div");
            main.appendChild(divExpenditure);
            span = document.createElement("span");
            span.className = "bi bi-person-fill";
            divExpenditure.appendChild(span);
            p = document.createElement("p");
            p.innerHTML = data[i]['name'];
            divExpenditure.appendChild(p);
            h5 = document.createElement("h5");
            h5.innerHTML = data[i]['relation'];
            divExpenditure.appendChild(h5);
            h4 = document.createElement("h4");
            h4.innerHTML = data[i]['email'];
            divExpenditure.appendChild(h4);
            h6 = document.createElement("h6");
            h6.innerHTML = data[i]['phnno'];
            divExpenditure.appendChild(h6);
            h6 = document.createElement("h6");
            h6.innerHTML = data[i]['dob'];
            divExpenditure.appendChild(h6);

        }*/
        
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

    fetch("http://localhost:8080/Personal_Finance/dependents", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}
function getMonthlyReport(){
const url = "http://localhost:8080/Personal_Finance/savings";
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
            emailjs.send("service_35nruh8","template_o17xhco",{
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