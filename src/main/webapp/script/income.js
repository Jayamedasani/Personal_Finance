function getIncome() {
    const url = "http://localhost:8080/income/incomes";
    async function getapi(url) {
        const response = await fetch(url);
        var data = await response.json();
        console.log(data);
        show(data);
    }
    getapi(url);
    function show(data) {
        var divExpenditure = document.createElement("div");
        var main = document.getElementById("main");
        var span = document.createElement("span");
        var p = document.createElement("p");
        var h5 = document.createElement("h5");
        var h4 = document.createElement("h4");
        main.appendChild(divExpenditure);

        for (let i = 0; i < data.length; i++) {
            divExpenditure = document.createElement("div");
            main.appendChild(divExpenditure);
            span = document.createElement("span");
            span.className = 'bi bi-arrow-down-right-circle-fill';
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

        }

    }

}
function addIncome() {
    document.getElementById('formmain').style.display = 'block';
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

    fetch("http://localhost:8080/income/incomes", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}
