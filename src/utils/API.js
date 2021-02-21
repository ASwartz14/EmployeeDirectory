import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

const API = {
  search: function (query) {
    return axios.get("https://randomuser.me/api/?results=100&nat=us");
  },
};
export default API;
