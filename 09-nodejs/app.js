const express = require('express');
const app = express();
const port = process.env.PORT || 5003;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/exercise/welcome.html');
});

app.get('/form', (req, res) => {
  res.sendFile(__dirname + '/exercise/form.html');
});

app.post('/formExerciseSubmit', (req, res) => {
  const { usernameInput: name, emailInput: email } = req.body;

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<p>Thank you for submitting your information: </p>`);
  res.write(`<p>Name: ${name}</p>`);
  res.write(`<p>Email: ${email}</p>`);
  res.end();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
