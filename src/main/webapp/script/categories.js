function getCategories() {
    const expenditureurl = "http://localhost:8080/income/expenditurecategories";
    const incomeurl = "http://localhost:8080/income/incomecategories";
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
                console.log(data);
                var incomecategory=document.getElementById("incomecategory");
                var h4=document.createElement("h4");
                for(let i=0;i<data.length;i++){
                    h4=document.createElement("h4");
                    h4.innerHTML=data[i]['name'];
                    incomecategory.appendChild(h4);
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
                console.log(data);
                var incomecategory=document.getElementById("expenditurecategory");
                var h4=document.createElement("h4");
                for(let i=0;i<data.length;i++){
                    h4=document.createElement("h4");
                    h4.innerHTML=data[i]['name'];
                    incomecategory.appendChild(h4);
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
    fetch("http://localhost:8080/income/incomecategories", requestOptions)
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
    fetch("http://localhost:8080/income/expenditurecategories", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}