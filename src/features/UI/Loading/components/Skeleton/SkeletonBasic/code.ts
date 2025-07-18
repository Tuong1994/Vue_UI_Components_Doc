export const skeletonBasicCode = `
<script setup lang="ts">
import { Loading, Flex, Card, Divider } from '@/components/UI'

const { Skeleton } = Loading

const { FlexRow, FlexCol } = Flex
</script>

<template>
  <FlexRow>
    <FlexCol :xs="24" :md="16" :lg="14" :span="8">
      <Card>
        <template #body>
          <Skeleton type="title" />
          <Divider />
          <FlexRow justify="between">
            <FlexCol :xs="8" :md="8" :lg="8" :span="8">
              <Skeleton type="image" :options="{ size: 100 }" />
            </FlexCol>
            <FlexCol :xs="16" :md="16" :lg="16" :span="16">
              <Skeleton type="paragraph" />
            </FlexCol>
          </FlexRow>
          <Divider />
          <Skeleton type="button" />
        </template>
      </Card>
    </FlexCol>
  </FlexRow>
</template>
`