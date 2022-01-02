import axios from "axios";
const deleteMemeUrl = "/memes/delete";

const deleteMemeFromDb = async (deleteObject: any, config: any) => {
    const request = await axios.post(deleteMemeUrl, { memeId: deleteObject.id, username: deleteObject.username }, config);
    return request.data;
};

export default { deleteMemeFromDb };
