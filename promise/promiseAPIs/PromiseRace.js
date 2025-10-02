// const getUser = async () => {
//     try {
//         const userURL = "https://jsonplaceholder.typicode.com/users";
//         const postURL = "https://jsonplaceholder.typicode.com/posts";
//         const commentsURL = "https://jsonplaceholder.typicode.com/comments";

//         // First Promise.all → waits for all network requests to complete.
//         const responses = await Promise.all([
//             fetch(userURL),
//             fetch(postURL),
//             fetch(commentsURL)
//         ]);

//         //Second Promise.all → waits for all the JSON parsing to complete.
//         const result = await Promise.all(responses.map(res => res.json()));
//         const [users, posts, comments] = result;
//         console.log(users);
//         console.log(posts);
//         console.log(comments);
//     } catch (err) {
//         console.log(err);
//     }
// }

// getUser();

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 Sucess")
    }, 3000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve("P2 Success");
        reject("P2 Fail");
    }, 1000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P3 Success");
    }, 2000);
})

Promise.race([p1, p2, p3])
    .then(res => {
        console.log(res)
    })
    .catch((err) => {
        console.error(err);
    })
