import axios from "axios";

const instance = axios.create({
    //baseURL: 'http://localhost:5001/ecommerce-site-3c042/us-central1/api' //API (cloud function) URL
    baseURL: 'https://us-central1-ecommerce-site-3c042.cloudfunctions.net/api'
})

export default instance;