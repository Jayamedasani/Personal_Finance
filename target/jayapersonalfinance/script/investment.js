const hostname="3.19.32.109";
const warname="jayapersonalfinance";
/*const hostname="localhost";
const warname="Personal_Finance";*/
function getInvestment(){
    const url=`http://${hostname}:8080/${warname}/investments`;
    async function getapi(url) {
        const response = await fetch(url);
        var data = await response.json();
        console.log(data);
        show(data);
    }
    getapi(url);
    function show(data){
    const tdBody = document.getElementById('tableInvestmentData');
                    for(let i=0;i<data.length;i++){
                        let content = `
                                      <tr  scope="row" >
                                      <td > <span>#</span>${i+1}   </td>
                                      <td > ${data[i]['name']}   </td>
                                      <td > ${data[i]['category']}   </td>
                                      <td > <i class="fa fa-rupee"></i>${data[i]['amount']}   </td>
                                      <td > ${data[i]['startDate']}   </td>
                                      <td > ${data[i]['year']}   </td>

                                      <td>
                                      <span class="bi bi-trash-fill" aria-hidden="true" onclick="deleteInvestment(${data[i]})"></span>
                                      </td>
                                      </tr>`

                            tdBody.innerHTML += content;
                            }
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
            span.className = 'bi bi-cash-coin';
            divExpenditure.appendChild(span);
            p = document.createElement("p");
            p.innerHTML = data[i]['name'];
            divExpenditure.appendChild(p);
            h5 = document.createElement("h5");
            h5.innerHTML = data[i]['category'];
            divExpenditure.appendChild(h5);
            h4 = document.createElement("h4");
            h4.innerHTML = data[i]['amount'];
            divExpenditure.appendChild(h4);
            h6 = document.createElement("h6");
            h6.innerHTML = data[i]['year'];
            divExpenditure.appendChild(h6);
            h6 = document.createElement("h6");
            h6.innerHTML = data[i]['startDate'];
            divExpenditure.appendChild(h6);

        }*/
        
    }
function addInvestment() {
    document.getElementById('formmain').style.display = 'block';
    document.getElementById('investmentbody').style.display='none';
}
function submitInvestment(){
debugger;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "name": document.getElementById("investmentName").value,
      "category": document.getElementById("investmentCategory").value,
      "startDate": document.getElementById("investmentDate").value,
      "amount": document.getElementById("investmentAmount").value,
      "year": document.getElementById("investmentYear").value
    });
console.log(raw);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`http://${hostname}:8080/${warname}/investments`, requestOptions)
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
