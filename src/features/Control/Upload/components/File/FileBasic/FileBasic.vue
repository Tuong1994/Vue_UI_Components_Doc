<script setup lang="ts">
import { Upload } from '@/components/Control'
import { fileBasicCode } from './code'
import { uploadCatalogIds } from '@/features/Control/Upload/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { FileUpload } = Upload

const handleUpload = (files: File[]) => {
  console.log(files)
}
</script>

<template>
  <AnchorContent :id="uploadCatalogIds.FILES_UPLOAD_BASIC">
    <ShowCase title="Basic" :code="fileBasicCode">
      <FileUpload color="green" @onUpload="handleUpload" />
    </ShowCase>
  </AnchorContent>
</template>
