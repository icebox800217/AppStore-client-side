import axios from 'axios'
import Mock from 'mockjs'
    
const apiClient = axios.create({
    baseURL: `http://localhost:3000`,
    withCredentials: false, // This is the default
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
    }
})
console.log("app--",apiClient);
export  default {
    getEvents() {
    return apiClient.get('/events')
    },
    getEvent(id) {
    return apiClient.get('/events/' + id)
    },
    getMember() {
    return apiClient.get('/member')
    },
    postMember(memberData){
        console.log("memberData--",memberData);
        axios.post('http://localhost:3000/postMember', memberData)
        .then((response) => {
            console.log("response--",response);
        })
        .catch((e) => {
            console.error(e)
        })
    }

}
