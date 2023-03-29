import request from '@/api/request'

export function getUser(params) {
  return request({
    url: '/user',
    method: 'get',
    params
  })
}
