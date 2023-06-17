<script setup lang="ts">
import CodbForm from '../CoBDComponents/CodbForm.vue'
import CodbHeader from '../CoBDComponents/CodbHeader.vue'
import CodbFooter from '../CoBDComponents/CodbFooter.vue'

</script>

<template>
  <div class="grid grid-flow-row sm:grid-rows-smallLayout md:grid-rows-mainLayout h-screen">
    <div class="flex">
      <codb-header class="" />
    </div>
    <div class="flex">
      <codb-form class="flex basis-full justify-center overflow-auto" />
    </div>
    <div class="">
      <codb-footer />
    </div>
  </div>
</template>
