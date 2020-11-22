import axios from "axios";

const getAll = async () => {
  const request = await axios.get("/memes");
  return request.data;
};

const getSingle = async (id) => {
  const request = await axios.get(`/memes/${id}`);
  return request.data;
};

export default { getAll, getSingle };
