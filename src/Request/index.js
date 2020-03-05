import axios from "axios";
import { Message } from "element-ui";
import querystring from "querystring";
import { getToken, removeToken } from "@/Util/auth";
import errorCode from "./errorCode";
import router from "@/router";
import { filterObject } from "@/Tools";

const service = axios.create({
  timeout: 30000,
  withCredentials: true,
  validateStatus: function(status) {
    return status >= 200 && status <= 500; // 默认的
  }
});

// request拦截器
service.interceptors.request.use(
  config => {
    // 判断是否需要token
    const isToken = !config.noToken;
    let token = getToken();
    if (token && !isToken) {
      config.headers["Authorization"] = `Bearer ${token}`; // token
    }
    // post请求
    if (
      config.method === "post" &&
      config.headers["content-type"] === "application/x-www-form-urlencoded"
    ) {
      let d = filterObject(config.data);
      config.data = querystring.stringify(d);
    }
    // get请求
    if (config.method === "get") {
      config.params = filterObject(config.params);
    }
    return config;
  },
  error => {
    return Promise.reject(new Error(error));
  }
);

service.interceptors.response.use(
  res => {
    const status = Number(res.status) || 200;
    const message = res.data.msg || errorCode[status] || errorCode["default"];
    let data = "";
    if (status === 401) {
      // 登出
      // logout().then(() => {
      //   removeToken();
      //   router.push({
      //     path: "/login"
      //   });
      // });
      return;
    } else if (
      status !== 200 ||
      res.data.code == 1 ||
      res.data.code == 100002
    ) {
      Message({
        message: message,
        type: "error"
      });
      return Promise.reject(new Error(message));
    } else {
      data = res.data.data;
    }

    return data;
  },
  error => {
    return Promise.reject(new Error(error));
  }
);

export default service;
