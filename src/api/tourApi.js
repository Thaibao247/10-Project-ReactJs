import axiosClient from "./axiosClient";

const tourApi = {
  getAll(params) {
    const url = "/react-tours-project";
    return axiosClient.get(url, { params: params });
  },

  get(id) {
    const url = `/react-tours-project/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/react-tours-project`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/react-tours-project${data.id}`;
    return axiosClient.get(url, data);
  },

  remove(id) {
    const url = `/react-tours-project${id}`;
    return axiosClient.delete(url);
  },
};

export default tourApi;
