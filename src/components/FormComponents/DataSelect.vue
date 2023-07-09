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
  value: null
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
  <v-select
    :value="selected"
    :options="optionArray"
    class="new-styles"
    :reduce="(category: any) => category.category"
    placeholder="Frequency"
    @input="$emit('option:selected', handleInputChange($event))"
  >
    <template #option="option">
      <span><img :src="option.image" />{{ option.category }}</span>
    </template>
  </v-select>
</template>
