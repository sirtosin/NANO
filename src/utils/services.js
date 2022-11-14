import axios from "axios"

export const postApi = async (payload) => {
    console.log('payload', payload)
    const url = 'http://3.80.234.253:8080/data'
   return await axios.post(url,payload).then((res) => res.data).catch((err) => err)
}
