<script setup lang="ts">
import { computed } from 'vue'
import { dropdownCatalogIds } from '@/features/UI/Dropdown/repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const dataSource = computed<ComponentApi[]>(() => [
  {
    id: 'items',
    props: 'items',
    desc: t.lang.dropdown.api.dropdownDesc.items,
    type: {
      elType: ECodeElType.ANCHOR,
      link: dropdownCatalogIds.DROPDOWN_ITEM_API,
      codes: ['DropdownItems']
    },
    required: t.lang.common.required.no,
    default: '[]'
  },
  {
    id: 'trigger',
    props: 'trigger',
    desc: t.lang.dropdown.api.dropdownDesc.trigger,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['click', 'hover']
    },
    required: t.lang.common.required.no,
    default: 'click'
  },
  {
    id: 'placement',
    props: 'placement',
    desc: t.lang.dropdown.api.dropdownDesc.placement,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['left', 'right']
    },
    required: t.lang.common.required.no,
    default: 'left'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.dropdown.api.dropdownDesc.rootClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'labelClassName',
    props: 'labelClassName',
    desc: t.lang.dropdown.api.dropdownDesc.labelClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'boxClassName',
    props: 'boxClassName',
    desc: t.lang.dropdown.api.dropdownDesc.boxClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'rootStyle',
    props: 'rootStyle',
    desc: t.lang.dropdown.api.dropdownDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'labelStyle',
    props: 'labelStyle',
    desc: t.lang.dropdown.api.dropdownDesc.labelStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onDropdown',
    props: 'onDropdown',
    desc: t.lang.dropdown.api.dropdownDesc.onDropdown,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['( isDropdown: boolean ) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
])
</script>

<template>
  <TableLayout
    title="Dropdown"
    rootClassName="section-space"
    :dataSource="dataSource"
    :id="dropdownCatalogIds.DROPDOWN_API"
  />
</template>
