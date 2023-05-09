import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c7f2f6cca7a94e528fcb4459dc35c2a3",
  },
});
