const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/pronature', (req, res) => {
    console.log('Request Body:', req.body);
});

app.listen(port, () => {
    console.log(`Server is running`);
});