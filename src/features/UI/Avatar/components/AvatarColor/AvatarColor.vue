<script setup lang="ts">
import { Space, Avatar } from '@/components/UI'
import { avatarColorCode } from './code'
import { avatarCatalogIds } from '@/features/UI/Avatar/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const avatarSize = 50

const avatarColors = ['blue', 'green', 'red', 'orange', 'yellow', 'purple', 'pink']
</script>

<template>
  <AnchorContent :id="avatarCatalogIds.COLOR">
    <ShowCase title="Color" :code="avatarColorCode">
      <Space>
        <Avatar v-for="color in avatarColors" :key="color" :color="color" :size="avatarSize" />
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
