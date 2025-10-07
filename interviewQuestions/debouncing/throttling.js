const container = document.querySelector('.container');

let count = 0;
function scrollFunction() {
    console.log('API Call....!', count++);
}

function throttle(callBackFunc, delay) {
    let lastCall = 0;
    return function (...args) {
        let now = Date.now();
        if (now - lastCall >= delay) {
            callBackFunc();
            lastCall = now;
        }
    }
}

const betterFunction = throttle(scrollFunction, 2000);

container.addEventListener('scroll', betterFunction);