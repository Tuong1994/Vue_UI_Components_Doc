<script setup lang="ts">
import { Divider, Pagination } from '@/components/UI'
import { paginationCatalogIds } from '../../repository/catalogIds'
import { paginationShapeCode } from './code'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const layout = useLayoutStore()
</script>

<template>
  <AnchorContent :id="paginationCatalogIds.SHAPE">
    <ShowCase title="Shape" :code="paginationShapeCode">
      <Pagination shape="round" :color="layout.color" :total="50" />
      <Divider />
      <Pagination shape="square" :color="layout.color" :total="50" />
    </ShowCase>
  </AnchorContent>
</template>
