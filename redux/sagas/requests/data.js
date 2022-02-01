import axios from "axios";

export function requestGetData() {
  return axios.request({
    method: "get",
    url: "https://admin.naxa.com.np/api/projects"
  });
}
