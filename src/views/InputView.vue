<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import InputApi from '@/features/Control/Input/components/InputApi/InputApi.vue'
import InputBasic from '@/features/Control/Input/components/InputBasic/InputBasic.vue'
import InputColor from '@/features/Control/Input/components/InputColor/InputColor.vue'
import InputLabel from '@/features/Control/Input/components/InputLabel/InputLabel.vue'
import InputNumber from '@/features/Control/Input/components/InputNumber/InputNumber.vue'
import InputPassword from '@/features/Control/Input/components/InputPassword/InputPassword.vue'
import InputPhone from '@/features/Control/Input/components/InputPhone/InputPhone.vue'
import InputShape from '@/features/Control/Input/components/InputShape/InputShape.vue'
import InputSize from '@/features/Control/Input/components/InputSize/InputSize.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <PageLayout
    title="Input"
    importCode="import { Input } from '@/components/Control'"
    :desc="t.lang.input.desc"
  >
    <template #showcase>
      <InputBasic />
      <InputColor />
      <InputSize />
      <InputShape />
      <InputLabel />
      <InputPassword />
      <InputNumber />
      <InputPhone />
    </template>
    <template #api>
      <InputApi />
    </template>
  </PageLayout>
</template>
