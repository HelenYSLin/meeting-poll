// Replace with your Vercel API URL
const apiURL = "https://your-vercel-app.vercel.app/api/vote";

document.getElementById('pollForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Get the selected time
    const selectedTime = document.querySelector('input[name="time"]:checked').value;

    // Send the vote to the server
    const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ time: selectedTime }),
    });

    if (response.ok) {
        alert('Vote submitted successfully!');
        loadResults();
    } else {
        alert('Failed to submit vote.');
    }
});

// Fetch and display the current poll results
async function loadResults() {
    const response = await fetch(apiURL);
    const results = await response.json();

    const resultList = document.getElementById('resultList');
    resultList.innerHTML = '';

    for (const [time, count] of Object.entries(results)) {
        const li = document.createElement('li');
        li.textContent = `${time}: ${count} votes`;
        resultList.appendChild(li);
    }
}

// Load results when the page loads
window.onload = loadResults;
