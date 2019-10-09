import axios from 'axios'
import Mock from 'mockjs'
    
const apiClient = axios.create({
    baseURL: `http://127.0.0.1:8000/api`,
    withCredentials: false, // This is the default http://localhost:3000
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
    getMember(id) {
    return apiClient.get('/member' + id)
    },
    postLogin(loginData){
    return apiClient.post('/login', loginData)        
    }
}
