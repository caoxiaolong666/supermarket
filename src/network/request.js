import axios from 'axios'
// 1. 创建
const instance = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5000
})

export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    instance.get(url, {
      params: params
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
export function post (url, params = {}) {
  return new Promise((resolve, reject) => {
    instance.post(url, params)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

// 2.开启拦截器
instance.interceptors.request.use(config => {
  return config
  // let token = window.sessionStorage.getItem(‘token’)
  // if (token) {
  //   // 添加headers
  //   config.headers.Authorization = ${ token };
  //   config.headers[‘content - type’] = ‘application / x - www - form - urlencoded; charset = UTF - 8’;
  // }
  // return config;
}, err => {
  console.log(err)
})
instance.interceptors.response.use(res => {
  // var token = response.headers.authorization;
  // if (token) {
  //   // 如果 header 中存在 token，那么触发 refreshToken 方法，替换本地的 token
  //   instance.defaults.headers.common['Authorization'] = token;
  // }
  return res.data
}, err => {
  // if (err.response) {
  //   switch (err.response.status) {
  //     // 返回401，清除token信息并跳转到登录页面
  //     case 401:
  //       localStorage.removeItem('token')
  //       router.replace({
  //         path: '/login'
  //         // 登录成功后跳入浏览的当前页面
  //         // query: {redirect: router.currentRoute.fullPath}
  //       })
  //   }
  //   // 返回接口返回的错误信息
  //   return Promise.reject(err.response.data)
  // }
  console.log(err)
})
