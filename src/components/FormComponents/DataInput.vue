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
  },
})

defineEmits<{
  // (event: 'change', id: number): void
  (event: 'update', value: string): void
}>()

const handleInputChange = (event: any) => {
  (event.target as HTMLInputElement).value
  console.log('in DataInput modelValue',  (event.target as HTMLInputElement).value)
  return event.target.value
}
</script>

<template>
  <label :for="label" class="label m-1">
    {{ label }}
  </label>
  <input
    class="input border border-black m-1"
    v-bind="$attrs"
    :placeholder="label"
    :value="modelValue"
    @input="$emit('update:modelValue', handleInputChange($event))"
  />
</template>
