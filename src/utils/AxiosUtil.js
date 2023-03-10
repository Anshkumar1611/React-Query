import axios from "axios"

const client = axios.create({ baseURL: "http://localhost:4000" })

export const request = ({ ...options }) => {
    const onSuccess = (response) => response
    const onError = (error) => error
    return client(options).then(onSuccess).catch(onError)
}