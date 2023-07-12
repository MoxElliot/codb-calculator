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
  }
})

let currentIcon = 'CurrentIcon' as any

const changeIcon = (icon: any) => {
  return currentIcon = icon
}

</script>

<template>
  <button :class="btnClass" @="changeIcon(btnImage)">
    <current-icon />
    {{ label }}
  </button>
</template>
