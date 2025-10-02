

const p = new Promise((resolve, reject) => {
    resolve("Promise Rsoved Value!!");
})


async function getData() {
    return p;
}

const data = getData();

data.then((res) => console.log(res)); 