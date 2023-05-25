<script setup lang="ts">
import CodbForm from '../CoBDComponents/CodbForm.vue'
import CodbHeader from '../CoBDComponents/CodbHeader.vue'
import CodbFooter from '../CoBDComponents/CodbFooter.vue'
import { Field, Form, useForm } from 'vee-validate'

const { meta } = useForm()

console.log('in Cobd.vue meta', meta)
</script>

<template>
  <div class="flex flex-col h-full">
    <div class=" h-1/10">
      <codb-header />
    </div>
    <div class="h-3/10">
      <codb-form />
    </div>
    <div class="h-6/10 border flex align-center place-content-center">
      <codb-footer />
    </div>
  </div>
</template>
