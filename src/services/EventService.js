import axios from 'axios'
// import Mock from 'mockjs';
    
const apiClient = axios.create({
    baseURL: `http://127.0.0.1:8000/api`,
    withCredentials: false, // This is the default http://localhost:3000
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
    }
});
   
const apiClientDb = axios.create({
    baseURL: `http://localhost:3000`,
    withCredentials: false, // This is the default http://localhost:3000
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
    }
});

export  default {
    getLoginUser() {
    return apiClientDb.get('/loginUser')
    },    
    getEvents() {
    return apiClientDb.get('/apps');
    },
    getEvent(id) {
    return apiClientDb.get('/apps/' + id);
    },    
    getApps() {
    return apiClient.get('/appLast');
    },    
    getApp(id) {
    return apiClient.get('/member/App/' + id);
    },
    getMember() {
    return apiClient.get('/member');
    },
    getMemberByID(id) {
    return apiClient.get('/member/' + id)
    },
    postLogin(loginData){
    return apiClient.post('/member/login/', loginData);       
    },
    postMember(registerData){
    return apiClient.post('/member/', registerData);       
    },
    getAllCategory() {
    return apiClient.get('/getAllCategory');
    },
    getComment(appID) {
    return apiClient.get('/member/comment/' + appID);
    },
    getSearch(searchData) {
    return apiClient.post('/member/search',searchData);
    },
    getAppImg(appID) {
    return apiClient.get('/member/Appimg/' + appID);
    }
};
