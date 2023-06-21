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
    default: 'input m-1'
  },
  parentClass: {
    type: String,
    default: 'flex flex-col'
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
      <option v-for="option in optionArray" :value="firstLetterUpperCase(option)">
        {{ firstLetterUpperCase(option) }}
      </option>
    </select>
  </div>
</template>
