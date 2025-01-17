import Axios from "axios";

// Set the base URL
const api = Axios.create({
  baseURL: "http://192.168.10.53:4000",
});

export default api;

// Table Columns
//   "id",
//   "name",
//   "subject",
//   "message",
//   "phone",
//   "email_from",
//   "email_to",
//   "cpf",
//   "uf",
//   "city",
//   "neighborhood",
//   "profile",
//   "company",
//   "expected_date",
//   "estimated_people",
//   "product_type",
//   "production_type",
//   "lot",
//   "validity",
//   "interest_area",
//   "curriculum_url",
