const URL = "https://jsonplaceholder.typicode.com/todos/1";

const todo = fetch(URL);

console.log(todo);

todo.then((data) => {
    console.log(data);
})