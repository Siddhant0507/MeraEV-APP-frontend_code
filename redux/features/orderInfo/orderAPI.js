import axios from "axios"
import Config from "../../../src/config/config";
const BASE_URL = Config.baseUrl

export const createOrder = async (serviceType, bikename, dateOfService, cost) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/v1/order/create`, {
            serviceType,
            bikename,
            dateOfService,
            cost
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error; // Rethrow the error to handle it in the calling function
    }

}
export const myOrder = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/order/my-orders`)
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error; // Rethrow the error to handle it in the calling function
    }

}

export const allOrder = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/order/all-orders`)
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error; // Rethrow the error to handle it in the calling function
    }
}

