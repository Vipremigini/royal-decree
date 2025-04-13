export default function handler(req, res) {
  if (req.method === 'GET') {
    // Handle WebSocket connections here
    res.status(200).json({ message: 'WebSocket connected' });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
