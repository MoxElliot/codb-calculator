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
    default: 'input border border-black m-1'
  },
  parentClass: {
    type: String,
    default: 'flex flex-col'
  },
  placeholder: {
    type: String,
    default: ''
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
  <div :class="parentClass">
    <label :for="label" class="label m-1">
      {{ label }}
    </label>
    <input
      :class="class"
      v-bind="$attrs"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', handleInputChange($event), ref)"
    />
    <label :for="labelAfter" class="m-1">
      {{ labelAfter }}
    </label>
  </div>
</template>
