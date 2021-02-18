import { IUser } from "../interfaces/UserInterface";
import axios from "axios";
const loginUrl = "/api/login";
const registerUrl = "/api/users";

const login = async (credentials: IUser) => {
  const request = await axios.post(loginUrl, credentials);
  return request.data;
};

const register = async (credentials: IUser) => {
  const request = await axios.post(registerUrl, credentials);
  return request.data;
};

export default { login, register };
