<script setup lang="ts">
import { Space, Divider, Card } from '@/components/UI'
import { spaceJustifyCode } from './code'
import { spaceCatalogIds } from '@/features/UI/Space/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
</script>

<template>
  <AnchorContent :id="spaceCatalogIds.JUSTIFY">
    <ShowCase title="Justify" :code="spaceJustifyCode">
      <Divider>Left</Divider>
      <Space justify="left">
        <Card>
          <template #body> Lorem ipsum dolor sit amet. </template>
        </Card>
        <Card>
          <template #body> Lorem ipsum dolor sit amet. </template>
        </Card>
        <Card>
          <template #body> Lorem ipsum dolor sit amet consectetur adipisicing elit.</template>
        </Card>
      </Space>
      <Divider>Center</Divider>
      <Space justify="center">
        <Card>
          <template #body> Lorem ipsum dolor sit amet. </template>
        </Card>
        <Card>
          <template #body> Lorem ipsum dolor sit amet. </template>
        </Card>
        <Card>
          <template #body> Lorem ipsum dolor sit amet consectetur adipisicing elit.</template>
        </Card>
      </Space>
      <Divider>Right</Divider>
      <Space justify="right">
        <Card>
          <template #body> Lorem ipsum dolor sit amet. </template>
        </Card>
        <Card>
          <template #body> Lorem ipsum dolor sit amet. </template>
        </Card>
        <Card>
          <template #body> Lorem ipsum dolor sit amet consectetur adipisicing elit.</template>
        </Card>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
