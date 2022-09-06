function getInvestment(){
    const url="http://localhost:8080/income/investments";
    async function getapi(url) {
        const response = await fetch(url);
        var data = await response.json();
        console.log(data);
        show(data);
    }
    getapi(url);
    function show(data){
        var divExpenditure=document.createElement("div");
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

        }
        
    }
    
}
function addInvestment() {
    document.getElementById('formmain').style.display = 'block';
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

    fetch("http://localhost:8080/income/investments", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}
