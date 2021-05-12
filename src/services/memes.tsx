import axios from "axios";

const getAll = async (page: number, scraperName: string) => {
  const request = await axios.get(
    `/memes/${scraperName}?page=${page}&limit=10`
  );
  return request.data;
};

const getSingle = async (id: string) => {
  const request = await axios.get(`/memes/${id}`);
  return request.data;
};

export default { getAll, getSingle };
