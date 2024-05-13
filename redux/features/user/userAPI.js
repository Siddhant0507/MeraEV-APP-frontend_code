import axios from "axios";
import Config from "../../../src/config/config";
const BASE_URL = Config.baseUrl
export const getUserDetails = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/user/profile`);
        console.log("-=-==", response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error; // Rethrow the error to handle it in the calling function
    }

}