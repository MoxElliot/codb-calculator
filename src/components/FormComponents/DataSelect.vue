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

let show = ref(false)
const isOpen = () => (show.value = !show.value)

</script>

<template>
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
</template>

<!-- <template>
  <div>
    <div class="relative">
    
      <button
        @click="isOpen"
        class="flex items-center p-2 text-indigo-100 bg-indigo-600 rounded-md"
      >
        <span class="mr-4">Dropdown Menu</span>
        <svg
          class="w-5 h-5 text-indigo-100 dark:text-white"
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

 
      <div v-show="show" class="absolute right-0 py-2 mt-2 bg-indigo-500 rounded-md shadow-xl w-44">
        <a
          href="#"
          class="block px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-400 hover:text-indigo-100"
        >
          Dropdown List 1
        </a>
        <a
          href="#"
          class="block px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-400 hover:text-indigo-100"
        >
          Dropdown List 2
        </a>
        <a
          href="#"
          class="block px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-400 hover:text-indigo-100"
        >
          Dropdown List 3
        </a>
      </div>
    </div>
  </div>
</template> -->
