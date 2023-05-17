<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <button>
    {{ label }}
  </button>
</template>
