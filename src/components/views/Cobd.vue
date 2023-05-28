<script setup lang="ts">
import CodbForm from '../CoBDComponents/CodbForm.vue'
import CodbHeader from '../CoBDComponents/CodbHeader.vue'
import CodbFooter from '../CoBDComponents/CodbFooter.vue'
import { Field, Form, useForm } from 'vee-validate'

const { meta } = useForm()

console.log('in Cobd.vue meta', meta)
</script>

<template class="h-screen">
  <div class="grid grid-rows-3 h-screen">
    <div class="flex">
      <codb-header class="" />
    </div>
    <div class="flex">
      <codb-form class="flex basis-full" />
    </div>
    <div class="flex align-center place-content-center">
      <codb-footer />
    </div>
  </div>
</template>
