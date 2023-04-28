<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number]
  }
})

const $emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

const handleInputChange = (e: any) => {
  (e.target as HTMLInputElement).value
  return e.target.value
}
</script>

<template>
  <div class="flex flex-col">
    <label :for="label" class="label m-1">
      {{ label }}
    </label>
    <input
      class="input border border-black m-1"
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', handleInputChange($event))"
    />
  </div>
</template>
