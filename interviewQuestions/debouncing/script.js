let count = 0;
function fetchData(event) {
    console.log("Fetching Data....", count++);
}

function debounce(callBack, delay) {
    let timerId;
    return function(...args){
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            callBack();
        }, delay);
    }
}

betterFunction = debounce(fetchData, 1000);

