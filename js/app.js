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
}

sendStandard.addEventListener('click', () => {
    // if (!tg.initDataUnsafe.query_id) {
    //     alert('WebViewQueryId not defined');
    //     return;
    // }
    // queryId = tg.initDataUnsafe.query_id
    // data = {queryId: "queryId", scenario: "standard"};
    data = {scenario: "standard"}
    fetchData(data);
    //tg.close();
});

sendBanquet.addEventListener('click', () => {
    data = {scenario: "banquet"};
    fetchData(data);
    tg.close();
});

sendCinema.addEventListener('click', () => {
    data = {scenario: "cinema"};
    fetchData(data);
    tg.close();
});

sendConference.addEventListener('click', () => {
    data = {scenario: "conference"};
    fetchData(data);
    tg.close();
});

sendParty.addEventListener('click', () => {
    data = {scenario: "party"};
    fetchData(data);
    tg.close();
});

sendBuffet.addEventListener('click', () => {
    data = {scenario: "buffet"};
    fetchData(data);
    tg.close();
});
