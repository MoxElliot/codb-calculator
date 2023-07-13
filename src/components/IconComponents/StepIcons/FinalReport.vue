<script setup lang="ts">
const props = defineProps({
  isActive: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.1094 5.42405C21.4836 8.79818 21.4836 14.2687 18.1094 17.6428C14.7353 21.017 9.26477 21.017 5.89066 17.6428C2.51653 14.2687 2.51653 8.79816 5.89066 5.42405C9.26479 2.04992 14.7353 2.04992 18.1094 5.42405"
      :stroke="isActive ? '#7CC1B5' : '#A4ABAA'"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 16.8134L15.84 8.17345H8.16L9.7152 10.5734L8.16 12.9734H13.6906"
      :stroke="isActive ? '#7CC1B5' : '#A4ABAA'"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
