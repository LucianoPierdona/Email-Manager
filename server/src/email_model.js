const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "emails",
  password: "123abcABC",
  port: 5432,
});

const getEmails = async () => {
  return await new Promise(function (resolve, reject) {
    pool.query("SELECT * from emails ORDER BY id ASC", (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res.rows);
    })
  });
};

getEmails().catch(err => {
  console.log(err);
})

module.exports = {
  getEmails,
};

// CREATE TABLE emails(id SERIAL PRIMARY KEY, subject VARCHAR(90), message VARCHAR(5000), emailFrom VARCHAR(50), emailTo VARCHAR(50), sendDate VARCHAR(20));