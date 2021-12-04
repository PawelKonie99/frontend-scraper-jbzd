import axios from "axios";
const adminUrl = "/api/admin";

const getAllUsers = async (username: string) => {
    const request = await axios.post(adminUrl, { username });
    return request.data;
};

export default getAllUsers;
