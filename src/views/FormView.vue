<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import FormBasic from '@/features/Form/components/FormBasic/FormBasic.vue'
import FormColor from '@/features/Form/components/FormColor/FormColor.vue';
</script>

<template>
  <PageLayout title="Form" importCode="import { Form } from '@/components/Control'">
    <template #showcase>
      <FormBasic />
      <FormColor />
    </template>
    <template #api></template>
  </PageLayout>
</template>
