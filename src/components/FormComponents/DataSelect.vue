<script setup lang="ts">
import { ref } from 'vue'
import firstLetterUpperCase from '../../assets/utility_functions/firstLetterUpperCase'
import payPeriodOptionsArray from '@/assets/payPeriodOptionsArray'
const props = defineProps({
  // label: {
  //   type: String,
  //   default: ''
  // },
  // id: {
  //   type: String,
  //   default: ''
  // },
  // modelValue: {
  //   type: String,
  //   default: ''
  // },
  selected: {
    type: String,
    default: ''
  },
  optionArray: {
    type: Array,
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
  // labelClass: {
  //   type: String,
  //   default: ''
  // },
  // placeholder: {
  //   type: String,
  //   default: ''
  // },
  // placeholderClass: {
  //   type: String,
  //   default: ''
  // },
  selected: {
    type: String,
    default: null
  },
  value: null
})

const $emit = defineEmits<{
  e:'option:selected', selectedOption:string
}>()

// const $emit = defineEmits<{
//   (e: 'update:modelValue', value: string): void
// }>()

const handleInputChange = (e: any) => {
  (e.target as HTMLInputElement).value
  console.log('in handleInputChange', e.target.value)
  return e.target.value
}
</script>

<!-- <template>
  <div :class="parentClass">
    <label :for="label">
      {{ label }}
    </label>
    <select
      :class="class"
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', handleInputChange($event))"
    >
      <option value="" disabled hidden :class="placeholderClass">
        {{ placeholder }}
      </option>
      <option v-for="option in optionArray" :value="firstLetterUpperCase(option)">
        {{ firstLetterUpperCase(option) }}
      </option>
    </select>
  </div>
</template> -->

<template>
  <div :class="parentClass">
    <v-select
      v-bind="$attrs"
      :value="selected"
      :reduce="(category: any) => category.category"
      :class="class"
      @input="$emit('option:selected', handleInputChange($event))"
    >
      <template #option="option">
        <span ><img :src="option.image" />{{ option.category }}</span>
      </template>
    </v-select>
  </div>
</template>
