<script setup lang="ts">
import firstLetterUpperCase from '../../assets/utility_functions/firstLetterUpperCase'

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
    type: String,
    default: ''
  },
  optionArray: {
    type: Array<string>,
    default: []
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
  },
  placeholderClass: {
    type: String,
    default: ''
  },
  value: null
})

const $emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const handleInputChange = (e: any) => {
  ;(e.target as HTMLInputElement).value
  return e.target.value
}
</script>

<template>
  <div :class="parentClass">
    <label :for="label" >
      {{ label }}
    </label>
    <select
      :class="class"
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', handleInputChange($event))"
    >
      <option value="" disabled selected :class="placeholderClass" >
        {{ placeholder }}
      </option>
      <option v-for="option in optionArray" :value="firstLetterUpperCase(option)">
        {{ firstLetterUpperCase(option) }}
      </option>
    </select>
  </div>
</template>
