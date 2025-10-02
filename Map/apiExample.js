const users = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
}

let usersData = [];
users().then(data => {
    usersData = data;
    console.log(usersData);
    const output = usersData.map(user => user.name + " " + user.email);
    console.log(output);
});



