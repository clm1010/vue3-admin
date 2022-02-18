import i18n from '@/i18n'
import { watch } from 'vue'
import store from '@/store'
/**
 * @description 生成标题方法
 * @param {*} title 标题
 */
export function generateTitle(title) {
  return i18n.global.t('msg.route.' + title)
}

/**
 * @description 监听语言变化，同时执行 cb
 * @param  {...any} cbs
 */
export function watchSwitchLang(...cbs) {
  watch(
    () => store.getters.language,
    () => {
      cbs.forEach(cb => cb(store.getters.language))
    }
  )
}
