import request from '@/utils/request'

/**
 * 获取用户列表数据
 * @param {*} data
 * @returns
 */
export const getUserManageList = (data) => {
  return request({
    url: '/user-manage/list',
    data
  })
}
