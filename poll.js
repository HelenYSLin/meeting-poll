// poll.js

document.getElementById('voteForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get all selected time values
    const times = Array.from(document.querySelectorAll('input[name="time"]:checked'))
        .map(checkbox => checkbox.value);

    // Send the selected times to the server
    fetch('/api/vote', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ times }), // Send as JSON
    })
    .then(response => response.json())
    .then(data => {
        alert('Vote submitted successfully!');
        fetchResults(); // Fetch results after submitting
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to submit vote');
    });
});

function fetchResults() {
    fetch('/api/results')
    .then(response => response.json())
    .then(data => {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '<h2>Poll Results:</h2>';
        data.results.forEach(result => {
            resultsDiv.innerHTML += `<p>${result.time}: ${result.count} votes</p>`;
        });
    })
    .catch(error => console.error('Error fetching results:', error));
}
