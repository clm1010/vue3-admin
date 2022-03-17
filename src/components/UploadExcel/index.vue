<template>
  <div class="upload-excel">
    <div class="btn-upload">
      <el-button :loading="loading" type="primary" @click="handleUpload">
        {{ $t('msg.uploadExcel.upload') }}
      </el-button>
    </div>
    <input
      ref="excelUploadInput"
      type="file"
      class="excel-upload-input"
      accept=".xlsx, xls"
      @change="handleChange"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const loading = ref(false)
const excelUploadInput = ref(null)
const handleUpload = () => {
  console.log(loading)
}
const handleChange = () => {
  console.log(loading)
}

</script>

<style lang="scss" scoped></style>
