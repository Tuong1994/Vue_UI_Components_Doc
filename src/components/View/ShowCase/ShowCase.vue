<script setup lang="ts">
import { computed, defineProps, ref } from 'vue'
import { Card, Space, Button, Tooltip, Icon, Divider, Typography } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import CodeBlock from '../Code/CodeBlock.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Paragraph } = Typography

interface ShowCaseProps {
  title?: string
  code: string
}

defineProps<ShowCaseProps>()

const layout = useLayoutStore()

const showCode = ref<boolean>(false)

const rootClassName = computed<string>(() => `show-case show-case-${layout.theme}`)

const handleOpenCode = () => (showCode.value = !showCode.value)
</script>

<template>
  <Card :rootClassName="rootClassName">
    <template #head>
      <Paragraph :size="16" :weight="600">
        {{ title }}
      </Paragraph>
    </template>
    <template #body>
      <slot></slot>
      <Divider />
      <Space justify="end">
        <Tooltip>
          <template #title>
            <Button :color="layout.color" @click="handleOpenCode">
              <Icon :iconName="iconName.CODE" />
            </Button>
          </template>
          <template #content>Code</template>
        </Tooltip>
      </Space>
      <CodeBlock v-if="showCode" :code="code" />
    </template>
  </Card>
</template>
