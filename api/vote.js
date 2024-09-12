export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { date, time } = req.body;
    res.status(200).json({
      message: 'Vote received successfully',
      vote: { date, time },
    });
  } else {
    res.status(200).json({ message: 'Please send a POST request to vote' });
  }
}
