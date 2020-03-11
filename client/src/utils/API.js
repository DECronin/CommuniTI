import axios from 'axios';

export default {
    findTopics: () => {
        return axios.get("/api/topics");
    },
    findThreads: (key, value) => {
        return axios.get("/api/topic/" + key + "/" + value);
    },
    newThread: (data) => {
        return axios.post("/api/thread", data);
    },
    findComments: (id) => {
        return axios.get("/api/thread/" + id);
    },
    newComment: (data) => {
        return axios.post("/api/comment", data);
    },
    updateComment: (id, data) => {
        return axios.put("/api/comment/" + id, data)
    },
    findResources: (key, value) => {
        return axios.get("/api/resources/" + key + "/" + value);
    },
    newResource: (data) => {
        return axios.post("/api/resources", data);
    },
    updateResource: (id, data) => {
        return axios.put("/api/resources/" + id, data)
    },
    login: (data) => {
        return axios.post("/auth/login", data)
    },
    logout: () => {
        return axios.post("/auth/logout")
    },
    newUser: (data) => {
        return axios.post("/api/user", data)
    },
    findUser: (key, value) => {
        return axios.get("/api/user/" + key + "/" + value);
    },
    updateUser: (id, data) => {
        return axios.post("/api/user/" + id, data)
    }
}