const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/api/insurance-query', (req, res) => {
    const userQuery = req.body.query;
    const response = `You asked about ${userQuery}. We'll provide personalized insurance guidance soon!`;
    res.json({ response });
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
