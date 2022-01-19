import { createI18n } from 'vue-i18n'
import zhLocale from './lang/zh'
import enLocale from './lang/en'
import store from '@/store'

const messages = {
  en: {
    msg: {
      ...enLocale
    }
  },
  zh: {
    msg: {
      ...zhLocale
    }
  }
}

/**
 * @description 获取语言
 * @returns 返回当前 lang
 */
function getLanguage() {
  return store && store.getters && store.getters.language
}

const i18n = createI18n({
  // 使用 composition API
  legacy: false,
  // 全局使用 t 函数
  globalInjection: true,
  locale: getLanguage(),
  messages
})

export default i18n
