<script setup lang="ts">
import CodbForm from '../CoBDComponents/CodbForm.vue'
import CodbHeader from '../CoBDComponents/CodbHeader.vue'
import CodbFooter from '../CoBDComponents/CodbFooter.vue'
import { Field, Form, useForm  } from 'vee-validate'

const { meta } = useForm()

console.log("in Cobd.vue meta", meta)
</script>

<template>
  <Form >
    <codb-header />
    <codb-form />
    <codb-footer />
  </Form>
</template>
