import axios from "axios";
import { Loading } from "element-ui";
import { getStorage } from "./index";
import router from "@/router";
// 错误码跳转到登录页
let errorArr = [1, 6, 7, 8];
// 中断请求
// const CancelToken = axios.CancelToken;
// let cancelArr = [];
if (!getStorage("token")) {
  router.push({
    path: "/login"
  });
}
export function ajax(json) {
  json.data = json.data || {};
  // 设置axios
  let instance = axios.create({
    timeout: null,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "x-requested-with": "XMLHttpRequest",
      // eslint-disable-next-line
      "token": getStorage("token") ? getStorage("token") : "",
      // eslint-disable-next-line
      "user": getStorage("user") ? getStorage("user") : ""
    }
  });
  return new Promise((resolve, reject) => {
    let timer = null;
    let loading = null;
    // eslint-disable-next-line
    json.loading = json.loading === undefined ? true : json.loading;
    if (json.loading !== false) {
      clearTimeout(timer);
      loading = Loading.service({
        lock: true,
        text: "加载中..."
      });
    }
    instance({
      method: json.method,
      url: json.url,
      data:
        json.method === "POST" ||
        json.method === "PATCH" ||
        json.method === "PUT" ||
        json.method === "DELETE"
          ? json.data
          : "",
      params: json.method === "GET" ? json.data : "",
      headers: json.headers || null,
      responseType: json.responseType || "json"
      // cancelToken: new CancelToken(cancel => {
      //   cancelArr.push({ cancel });
      // })
    })
      .then(response => {
        if (json.loading !== false) {
          timer = setTimeout(function() {
            loading.close();
          }, 300);
        }
        // 错误码为0说明不报错
        if (response.data.errCode === 0) {
          resolve(response.data);
        } else {
          reject(response.data);
        }
      })
      .catch(error => {
        // 只有后台服务地址错误才catch
        if (json.loading !== false) {
          loading.close();
        }
        if (
          !(
            error.response &&
            error.response.data &&
            error.response.data.errCode
          )
        ) {
          error.response = {
            data: {
              errCode: "-1"
            }
          };
        }

        reject(error.response.data);
        // 跳转到登录
        if (errorArr.includes(error.response.data.errCode)) {
          router.push({
            path: "/login"
          });
        }
      });
  });
}
