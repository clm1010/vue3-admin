<template>
  <div class="my-container">
    <el-row>
      <el-col :span="6">
        <project-card class="project-card">1</project-card>
      </el-col>
      <el-col :span="18">
        <el-card>
          <el-tabs v-model="activeName">
            <el-tab-pane :label="$t('msg.profile.feature')" name="feature">
              <feature />
            </el-tab-pane>
            <el-tab-pane :label="$t('msg.profile.chapter')" name="chapter">
              <chapter />
            </el-tab-pane>
            <el-tab-pane :label="$t('msg.profile.author')" name="author">
              <author />
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProjectCard from './components/ProjectCard'
import feature from './components/Feature'
import Chapter from './components/Chapter'
import Author from './components/Author'

const activeName = ref('featrue')
</script>

<style lang="scss" scoped></style>
