const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('P1 Resolved');
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('P2 Resolved');
  }, 5000);
});

async function handlePromise() {
  console.log('Inside Promise Handle.');

  const handle1 = await p1;
  console.log('Namaste JavaScript 1');
  console.log(handle1);

  const handle2 = await p2;
  console.log('Namaste JavaScript 2');
  console.log(handle2);
}

handlePromise();
