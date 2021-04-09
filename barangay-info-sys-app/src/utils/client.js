import axios from "axios";

const API_VERSION = "";
const BASE_URL = "http://localhost:3000";

const getUrl = (url) => {
  return `${BASE_URL}${API_VERSION}${url}`;
};

const getAxiosClient = async (
  token = null,
  method,
  url,
  options,
  data,
  params
) => {
  const axiosSetup = {
    headers: {
      Authorization: !token ? "" : `Bearer ${token}`,
    },
    timeout: 120000,
  };

  if (!params) {
    axiosSetup.params = params;
  }

  const axiosInstance = axios.create(axiosSetup);

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      // Do centralize error handling here
      //store.dispatch(showErrorDialog(error));
      throw error;
    }
  );

  const requestUrl = getUrl(url);

  if (data) {
    return axiosInstance[method](requestUrl, data, options);
  }
  return axiosInstance[method](requestUrl, options);
};

export const clientAuthorizedApiRequest = (token) => {
  return {
    get: (url, options = {}, params = {}, customUrl = null) =>
      getAxiosClient(token, "get", url, options, null, params, customUrl),
    post: (url, data, options = {}) =>
      getAxiosClient(token, "post", url, options, data),
    put: (url, data, options = {}) =>
      getAxiosClient(token, "put", url, options, data),
    delete: (url, data, options = {}) =>
      getAxiosClient(token, "delete", url, options, data),
  };
};

export const clientApiRequest = () => {
  return {
    get: (url, options = {}, params = {}, customUrl = null) =>
      getAxiosClient(null, "get", url, options, null, params, customUrl),
    post: (url, data, options = {}) =>
      getAxiosClient(null, "post", url, options, data),
    put: (url, data, options = {}) =>
      getAxiosClient(null, "put", url, options, data),
    delete: (url, data, options = {}) =>
      getAxiosClient(null, "delete", url, options, data),
  };
};
