export const drawerBasicCode = `
<script setup lang="ts">
import { ref } from 'vue'
import { Drawer, Button } from '@/components/UI'

const open = ref<boolean>(false)

const handleOpenDrawer = () => (open.value = !open.value)
</script>

<template>
  <Button color="green" @click="handleOpenDrawer">Click me</Button>
  <Drawer :open="open" @onClose="handleOpenDrawer">
    <template #head> Drawer </template>
    <template #body>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius expedita provident aliquam placeat
      repudiandae maiores porro cupiditate doloremque libero nam? Corrupti, dolores libero aliquam magnam quas
      aspernatur cumque error provident laborum cupiditate accusamus veniam, incidunt blanditiis sint possimus
      itaque aut sed atque? Asperiores saepe animi aspernatur impedit illum harum minima corporis earum fugiat
      eveniet velit, officia, quaerat facere voluptatem, laboriosam iure nobis quo nesciunt sint illo beatae
      veniam. Sequi ut et quaerat, assumenda iusto corrupti facere consequatur delectus dolore. Laudantium
      ipsa dignissimos atque incidunt ut quisquam illum velit veritatis sunt nobis accusamus, id ipsam ullam
      delectus possimus enim modi! Repellat aliquam cum veniam sit ipsum illum sed expedita, ipsam cumque
      doloremque molestias harum? Voluptatibus nihil laboriosam similique veniam corporis, quisquam in ullam
      sit voluptas reiciendis ea perferendis illum omnis accusantium alias! Error laboriosam et expedita sint
      eos aperiam aspernatur delectus laborum. Asperiores, quaerat? Quasi ex eius inventore quaerat itaque
      voluptas voluptate recusandae in, nihil voluptatibus? Quisquam commodi soluta accusantium explicabo,
      officia, hic delectus inventore aperiam quo, quam consequuntur provident. Impedit minus, nihil aut
      obcaecati ex qui dicta vero tempore repellat ad aperiam nulla architecto debitis, quis alias asperiores
      temporibus unde aliquid. Officia explicabo velit magnam voluptatem ut ex qui eveniet!
    </template>
  </Drawer>
</template>
`