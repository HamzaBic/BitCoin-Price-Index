var refreshBtn = document.querySelector('#refresh-btn');
var timeDisplay = document.querySelector('#time');
var eurIndex = document.querySelector('#eur');
var usdIndex = document.querySelector('#usd');
var gbpIndex = document.querySelector('#gbp');


function getIndex() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            var time = data.time;
            
            timeDisplay.innerHTML = time.updateduk;
            eurIndex.innerHTML = data.bpi.EUR.rate;
            usdIndex.innerHTML = data.bpi.USD.rate;
            gbpIndex.innerHTML = data.bpi.GBP.rate;
        }
    };

    xhr.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    xhr.send();
}

refreshBtn.addEventListener("click", getIndex);
