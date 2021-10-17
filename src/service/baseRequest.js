import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjE0YWQwYzVmZWZjYTI1ZTMxYWZkMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDE3MTE5OSwiZXhwIjoxNjM0NDMwMzk5fQ.5XexmWPpAnaYO3vQ2_xqhQtn3ecZRPqAUsJYKJ4EHcI";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
