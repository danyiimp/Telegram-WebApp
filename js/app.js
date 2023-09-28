const tg = window.Telegram.WebApp;
tg.expand();

//AJAX Requests
const backendUrl = "http://localhost:8000"
const sendStandard = document.getElementById("standard");
const sendBanquet = document.getElementById("banquet");
const sendCinema = document.getElementById("cinema");
const sendConference = document.getElementById("conference");
const sendParty = document.getElementById("party");
const sendBuffet = document.getElementById("buffet")

function requestOptions(dataToSend) {
    return {
        method: 'POST', // Метод запроса
        headers: {
            'Content-Type': 'application/json' // Заголовок для указания типа данных
        },
        body: JSON.stringify(dataToSend) // Преобразуйте данные в JSON и установите их в теле запроса
    }
};

function fetchData(dataToSend) {
    fetch(backendUrl, requestOptions(dataToSend))
        .then(res => console.log(res))
        .catch(error => console.error(error));
};

sendStandard.addEventListener('click', () => {
    if (!tg.initDataUnsafe.query_id) {
        alert('WebViewQueryId not defined');
        return;
    }
    queryId = tg.initDataUnsafe.query_id
    data = {queryId: queryId, scenario: "standard"}
    fetchData(data);
});

sendBanquet.addEventListener('click', () => {
    if (!tg.initDataUnsafe.query_id) {
        alert('WebViewQueryId not defined');
        return;
    }
    queryId = tg.initDataUnsafe.query_id
    data = {queryId: queryId, scenario: "banquet"};
    fetchData(data);
});

sendCinema.addEventListener('click', () => {
    if (!tg.initDataUnsafe.query_id) {
        alert('WebViewQueryId not defined');
        return;
    }
    queryId = tg.initDataUnsafe.query_id
    data = {queryId: queryId, scenario: "cinema"};
    fetchData(data);
});

sendConference.addEventListener('click', () => {
    if (!tg.initDataUnsafe.query_id) {
        alert('WebViewQueryId not defined');
        return;
    }
    queryId = tg.initDataUnsafe.query_id
    data = {queryId: queryId, scenario: "conference"};
    fetchData(data);
});

sendParty.addEventListener('click', () => {
    if (!tg.initDataUnsafe.query_id) {
        alert('WebViewQueryId not defined');
        return;
    }
    queryId = tg.initDataUnsafe.query_id
    data = {queryId: queryId, scenario: "party"};
    fetchData(data);
});

sendBuffet.addEventListener('click', () => {
    if (!tg.initDataUnsafe.query_id) {
        alert('WebViewQueryId not defined');
        return;
    }
    queryId = tg.initDataUnsafe.query_id
    data = {queryId: queryId, scenario: "buffet"};
    fetchData(data);
});
