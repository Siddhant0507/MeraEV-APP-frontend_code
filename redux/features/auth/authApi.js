import axios from "axios"
import Config from "../../../src/config/config";
const BASE_URL = Config.baseUrl
export const registerUser = async (name, phone_number, email_id) => {

    const data = {
        name: name,
        email: email_id,
        phoneNumber: phone_number
    }
    try {
        const respo = await axios.post(`${BASE_URL}/api/v1/user/register`, data);
        return respo.data;
    } catch (error) {
        console.error("Error occurred while registering user:", error);
        throw error; // Propagate the error to the caller
    }

}
export const loginUser = async (phonenumber) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/v1/user/login`, {
            phoneNumber: phonenumber
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error; // Rethrow the error to handle it in the calling function
    }

}

