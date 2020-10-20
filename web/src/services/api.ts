import Axios from "axios";

const api = Axios.create({
  baseURL: "http://localhost:4000",
});

export default api;

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
