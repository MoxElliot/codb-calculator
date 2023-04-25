<script setup lang="ts">
import firstLetterUpperCase from '../../assets/utility_functions/firstLetterUpperCase'

defineProps({
    label: {
        type: String,
        default:''
    },
    id: {
        type: String,
        default: '',
    },
    modelValue: {
        type: String,
        default:'',
    }, 
    optionArray: {
        type: Array<string>,
        default: []
    },
    value: null,
})
defineEmits<{
//   (event: 'change', id: number): void
  (event: 'update', value: string): void
}>()

const handleInputChange = (event: any) => {
  (event.target as HTMLInputElement).value
  console.log('in DataSelect modelValue',  (event.target as HTMLInputElement).value)
  return event.target.value
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
        <option v-for="option in optionArray" :value="firstLetterUpperCase(option)" >
            {{ firstLetterUpperCase(option) }}
        </option>
    </select>
</template>