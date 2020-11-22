import axios from "axios";

const getAll = async () => {
  const request = await axios.get("/memes");
  console.log(request);
  return request.data;
};

export default { getAll };
