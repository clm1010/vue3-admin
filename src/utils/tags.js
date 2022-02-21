// 白名单
const whiteList = ['/login', '/404', '401']

export function isTags(path) {
  return !whiteList.includes(path)
}
