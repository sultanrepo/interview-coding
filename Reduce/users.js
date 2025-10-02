const users = [
    { firstName: "Sultan", lastname: "Ashraf", age: 28 },
    { firstName: "Sabreen", lastname: "Parween", age: 26 },
    { firstName: "Sultan", lastname: "Bin-Yamin", age: 3 },
    { firstName: "Zumaira", lastname: "Sultan", age: 1 },
]

// ["Sabreen","Sultan","Zumaira"]

const output1 = users.reduce((acc, curr) => {
    if (curr.age < 27) {
        //acc = curr.firstName;
        acc.push(curr.firstName);
    }
    return acc;
}, []);