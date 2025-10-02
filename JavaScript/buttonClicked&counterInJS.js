function attachEventListeners() {
    let count = 0;
    document.getElementById("btn1").addEventListener("click", function inc() {
        //console.log("Button Inc Clicked: ", ++count);
        ++count;
        document.getElementById("val").textContent = count;
    });

    document.getElementById("btn2").addEventListener("click", function dec() {
        --count;
        //console.log("Button Dec Clicked: ", --count);
        document.getElementById("val").textContent = count;
    });
}

attachEventListeners();