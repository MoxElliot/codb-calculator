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
<template>
  <div class="m-3">
    <p class="mr-2">
      <slot name="top" :1="label">
        {{ label }}
      </slot>
    </p>
    <p>
      <slot name="bottom" :2="variable">
        {{ variable }}
      </slot>
    </p>
  </div>
</template>
