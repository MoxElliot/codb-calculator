<script setup lang="ts">
import CodbForm from '../CoBDComponents/CodbForm.vue'
import CodbHeader from '../CoBDComponents/CodbHeader.vue'
import CodbFooter from '../CoBDComponents/CodbFooter.vue'
import { Form } from 'vee-validate'
</script>

<template>
  <Form>
    <codb-header />
    <codb-form />
    <codb-footer />
  </Form>
</template>
