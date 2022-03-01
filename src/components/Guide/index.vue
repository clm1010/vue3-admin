<template>
  <div>
    <el-tooltip
      :content="$t('msg.navBar.guide')"
      effect="dark"
      placement="bottom"
    >
      <span>
        <svg-icon
          id="guide-start"
          icon="guide"
          @click.prevent.stop="onClick"
        ></svg-icon>
      </span>
    </el-tooltip>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import { useI18n } from 'vue-i18n'
import steps from './steps'

const i18n = useI18n()

let driver = null
onMounted(() => {
  driver = new Driver({
    // 禁止点击蒙版关闭
    allowClose: false,
    closeBtnText: i18n.t('msg.guide.close'),
    nextBtnText: i18n.t('msg.guide.next'),
    prevBtnText: i18n.t('msg.guide.prev')
  })
})

const onClick = () => {
  driver.defineSteps(steps(i18n))
  driver.start()
  console.log('123123')
}
</script>

<style lang="scss" scoped></style>
