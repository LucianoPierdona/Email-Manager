const express = require('express');
const email_model = require('./email_model')

const main = async () => {
  const app = express();
  const port = 4000;

  app.use(express.json());

  app.get("/", async (req, res) => {

    await email_model.getEmails().then(response => {
      res.status(200).send(response);
    }).catch(error => {
      res.status(500).send(error);
    });
    res.status(200).send("Hello World");
  });

  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
}

main().catch(err => {
  console.log(err);
})