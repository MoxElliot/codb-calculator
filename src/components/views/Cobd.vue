<script setup lang="ts">
import CodbForm from '../CoBDComponents/CodbForm.vue'
import CodbHeader from '../CoBDComponents/CodbHeader.vue'
import CodbFooter from '../CoBDComponents/CodbFooter.vue'

</script>

<template>
  <div class="grid grid-rows-smallLayout md:grid-rows-mediumLayout lg:grid-rows-mainLayout md:gap-y-5 ">
    <div class="flex">
      <codb-header class="" />
    </div>
    <div class="flex overflow-scroll" >
      <codb-form class="flex basis-full justify-center items-center h-fit lg:h-full" />
    </div>
    <div class="flex basis-full justify-center" >
      <codb-footer />
    </div>
  </div>
</template>
