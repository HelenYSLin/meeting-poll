// api/vote.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Extract date and time from the request body
        const { date, time } = req.body;

        // Check if both date and time are provided
        if (date && time) {
            // Here you would normally save the vote to a database or process it
            // For this example, we're just returning a success message
            return res.status(200).json({ message: 'Vote received', date, time });
        } else {
            return res.status(400).json({ error: 'Date and time are required' });
        }
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
