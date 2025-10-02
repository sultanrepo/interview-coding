const str = "My name is Sultan Ashraf";

//Reverse String Short Hand
function reverseStringShortHand(str) {
    return str.split("").reverse().join("");
}

//Reverse String Using Loop
function reverseStringLoop(str) {
    let revStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    return revStr;
}

//Reverse only santances
function reverseWord(str) {
    return str.split(" ")
        .map(word => word.split("").reverse()
            .join("")).join(" ");
}

console.log(reverseStringShortHand(str));
console.log(reverseStringLoop(str));
console.log(reverseWord(str));
