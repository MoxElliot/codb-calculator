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
  },
  ref: {
    type: [String, Number]
  },
  labelAfter: {
    type: String,
    default: ''
  },
  class: {
    type: String,
    default: ''
  },
  parentClass: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  }
  
})

const $emit = defineEmits<{
  (e: 'update:modelValue', value: string | number ): void
}>()

const handleInputChange = (e: any) => {
  (e.target as HTMLInputElement).value
  return e.target.value
}
</script>

<template>
  <div :class="parentClass">
    <label :for="label">
      {{ label }}
    </label>
    <input
      :class="class"
      v-bind="$attrs"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', handleInputChange($event), ref)"
    />
    <label :for="labelAfter">
      {{ labelAfter }}
    </label>
  </div>
</template>
