import { nextAuthOptions } from "@/lib/authOptions";
import axios from "axios";
import { getServerSession } from "next-auth";

const Axios = axios.create({
    baseURL: process.env.API_AUTH_URL,
    headers: {
        "Accept": "application/json;version=v1_web",
        "Content-Type": "application/json"
    }
})

Axios.interceptors.request.use(
    async (config) => {
        const session = await getServerSession(nextAuthOptions);
        if (session) {
            const token = `Bearer ${session.user.tokens.access}`
            config.headers.Authorization = token
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

Axios.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response?.status === 401) {
            console.error("Error 401 não autorizado:", error)
        }
        return Promise.reject(error)
    }
)

export default Axios