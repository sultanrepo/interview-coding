//Debouncing
let count = 0;
function fetchData() {
    console.log("Data Fetching....", count++);
}

function debounce(callBack, delay) {
    let timerID;
    return function(...args) {
        if(timerID){
            clearTimeout(timerID);
        }
        timerID = setTimeout(() => {
            callBack();
        }, delay)
    }
}

betterFunction = debounce(fetchData, 500);

//Throttling
let count_ = 0;
function fetchUser() {
    console.log("Fetching User...", count_++);
}

function throttling(callBack, delay) {
    return function(...args) {
        setInterval(() => {
            callBack();
        }, delay)
    }
}

throttlingFunction = throttling(fetchUser, 1000);