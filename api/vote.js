// server.js (Node.js with Express)

const express = require('express');
const app = express();
app.use(express.json());

const votes = {}; // Store votes as an object with time slots as keys

app.post('/api/vote', (req, res) => {
    const { times } = req.body;
    times.forEach(time => {
        if (!votes[time]) {
            votes[time] = 0;
        }
        votes[time]++;
    });
    res.json({ success: true });
});

app.get('/api/results', (req, res) => {
    // Convert votes object to an array and sort by count
    const results = Object.entries(votes)
        .map(([time, count]) => ({ time, count }))
        .sort((a, b) => b.count - a.count);
    res.json({ results });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
