<template>
  <el-dropdown
    class="international"
    trigger="click"
    @command="handleSetLanguage"
  >
    <el-tooltip :content="$t('msg.navBar.lang')">
      <span>
        <svg-icon id="guide-lang" icon="language"></svg-icon>
      </span>
    </el-tooltip>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="language === 'zh'" command="zh"
          >中文</el-dropdown-item
        >
        <el-dropdown-item :disabled="language === 'en'" command="en"
          >English</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'

defineProps({
  effect: {
    type: String,
    default: 'dark',
    validator: function (value) {
      return ['dark', 'light'].indexOf(value) !== -1
    }
  }
})

const store = useStore()
const language = computed(() => store.getters.language)

// 切换语言的方法
const i18n = useI18n()
const handleSetLanguage = (lang) => {
  // 切换 i18n 的 locale
  i18n.locale.value = lang
  // 修改 vuex 中保存的 language
  store.commit('app/setLanguage', lang)
  // 提示
  ElMessage.success(i18n.t('msg.toast.switchLangSuccess'))
}
</script>

<style lang="scss" scoped></style>
