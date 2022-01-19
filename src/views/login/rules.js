import i18n from '@/i18n'

/**
 * @description 用户名校验
 */
export const validateUsername = () => {
  return (rule, value, callback) => {
    if (!value) {
      callback(new Error(i18n.global.t('msg.login.usernameRule')))
    } else {
      callback()
    }
  }
}

/**
 * @description 密码校验
 */
export const validatePassword = () => {
  return (rule, value, callback) => {
    if (value.length < 6) {
      callback(new Error(i18n.global.t('msg.login.passwordRule')))
    } else {
      callback()
    }
  }
}
