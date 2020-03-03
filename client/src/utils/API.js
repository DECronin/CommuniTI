import axios from 'axios';

export default {
    findTopics: () => {
        return axios.get("api/list/topics");
    },
    findThreads: (id) => {
        return axios.get("api/list/topic/" + id);
    },
    newThread: (data) => {
        return axios.post("api/list/thread", data);
    },
    findComments: (id) => {
        return axios.get("api/list/thread/" + id);
    },
    newComment: (data) => {
        return axios.post("/api/list/comment", data);
    },
    updateComment: (id, data) => {
        return axios.put("api/list/comment" + id, data)
    },
    findResources: () => {
        return axios.get("api/list/resources");
    },
    newResource: (data) => {
        return axios.post("api/list/resources", data);
    },
    updateResource: (id, data) => {
        return axios.put("api/list/resources" + id, data)
    }
}