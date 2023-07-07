<script setup lang="ts">
import { ref } from 'vue'
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
  labelClass: {
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

let show = ref(false)
let shownValue = ''
const isOpen = () => (show.value = !show.value)
const isSelected = (name: string) => {
  isOpen()
  shownValue = name
  console.log('in isSelected', shownValue)
}

const handleInputChange = (e: any) => {
  (e.target as HTMLInputElement).value
  open()
  return e.target.value
}

const selectArr = ['thing 1', 'src/images/CostCategoryImages/client-managment-category.svg']
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
  <div>
    <div :class="parentClass">
      <button
        @click="isOpen"
        :class="class"
        :value="modelValue"
        @input="$emit('update:modelValue', handleInputChange($event))"
      >
        <label
          :for="label"
          :class="
            shownValue === ''
              ? ' text-grey-100 text-bodyTable font-sans' + labelClass
              : ' text-bodyTable text-grey-300 font-sans ' + labelClass
          "
        >
          {{ shownValue === '' ? label : shownValue }}
        </label>
        <svg
          class="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <div v-show="show" class="absolute right-0 bg-primary-white rounded-md shadow-xl w-44">
        <a href="#" class="flex px-2 py-2" :value="selectArr[0]" @click="isSelected(selectArr[0])">
          <img :src="selectArr[1]" class="px-2" />
          {{ selectArr[0] }}
        </a>
      </div>
    </div>
  </div>
</template>
