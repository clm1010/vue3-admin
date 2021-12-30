
import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant'
import { getItem, setItem } from '@/utils/storage'
/**
 * 获取时间戳
 */
export function getTimeStamp() {
  return getItem(TIME_STAMP)
}

/**
 * 设置时间戳
 */
export function setTimeStamp() {
  setItem(TIME_STAMP, Date.now())
}
/**
 * 是否超时
 * 根据 当前时间 对比 登录时间，看是否超过了 时效时长
 */
export function isCheckTimeout() {
  // 当前时间
  const currentTime = Date.now()
  // 缓存时间
  const timeStamp = getTimeStamp()
  // 当前时间 减去 缓存时间 如果大于 设置的时长 TOKEN_TIMEOUT_VALUE
  return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}
