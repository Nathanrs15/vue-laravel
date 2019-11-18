import axios from "axios";

export default {
    all() {
        return axios.get('/api/focuses');
    },
    create(data) {
        return axios.post('/api/focuses', data);
    },
    find(id) {
        return axios.get(`/api/focuses/${id}`);
    },
    update(id, data) {
        return axios.put(`/api/focuses/${id}`, data);
    },
    delete(id) {
        return axios.delete(`/api/focuses/${id}`);

    }
};
