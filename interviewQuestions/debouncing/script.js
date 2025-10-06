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