import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { notification } from "antd";


export enum HTTP_METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

const codeMessage: Record<number, string> = {
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。",
};


export const request = axios.create({
  baseURL: `//localhost:10018`,
  timeout: 5000,
});

request.interceptors.request.use((config: AxiosRequestConfig) => {

  const token = localStorage.getItem(`token`)

  config.headers = {
    ...config.headers,
    authorization: 'Bearer ' + token || "",
  };
  return config;
});

request.interceptors.response.use(async (res: AxiosResponse) => {
  const { status, data = {} } = res;
  const { statusCode = 200, data: result } = data;
  if (statusCode === 200) {
    return Promise.resolve(result)
  }
  return Promise.resolve(result);
}, async (httpInfo) => {
  const { statusCode, message } = httpInfo?.response?.data
  const msg = codeMessage?.[statusCode];
  notification.error({
    message: `系统错误`,
    description: message || msg,
  });
});