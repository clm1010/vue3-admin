<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    <el-breadcrumb-item>
      <span class="no-redirect">活动详情</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: $color_97a8be;
    cursor: text;
  }
}
</style>
