<script setup lang="ts">
const props = defineProps({
  label: {
    type: [Number, String],
    default: ''
  },
  variable: {
    type: [Number, String],
    default: ''
  }
})
</script>
<template>
  <div class="m-3">
    <p class="mr-2">
      <slot name="top" :text="label">
        {{ label }}
      </slot>
    </p>
    <p>
      <slot name="bottom" :text2="variable">
        {{ variable }}
      </slot>
    </p>
  </div>
</template>