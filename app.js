const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

// Serve static files from the "public" folder for index.html 
app.use(express.static(path.join(__dirname, 'public')));

// Serve static files from the "public" folder for about.html
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Optional: fallback for undefined routes (404 page)
app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1>');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});