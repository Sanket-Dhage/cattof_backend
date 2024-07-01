const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Example endpoint for activity verification
app.post('/catoff/verify', (req, res) => {
  const { activity } = req.body;

  // Perform verification logic
  if (!activity) {
    return res.status(400).json({ error: 'Activity details are required.' });
  }

  // Example verification logic - replace with your actual verification process
  // Simulating successful verification
  if (activity.includes('success')) {
    return res.status(200).json({ result: 'Activity verified successfully!' });
  } else {
    // Simulating verification failure
    return res.status(500).json({ error: 'Failed to verify activity.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
