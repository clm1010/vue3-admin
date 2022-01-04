<template>
  <el-menu
    :uniqueOpened="true"
    background-color="#545c64"
    text-color="#FFF"
    active-text-color="#FFD04B"
  >
    <sidebar-item
      v-for="(item, index) in routes"
      :key="index"
      :route="item"
    ></sidebar-item>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { filterRoutes, generateMenus } from '@/utils/route'
import SidebarItem from './SidebarItem'

const router = useRouter()
const routes = computed(() => {
  const fRoutes = filterRoutes(router.getRoutes())
  // console.log(fRoutes)
  return generateMenus(fRoutes)
})
// console.log(JSON.stringify(routes.value))
</script>

<style lang="scss" scoped></style>
