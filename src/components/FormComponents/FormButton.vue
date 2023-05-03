<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
})

</script>

<template>
  <button
    class="btn border border-black w-16 rounded-full m-1 bg-cyan-500"
  >
    {{ label }}
  </button>
</template>
