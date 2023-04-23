<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number],
    default: ''
  }
})

defineEmits(['update:modelValue'])

const handleInputChange = (event: Event) => {
  (event.target as HTMLInputElement).value

  return handleInputChange
}

</script>

<template>
  <label :for="label" class="label expense-name-label m-1" >
    {{ label }}
  </label>
  <input
    class="input expense-name-input border border-black m-1"
    v-bind="$attrs"
    :placeholder="label"
    :value="modelValue"
    @input="$emit('update:modalValue', handleInputChange($event))"
  />
</template>
