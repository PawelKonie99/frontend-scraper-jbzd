import axios from "axios";

const getAll = async (page) => {
  const request = await axios.get(`/memes?page=${page}&limit=5`);
  return request.data;
};

const getSingle = async (id) => {
  const request = await axios.get(`/memes/${id}`);
  return request.data;
};

export default { getAll, getSingle };
