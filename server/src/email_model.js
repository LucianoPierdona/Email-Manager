

require('dotenv').config();
const Pool = require("pg").Pool;

// Connection with the database
const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

// Get a single email
const getEmail = async (request) => {
  return await new Promise(function (resolve, reject) {
    const id = parseInt(request);
    pool.query(`SELECT * from emails where id = ${id}`, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res.rows);
    })
  });
}

// Get all the emails
const getEmails = async () => {
  return await new Promise(function (resolve, reject) {
    pool.query("SELECT * from emails order by id desc", (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res.rows);
    })
  });
};

getEmails().catch(err => {
  console.log(err);
});

module.exports = {
  getEmail,
  getEmails,
};


// Create the tables in the database
// CREATE TABLE emails(id SERIAL PRIMARY KEY, name VARCHAR(120), phone VARCHAR(20), subject VARCHAR(90), message VARCHAR(10000), email_from VARCHAR(50), email_to VARCHAR(50), cpf VARCHAR(40), uf VARCHAR(50), city VARCHAR(90), neighborhood VARCHAR(120), profile VARCHAR(90), company VARCHAR(200), expected_date VARCHAR(40), estimated_people VARCHAR(30), product_type VARCHAR(90), production_type VARCHAR(120), lot VARCHAR(90), validity VARCHAR(30), interest_area VARCHAR(120), curriculum_url VARCHAR(120));
// insert into emails (name, phone, subject, message, email_from, email_to, cpf, uf, city, neighborhood, profile, company, expected_date, estimated_people, product_type, production_type, lot, validity, interest_area, curriculum_url) VALUES ("Luciano", "54 919656054", "email teste", "aeo tudo bom senhor agora", "luciano@nucleosistemas.com.br", "sebastiao@nucleosistemas.com.br", "024.447.000.66", "Santa Catarina", "Videira", "", "Empresario", "Amoras do Cleberton", "", "", "", "", "", "", "carrossel", "https://nordestealimentos.com.br"); 