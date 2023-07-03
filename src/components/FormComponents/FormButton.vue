<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  btnClass: {
    type: String
  },
  btnImage: {
    type: String
  }
})
</script>

<template>
  <button :class="btnClass"><img :src="btnImage"/>{{ label }}</button>
</template>
