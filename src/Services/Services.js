import axios from "axios";

axios.defaults.baseURL = 'https://dummyjson.com/products';

const getCategories = () => {
    return axios.get("/categories")
}






export const services={
    getCategories,
}