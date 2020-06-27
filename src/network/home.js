import { request } from './request'

export function getHomeList () {
  return request({
    url: '/home/multidata'
  })
}
// 请求goods的数据列表
export function getHomeGoods (type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
