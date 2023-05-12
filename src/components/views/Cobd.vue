<script setup lang="ts">
import CodbForm from '../CoBDComponents/CodbForm.vue'
import CodbHeader from '../CoBDComponents/CodbHeader.vue'
import CodbFooter from '../CoBDComponents/CodbFooter.vue'
import { useForm } from 'vee-validate'

const { handleSubmit } = useForm()

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2))
})

</script>

<template>
  <form @submit="onSubmit">
    <codb-header />
    <codb-form />
    <codb-footer />
  </form>
</template>
