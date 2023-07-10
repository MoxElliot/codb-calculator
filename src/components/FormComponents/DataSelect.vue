<script setup lang="ts">
const props = defineProps({
  selectedOption: {
    type: String,
    default: ''
  },
  optionArray: {
    type: Array,
    default: []
  },
  placeholder: {
    type: String,
    default: ''
  },
  selected: {
    type: String,
    default: null
  },
  parentClass: {
    type:String,
  }
})

const $emit = defineEmits<{
  e: 'option:selected'
  selectedOption: string
}>()

const handleInputChange = (e: any) => {
  ;(e.target as HTMLInputElement).value
  console.log('in handleInputChange', e.target.value)
  return e.target.value
}
</script>

<template>
  <!-- <div :class="parentClass"> -->
    <v-select
      :value="selected"
      :options="optionArray"
      class="new-styles"
      :reduce="(category: any) => category.category"
      placeholder="Frequency"
      @input="$emit('option:selected', handleInputChange($event))"
    >
      <template #option="option">
        <span class="flex flex-row h-8"><img :src="option.image" class="pr-2"/>{{ option.category }}</span>
      </template>
    </v-select>
  <!-- </div> -->
</template>
