import axios from "axios";
const addMemeUrl = "/memes/add";

const addMemeToDb = async (memeObject: any, config: any) => {
    const request = await axios.post(addMemeUrl, memeObject, config);
    return request.data;
};

export default { addMemeToDb };
