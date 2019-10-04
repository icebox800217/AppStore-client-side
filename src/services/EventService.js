import axios from 'axios'
    
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
    }
}