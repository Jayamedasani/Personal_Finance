function getDependents(){
    const url="http://localhost:8080/income/dependents";
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

        }
        
    }
    
}
function addDependent() {
    document.getElementById('formmain').style.display = 'block';
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

    fetch("http://localhost:8080/income/dependents", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}
