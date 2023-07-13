<script setup lang="ts">
import { computed } from 'vue'

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
    default: '' as any
  }
})

let currentIcon = '' as any

const changeIcon = (icon: any) => {
  currentIcon = icon
}
</script>

<template>
  <button :class="btnClass" :="changeIcon(btnImage)">
    <current-icon v-if="currentIcon != ''" />
    {{ label }}
  </button>
</template>
