const hostname="3.19.32.109";
const warname="jayapersonalfinance";
/*const hostname="localhost";
const warname="Personal_Finance";*/
function getCategories() {
    const expenditureurl = `http://${hostname}:8080/${warname}/expenditurecategories`;
    const incomeurl = `http://${hostname}:8080/${warname}/incomecategories`;
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
                                                                 <td > <span>#</span>${i+1}   </td>
                                                                 <td > ${data[i]['name']}   </td>
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
                                                  <td > <span>#</span>${i+1}   </td>
                                                  <td > ${data[i]['name']}   </td>
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
    document.getElementById('incomecategory').style.opacity='0%';
}
function addExpenditureCategory() {
    document.getElementById('formexpendituremain').style.display = 'block';
     document.getElementById('expenditurecategory').style.opacity='0%';
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
    fetch(`http://${hostname}:8080/${warname}/incomecategories`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      getToast();
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

    fetch(`http://${hostname}:8080/${warname}/expenditurecategories`, requestOptions)
      .then(response => response.text())
      .then(result => document.getElementById("toast").show() )
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