<script setup lang="ts">
import { useCompanyStore } from '@/stores/companyStore'
import { ref } from 'vue'
import DataInput from '../FormComponents/DataInput.vue'

const inputCompanyName = ref('')
const companyStore = useCompanyStore()
</script>

<template>
  <data-input
    v-model="inputCompanyName"
    label="Company Name:"
    type="input"
    id="price-average-per-booking"
    @blur="companyStore.addCompanyNameAction($event.target.value)"
  />
</template>
