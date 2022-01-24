<template>
  <div class="">
    {{ $t('msg.test') }}
    <el-pagination
      v-model:currentPage="currentPage1"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
    <el-row>
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped></style>
