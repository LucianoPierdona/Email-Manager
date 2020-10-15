const express = require('express');
const email_model = require('./email_model')
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  await email_model.getEmails().then(response => {
    res.status(200).send(response);
  }).catch(error => {
    res.status(500).send(error);
  });
  res.status(200);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});