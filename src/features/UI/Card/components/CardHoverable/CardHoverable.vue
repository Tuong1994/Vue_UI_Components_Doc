<script setup lang="ts">
import { Card, Typography } from '@/components/UI'
import { cardHoverableCode } from './code'
import { cardCatalogIds } from '@/features/UI/Card/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { Title } = Typography
</script>

<template>
  <AnchorContent :id="cardCatalogIds.HOVERABLE">
    <ShowCase title="Hoverable" :code="cardHoverableCode">
      <Card hoverable>
        <template #head>
          <Title :level="6">Hover me</Title>
        </template>
        <template #body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nam facilis vel libero dolorem ab
          consequatur eaque quidem rem! Quisquam, nulla officia quod porro voluptatibus earum in quae numquam
          reiciendis velit veritatis eius error, est impedit! Totam omnis dolores, eos nesciunt expedita autem
          explicabo repellat quos dicta, debitis saepe pariatur aliquid tenetur veniam labore libero fugit
          accusamus laudantium, sint maxime placeat harum reiciendis unde. Non sequi quia eligendi nam
          dignissimos, sint perferendis, facere dicta nulla deleniti est corrupti voluptate nisi recusandae
          aperiam quod veritatis reprehenderit culpa velit? Recusandae, accusantium soluta cupiditate natus
          enim iure modi obcaecati quos. Laborum, accusamus odit.
        </template>
      </Card>
    </ShowCase>
  </AnchorContent>
</template>
