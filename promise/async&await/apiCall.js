const URL = 'https://api.github.com/users/sultanashraf';

async function handlePromise() {
  try {
    const response = await fetch(URL);
    const result = await response.json();
    console.log(result.login);
  } catch (err) {
    console.log(err);
  }
}

handlePromise();
