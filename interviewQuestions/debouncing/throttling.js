const container = document.querySelector(".container");
let count = 0;
function handleScroll() {
    console.log("Scrolling....", count++);
}

container.addEventListener("scroll", handleScroll);