const users = [
    { firstName: "Sultan", lastname: "Ashraf", age: 28 },
    { firstName: "Sabreen", lastname: "Parween", age: 26 },
    { firstName: "Sultan", lastname: "Bin-Yamin", age: 3 },
    { firstName: "Zumaira", lastname: "Sultan", age: 1 },
]

// console.log(users);

const fullname = users.map(user => user.firstName + " " + user.lastname);
console.log("Map Output:-" + fullname);


const filterOutput = users.filter(user => user.age < 28)
    .map(user => user.firstName);

console.log("Filter Output:-", filterOutput);

const output1 = users.reduce((acc, curr) => {
    if (curr.age < 27) {
        //acc = curr.firstName;
        acc.push(curr.firstName);
    }
    return acc;
}, []);

console.log("Reduce:--", output1);

// acc = {28:1, 26:1, 3:1, 1:1}

const output = users.reduce((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {})

console.log(output);