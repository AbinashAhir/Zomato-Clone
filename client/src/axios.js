import axios from "axios"

const instance = axios.create({
    baseURL: "/v1"
})

export default instance;