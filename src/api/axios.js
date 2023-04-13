import axios from "axios";

const instance = axios.create({
    baseURL: "localhost:8090/api"

});

export default instance;