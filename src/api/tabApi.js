import axiosClient from "./axiosClient";

const tabApi = {
  getAll(params) {
    const url = "/react-tabs-project";
    return axiosClient.get(url, { params: params });
  },

  get(id) {
    const url = `/react-tabs-project/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/react-tabs-project`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/react-tabs-project${data.id}`;
    return axiosClient.get(url, data);
  },

  remove(id) {
    const url = `/react-tabs-project${id}`;
    return axiosClient.delete(url);
  },
};

export default tabApi;
