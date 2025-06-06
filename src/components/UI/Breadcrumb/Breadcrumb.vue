<script setup lang="ts">
import { computed, withDefaults, type StyleValue } from 'vue'
import type { BreadcrumbItems, BreadcrumbItem } from './type.ts'
import Icon from '@/components/UI/Icon/Icon.vue'
import useLayoutStore from '../Layout/LayoutStore'

export interface BreadcrumbProps {
  rootClassName?: string
  itemClassName?: string
  rootStyle?: StyleValue
  itemStyle?: StyleValue
  items?: BreadcrumbItems
}

withDefaults(defineProps<BreadcrumbProps>(), {
  rootClassName: '',
  itemClassName: '',
  items: () => []
})

const emits = defineEmits(['onClick'])

const layout = useLayoutStore()

const themeClassName = computed<string>(() => `breadcrumb-${layout.theme}`)

const activeClassName = (item: BreadcrumbItem) => (item.actived ? 'item-label-active' : '')

const handleClick = (item: BreadcrumbItem) => emits('onClick', item)
</script>

<template>
  <div :style="rootStyle" :class="['breadcrumb', themeClassName, rootClassName]">
    <div
      v-for="(item, idx) in items"
      :key="item.id"
      :style="itemStyle"
      :class="['breadcrumb-item', itemClassName]"
    >
      <router-link
        v-if="item.link"
        :to="item.link"
        :class="['item-label', activeClassName(item)]"
        @click="() => handleClick(item)"
      >
        <Icon v-if="item.labelIcon" :iconName="item.labelIcon" rootClassName="label-icon" :size="12" />
        <span>{{ item.label }}</span>
      </router-link>

      <div v-if="!item.link" :class="['item-label', activeClassName(item)]" @click="() => handleClick(item)">
        <Icon v-if="item.labelIcon" :iconName="item.labelIcon" rootClassName="label-icon" :size="12" />
        <span>{{ item.label }}</span>
      </div>

      <div v-if="idx !== items.length - 1" class="item-separator">
        <slot name="separator">></slot>
      </div>
    </div>
  </div>
</template>
