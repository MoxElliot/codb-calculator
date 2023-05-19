<script setup lang="ts">
const props = defineProps({
  label: {
    type: [Number, String]
  },
  variable: {
    type: [Number, String]
  }
})
</script>
<template class="m-3">
  <div class="m-3">
    <h1 class="mr-2">
      <slot name="top" >
        
      </slot>
    </h1>
    <h3>
      <slot name="bottom" >
       
      </slot>
    </h3>
  </div>
</template>
