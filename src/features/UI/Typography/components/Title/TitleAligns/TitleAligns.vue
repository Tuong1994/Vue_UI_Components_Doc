<script setup lang="ts">
import { Typography } from '@/components/UI'
import { titleAlignsReactCode, titleAlignsVueCode } from './code'
import { typographyCatalogIds } from '@/features/UI/Typography/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { Title } = Typography
</script>

<template>
  <AnchorContent :id="typographyCatalogIds.TITLE_ALIGNS">
    <ShowCase title="Aligns" code="" :vueCode="titleAlignsVueCode" :reactCode="titleAlignsReactCode">
      <Title aligns="justify">Justify</Title>
      <Title aligns="left">Left</Title>
      <Title aligns="center">Center</Title>
      <Title aligns="right">Right</Title>
    </ShowCase>
  </AnchorContent>
</template>
