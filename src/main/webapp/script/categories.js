function getCategories() {
    const expenditureurl = "http://localhost:8080/Personal_Finance/expenditurecategories";
    const incomeurl = "http://localhost:8080/Personal_Finance/incomecategories";
     function getapiIncome(incomeurl) {
        fetch(incomeurl, {
            method: "GET",
            mode: 'no-cors',
        }).then((response) => {
            if (!response.ok) {
                throw new Error(response.error)
            }
            return response.json();
        })
            .then(data => {
               const tdBody = document.getElementById('tableIncomeCategory');
                                               for(let i=0;i<data.length;i++){
                                                   let content = `
                                                                 <tr  scope="row" >
                                                                 <td > ${i+1}   </td>
                                                                 <td > ${data[i]['name']}   </td>
                                                                 <td>
                                                                 <span class="bi bi-trash-fill" aria-hidden="true" onclick="deleteIncomeCategory(${data[i]})"></span>
                                                                 </td>
                                                                 </tr>`
                                                                 console.log(content);
                                                       tdBody.innerHTML += content;
                                               }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    async function getapiExpenditure(expenditureurl) {
        fetch(expenditureurl, {
            method: "GET",
            mode: 'cors',
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.error)
                }
                return response.json();
            })
            .then(data => {
                const tdBody = document.getElementById('tableExpenditureCategory');
                                for(let i=0;i<data.length;i++){
                                    let content = `
                                                  <tr  scope="row" >
                                                  <td > ${i+1}   </td>
                                                  <td > ${data[i]['name']}   </td>
                                                  <td>
                                                  <span class="bi bi-trash-fill" aria-hidden="true" onclick="deleteExpenditureCategory(${data[i]})"></span>
                                                  </td>
                                                  </tr>`
                                                  console.log(content);
                                        tdBody.innerHTML += content;
                                }
            })
            .catch(function (error) {
                console.log(error);
                
            });
    }
    getapiIncome(incomeurl);
    getapiExpenditure(expenditureurl);
}
function addIncomeCategory() {
    document.getElementById('formincomemain').style.display = 'block';
}
function addExpenditureCategory() {
    document.getElementById('formexpendituremain').style.display = 'block';
}
function submitIncomeCategory(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "name": document.getElementById("incomeCategoryName").value
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
debugger;
    fetch("http://localhost:8080/Personal_Finance/incomecategories", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}
function submitExpenditureCategory(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "name": document.getElementById("expenditureCategoryName").value
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
debugger;
    fetch("http://localhost:8080/Personal_Finance/expenditurecategories", requestOptions)
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