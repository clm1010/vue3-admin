<template>
  <upload-excel :onSuccess="onSuccess"></upload-excel>
</template>

<script setup>
import UploadExcel from '@/components/UploadExcel'

const onSuccess = excelData => {
  console.log(excelData)
}
</script>

<style lang="scss" scoped></style>
