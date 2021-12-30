<template>
  <el-menu
    :uniqueOpened="true"
    background-color="#545c64"
    text-color="#FFF"
    active-text-color="#FFD04B"
  >
    <!-- 子集 menu -->
    <el-sub-menu index="1">
      <template #title>
        <el-icon><Menu /></el-icon>
        <span>导航一</span>
      </template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-sub-menu>
    <!-- 具体菜单 -->
    <el-menu-item index="2">
      <el-icon><location /></el-icon>
      <template #title>导航4</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup></script>

<style lang="scss" scoped></style>
