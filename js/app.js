const tg = window.Telegram.WebApp;
tg.expand();

//AJAX Requests
const backendUrl = "http://localhost:8000"
const sendButton = document.getElementById("confirm_button")

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
        .then((res) => {
            if (res.ok) {
                tg.close()
            }
        })
        .catch(error => console.error(error));
};


sendButton.addEventListener("click", () => {
    let activeSlide = document.getElementsByClassName("swiper-slide-active")[0];
    if (!tg.initDataUnsafe.query_id) {
                alert('WebViewQueryId not defined');
                return;
            }
            queryId = tg.initDataUnsafe.query_id
            data = {queryId: queryId, scenario: activeSlide.id}
            fetchData(data);
});

// sendStandard.addEventListener('click', () => {
//     if (!tg.initDataUnsafe.query_id) {
//         alert('WebViewQueryId not defined');
//         return;
//     }
//     queryId = tg.initDataUnsafe.query_id
//     data = {queryId: queryId, scenario: "standard"}
//     fetchData(data);
// });

// sendBanquet.addEventListener('click', () => {
//     if (!tg.initDataUnsafe.query_id) {
//         alert('WebViewQueryId not defined');
//         return;
//     }
//     queryId = tg.initDataUnsafe.query_id
//     data = {queryId: queryId, scenario: "banquet"};
//     fetchData(data);
// });

// sendCinema.addEventListener('click', () => {
//     if (!tg.initDataUnsafe.query_id) {
//         alert('WebViewQueryId not defined');
//         return;
//     }
//     queryId = tg.initDataUnsafe.query_id
//     data = {queryId: queryId, scenario: "cinema"};
//     fetchData(data);
// });

// sendConference.addEventListener('click', () => {
//     if (!tg.initDataUnsafe.query_id) {
//         alert('WebViewQueryId not defined');
//         return;
//     }
//     queryId = tg.initDataUnsafe.query_id
//     data = {queryId: queryId, scenario: "conference"};
//     fetchData(data);
// });

// sendParty.addEventListener('click', () => {
//     if (!tg.initDataUnsafe.query_id) {
//         alert('WebViewQueryId not defined');
//         return;
//     }
//     queryId = tg.initDataUnsafe.query_id
//     data = {queryId: queryId, scenario: "party"};
//     fetchData(data);
// });

// sendBuffet.addEventListener('click', () => {
//     if (!tg.initDataUnsafe.query_id) {
//         alert('WebViewQueryId not defined');
//         return;
//     }
//     queryId = tg.initDataUnsafe.query_id
//     data = {queryId: queryId, scenario: "buffet"};
//     fetchData(data);
// });
