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
  value: null
})

const $emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const handleInputChange = (e: any) => {
  (e.target as HTMLInputElement).value
  return e.target.value
}
</script>

<template>
  <label :for="label" class="label m-1">
    {{ label }}
  </label>
  <select
    class="input m-1"
    v-bind="$attrs"
    :value="modelValue"
    @input="$emit('update:modelValue', handleInputChange($event))"
  >
    <option v-for="option in optionArray" :value="firstLetterUpperCase(option)">
      {{ firstLetterUpperCase(option) }}
    </option>
  </select>
</template>
