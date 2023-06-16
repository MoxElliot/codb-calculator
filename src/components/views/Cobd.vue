<script setup lang="ts">
import CodbForm from '../CoBDComponents/CodbForm.vue'
import CodbHeader from '../CoBDComponents/CodbHeader.vue'
import CodbFooter from '../CoBDComponents/CodbFooter.vue'

</script>

<template>
  <div class="grid grid-flow-row auto-rows-max md:auto-rows-auto grid-rows-3 h-screen">
    <div class="flex">
      <codb-header class="" />
    </div>
    <div class="flex">
      <codb-form class="flex basis-full justify-center" />
    </div>
    <div class="">
      <codb-footer />
    </div>
  </div>
</template>
