<template>
  <div class="">
    <!-- <h1 :style="{color: $store.getters.cssVar.menuText}">占位</h1> -->
    <div class="logo-container">
      <el-avatar
        :size="44"
        :src="avatarUrl"
        :fit="`cover`"
        shape="square"
        @error="errorHandler"
      >
        <img :src="failedUrl" />
      </el-avatar>
      <h1 class="logo-title" v-if="$store.getters.sidebarOpened">Vue3-Admin</h1>
    </div>
    <el-scrollbar>
      <sidebar-menu></sidebar-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import logo from '@/assets/iron-man.svg'
import imgFailed from '@/assets/img-failed.png'
import SidebarMenu from './SidebarMenu'

const failedUrl = imgFailed
const avatarUrl = logo
const errorHandler = () => true
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
.logo-container {
  height: 44px;
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: $logoColor;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>
