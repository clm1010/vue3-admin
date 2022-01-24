<template>
  <div class="navbar">
    <!-- 汉堡 -->
    <hamburger class="hamburger-container" />
    <!-- 面包屑 -->
    <breadcrumb class="breadcrumb-container" />
    <div class="right-menu">
      <!-- 是否全屏 -->
      <screen-full class="right-menu-item hover-effect"></screen-full>
      <!-- 切换主题 -->
      <theme-select class="right-menu-item hover-effect"></theme-select>
      <!-- 切换语言 -->
      <language-select class="right-menu-item hover-effect"></language-select>
      <!-- 头像 -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar
            shape="square"
            :size="40"
            :src="$store.getters.userInfo.avatar"
          ></el-avatar>
          <el-icon><tools /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>{{ $t('msg.navBar.home') }}</el-dropdown-item>
            </router-link>
            <a target="__blank" href="#">
              <el-dropdown-item>{{ $t('msg.navBar.course') }}</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="logout">
              {{ $t('msg.navBar.logout') }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/components/Breadcrumb'
import LanguageSelect from '@/components/LanguageSelect'
import ThemeSelect from '@/components/ThemeSelect'
import ScreenFull from '@/components/ScreenFull'

const store = useStore()
const logout = () => {
  // 触法退出登录
  store.dispatch('user/logout')
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    // hover 动画
    transition: background 0.5s;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;
    ::v-deep .right-menu-item {
      display: inline-block;
      padding: 0 18px 0 0;
      font-size: 24px;
      color: #5a5e66;
      vertical-align: text-bottom;
      &.hover-effect {
        cursor: pointer;
      }
    }
    ::v-deep .avatar-container {
      cursor: pointer;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        // .el-avatar {
        //   --el-avatar-background-color: none;
        // }
      }
    }
  }
}
</style>
