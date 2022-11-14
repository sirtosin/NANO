import axios from "axios"

export const postApi = async(payload) => {
    const url = 'http://3.80.234.253:8080/data'
    await axios.post(url,payload).then((res) => res.data).catch((err) => err)
}
