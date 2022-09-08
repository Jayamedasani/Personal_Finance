function getExpenditure(){
    const url="http://localhost:8080/Personal_Finance/expenditures";
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
                    let content = `
                                  <tr  scope="row" >
                                  <td > ${i+1}   </td>
                                  <td > ${data[i]['name']}   </td>
                                  <td > ${data[i]['category']}   </td>
                                  <td > ${data[i]['amount']}   </td>
                                  <td > ${data[i]['processedDate']}   </td>
                                  <td > ${data[i]['processedTime']}   </td>
                                  <td > <span class="bi bi-pencil" aria-hidden="true" onclick="updateExpenditure(${data[i]})"></span> </td>
                                  <td>
                                  <span class="bi bi-trash-fill" aria-hidden="true" onclick="deleteExpediture(${data[i]})"></span>
                                  </td>
                                  </tr>

                    `
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
            span.className = 'bi bi-arrow-up-right-circle-fill';
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
            h6.innerHTML = data[i]['processedDate'];
            divExpenditure.appendChild(h6);
            h6 = document.createElement("h6");
            h6.innerHTML = data[i]['processedTime'];
            divExpenditure.appendChild(h6);

        }*/
        
    }
    
}
function addExpenditure() {
    document.getElementById('formmain').style.display = 'block';
}
function submitExpenditure() {
debugger;
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
    fetch("http://localhost:8080/Personal_Finance/expenditures", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
 }
 /*function deleteExpenditure(data){
    console.log(data);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "name": ${data['name']},
      "category": ${data['category']},
      "amount": ${data['amount']},
      "processedDate": ${data['processedDate']},
      "processedTime": ${data['processedTime']}
    });

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/Personal_Finance/expenditures", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
 }
*/
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