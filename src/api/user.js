import request from '@/utils/request'

/**
 * 获取项目功能
 * @returns
 */
export const feature = () => {
  return request({
    url: '/user/feature'
  })
}

/**
 * 获取章节
 * @returns
 */
export const chapter = () => {
  return request({
    url: '/user/chapter'
  })
}
