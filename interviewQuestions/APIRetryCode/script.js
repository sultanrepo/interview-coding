async function fetchWithRetry(url, retries, delay) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            if (attempt === retries) {
                throw error;
            }
            console.log(`Attempt ${attempt} failed. Retrying in ${delay}ms...`);
            await new Promise(res => setTimeout(res, delay));// This line of code will peuse the code for the specific delay mili seconds which we have provide.
            delay *= 2;
        }
    }
}

fetchWithRetry("https://jsonplaceholder.typicode.com/postss", 6, 1000)
    .then(data => console.log("Success:", data))
    .catch(err => console.error("Failed after retries", err));