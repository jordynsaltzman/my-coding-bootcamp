import axios from "axios";

export default {
  getUserTopics: () => {
    return axios.get("/topics/own");
  },

  createNewTopic: (topic) => {
    return axios.post("/topics/new", topic);
  },

  deleteTopic: (id) => {
    return axios.delete("/topics/delete/" + id);
  },

  getOneTopic: (id) => {
    return axios.get("/topics/" + id);
  },

  getResources: (topicId) => {
    return axios.get("/resources/" + topicId);
  },

  getOneResource: (resourceId) => {
    return axios.get("/resources/id/" + resourceId);
  },

  createNewResource: (newResource) => {
    return axios.post("/resources/new", newResource);
  },

  updateResource: (data) => {
    return axios.put("/resources/update", data);
  },

  deleteResource: (resource) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
      data: resource,
    };
    return axios.delete("/resources/delete", config);
  },
};
