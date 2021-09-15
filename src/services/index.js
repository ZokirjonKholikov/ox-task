import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

const service = axios.create({ baseURL });
const CustomAxios = {
  _instance: null,
  get instance() {
    if (!this._instance) {
      this._instance = axios.create({ baseURL: '/api' });
    }
    return this._instance;
  },
};
service.interceptors.response.use(
  (res) => res.data,
  (error) => {
    if (error.response.status === 401) {
      window.location.replace('/logout');
      localStorage.removeItem('token');
    }
    return Promise.reject(error);
  }
);

service.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export function execute(promise) {
  return new Promise((resolve, reject) => {
    promise
      .then((response) => {
        resolve(response.data);
      })
      .catch(reject);
  });
}

// Prod Version
export function paramsFunc(pageName, params) {
  let urlRequest;

  // this condition to avoid error caused by route change
  // after fixing just replace this ifelse with urlRequest = `/dashboard/${pageName}s/${pageName}`
  if (pageName === 'deliveries') {
    urlRequest = `/dashboard/${pageName}?`;
  } else {
    urlRequest = `/dashboard/${pageName}s/${pageName}?`;
  }

  const paramsArray = Object.keys(params);
  paramsArray.forEach((param, index) => {
    urlRequest += `${param}=${params[param]}`;
    if (index + 1 !== paramsArray.length) {
      urlRequest += '&';
    }
  });

  return service.get(urlRequest);
}

// Depreciated
export function paginate(url, params) {
  const [startRow = 0, endRow = 10] = params;
  return execute(CustomAxios.instance.get(url, { startRow, endRow }));
}

export { service };
export default CustomAxios.instance;
