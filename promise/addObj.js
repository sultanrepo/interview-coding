const data = [
    { name: 'Sultan', Prof: 'Software Engineer' },
    { name: 'Ashraf', prof: 'Prompt Engineer' },
];

function getData() {
    setTimeout(() => {
        let output = '';
        data.forEach((data, index) => {
            output += `<li>${data.name}</li>`;
            console.log(data, index);
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createData(newData, callBack) {
    setTimeout(() => {
        data.push(newData);
        callBack();
    }, 2000);
}

// getData();
createData({ name: 'Sabreen', Prof: 'Tester' }, getData);
