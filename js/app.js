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

function sendScenario(scenario) {
    if (!tg.initDataUnsafe.query_id) {
        alert('WebViewQueryId not defined');
        return;
    }
    queryId = tg.initDataUnsafe.query_id
    data = {queryId: queryId, scenario: scenario};
    fetchData(data);
}

sendStandard.addEventListener('click', sendScenario("standard"))
sendStandard.addEventListener('touchstart', sendScenario("standard"))

sendBanquet.addEventListener('click', sendScenario("banquet"))
sendBanquet.addEventListener('touchstart', sendScenario("banquet"))

sendCinema.addEventListener('click', sendScenario("cinema"))
sendCinema.addEventListener('touchstart', sendScenario("cinema"))

sendConference.addEventListener('click', sendScenario("conference"))
sendConference.addEventListener('touchstart', sendScenario("conference"))

sendParty.addEventListener('click', sendScenario("party"))
sendParty.addEventListener('touchstart', sendScenario("party"))

sendBuffet.addEventListener('click', sendScenario("buffet"))
sendBuffet.addEventListener('touchstart', sendScenario("buffet"))
