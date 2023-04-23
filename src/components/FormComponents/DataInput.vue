<script setup lang='ts'>
    const props = defineProps({
        label: {
            type: String,
            default: '',
        },
    })
</script>


<template>
    <label class="label expense-name-label m-1" for="expense-name">{{ label }}</label>
        <input
          :placeholder="label"
          class="input expense-name-input border border-black m-1"
          id="expense-name"
        />
</template>


