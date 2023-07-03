<script setup lang="ts">
import CodbForm from '../CoBDComponents/CodbForm.vue'
import CodbHeader from '../CoBDComponents/CodbHeader.vue'
import CodbFooter from '../CoBDComponents/CodbFooter.vue'
</script>

<template>
  <div
    class="grid grid-rows-smallLayout md:grid-rows-mediumLayout lg:grid-rows-mainLayout md:gap-y-5"
  >
    <codb-header class="flex" />
    <codb-form class="flex flex-col basis-full justify-center overflow-scroll" />
    <div class="flex basis-full justify-center items-center">
      <codb-footer />
    </div>
  </div>
</template>
