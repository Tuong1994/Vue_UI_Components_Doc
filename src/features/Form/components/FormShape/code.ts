export const formShapeCode = `
<script setup lang="ts">
import { Form, Input, InputPassword } from '@/components/Control'
import { Button } from '@/components/UI'

interface Data {
  email: string
  password: string
}

const initialValues: Data = {
  email: '',
  password: ''
}

const handleFinish = (data: Data) => console.log(data)
</script>

<template>
  <Form shape="square" :initialValues="initialValues" :autoFocusValidation="false" @onFinish="handleFinish">
    <Input name="email">
      <template #label>Email</template>
    </Input>
    <InputPassword name="password">
      <template #label>Password</template>
    </InputPassword>
    <Button type="submit" shape="square">Submit</Button>
  </Form>
</template>
`
