const path = require('path');
const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// API endpoint to handle form submissions
app.post('/api/submit', (req, res) => {
    const { userid, message } = req.body;
    const now = new Date();
    
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const timestamp = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    const data = `\n${userid},${timestamp},${message}`;

    const csvFilePath = path.join(__dirname, 'GeneralistRails_Project_MessageData.csv');

    fs.appendFile(csvFilePath, data, (err) => {
        if (err) {
            console.error('Error appending to CSV file:', err);
            res.status(500).json({ error: 'An error occurred while submitting the message.' });
        } else {
            console.log('Message submitted successfully:', data);
            res.status(200).json({ message: 'Message submitted successfully.' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
