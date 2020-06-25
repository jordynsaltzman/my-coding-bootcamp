import axios from "axios";

export default {
  getUserTopics: () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return axios.get("http://localhost:5000/topics/own", config);
  },

  createNewTopic: (topic) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return axios.post("http://localhost:5000/topics/new", topic, config);
  },

  deleteTopic: (id) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return axios.delete("http://localhost:5000/topics/delete/" + id, config);
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
    return axios.delete("/resources/delete", resource);
  },
};
