<template>
  <div id="guide-hamburger" class="hamburger-container" @click="toggleClick">
    <!-- class="hamburger" -->
    <svg-icon :icon="icon"></svg-icon>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const toggleClick = () => {
  store.commit('app/triggerSidebarOpened')
}

const store = useStore()
const icon = computed(() => {
  return store.getters.sidebarOpened ? 'hamburger-opened' : 'hamburger-closed'
})
</script>

<style lang="scss" scoped>
.hamburger-container {
  padding: 0 16px;
  // .hamburger {
  //   display: inline-block;
  //   vertical-align: middle;
  //   width: 20px;
  //   height: 20px;
  // }
}
</style>
