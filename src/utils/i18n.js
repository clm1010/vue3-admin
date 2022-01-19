import i18n from '@/i18n'
/**
 * @description 生成标题方法
 * @param {*} title 标题
 */
export function generateTitle(title) {
  return i18n.global.t('msg.route.' + title)
}
