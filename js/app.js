const tg = window.Telegram.WebApp;
tg.expand();

document.addEventListener('touchstart', function(e) {
    document.documentElement.style.overflow = 'hidden';
});

document.addEventListener('touchend', function(e) {
    document.documentElement.style.overflow = 'auto';
});

//AJAX Requests
const backendUrl = "http://localhost:8000"
const sendButton = document.getElementById("confirm_button")

function requestOptions(dataToSend) {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
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