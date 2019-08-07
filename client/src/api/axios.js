import axios from "axios";

const token = localStorage.getItem("token");
let headers;

if (token) {
  headers = { Authorization: `Bearer ${token}` };
}

const url = "http://localhost:4000";
export default axios.create({
  baseURL: url,
  headers: headers
});
