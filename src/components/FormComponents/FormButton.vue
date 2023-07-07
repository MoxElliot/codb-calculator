<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  btnClass: {
    type: String,
    default: ''
  },
  btnImage: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <button :class="btnClass"><img :src="btnImage"/>{{ label }}</button>
</template>
