const express = require('express');
const app = express();
const port = 4000;

// Endpoint 1: Text Response
app.get('/textmessage', (req, res) => {
  res.send('This is a response message.');
});

// Endpoint 2: JSON Response
app.get('/json', (req, res) => {
  const jsonData = {message: 'Here we have a JSON data.'};
  res.json(jsonData);
});
// Endpoint for returning HTML content
app.get("/htmlmessage",(req,res) => {
    const htmlContent = `
<html>
<body>
<p>This is HTML content.</p>
</body>
</html>`;
res.send(htmlContent)
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});