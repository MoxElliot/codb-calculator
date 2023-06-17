<script setup lang="ts">
import CodbForm from '../CoBDComponents/CodbForm.vue'
import CodbHeader from '../CoBDComponents/CodbHeader.vue'
import CodbFooter from '../CoBDComponents/CodbFooter.vue'

</script>

<template>
  <div class="grid grid-flow-row grid-rows-smallLayout md:grid-rows-mainLayout">
    <div class="flex">
      <codb-header class="" />
    </div>
    <div class="flex" >
      <codb-form class="flex basis-full justify-center" />
    </div>
    <div>
      <codb-footer />
    </div>
  </div>
</template>
