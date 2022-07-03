/**
 * @author ishen
 */
import axios from "axios";
import {
  Toast
} from 'antd-mobile'
// axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.timeout = 5000;
axios.defaults.withCredentials = true;

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    console.log("请求", err.status);
    Toast.show({
      icon: 'fail',
      content: '当前网络异常，请稍后再试！',
    })
    return Promise.reject(err);
  }
);
axios.interceptors.response.use(
  (response) => {
    if (!response.data.isOK) {
      Toast.show({
        icon: 'fail',
        content: response.data.message,
      })
    }
    
    return response.data;
  },
  (error) => {
    
    if (error.response && error.response.status) {
      switch (error.response.status) {
        case 400:
          Toast.show({
            icon: 'fail',
            content: error.response.message,
          })
          break;
        case 401:
          if (error.response.config.url === "/api/web/token") return;
          Toast.show({
            icon: 'fail',
            content: error.response.message,
          })
          break;
        case 403:
          Toast.show({
            icon: 'fail',
            content: error.response.message,
          })
          break;
        case 404:
          Toast.show({
            icon: 'fail',
            content: error.response.message,
          })
          break;
        default:
          Toast.show({
            icon: 'fail',
            content: error.response.message,
          })
      }
      return Promise.reject(error);
    } else {
      Toast.show({
        icon: 'fail',
        content: "请求超时！",
      })
      return Promise.reject(error);
    }
  }
);

const http = {
  get: function (url, params, config) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params,
          config,
        })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  post: function (url, data, config) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data, config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  delete: function (url, params, config = {}) {
    return new Promise((resolve, reject) => {
      axios
        .delete(url, params, config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  put: function (url, data = {}) {
    return new Promise((resolve, reject) => {
      axios
        .put(url, data)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
export default http;