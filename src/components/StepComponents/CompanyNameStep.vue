<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { ref } from 'vue'
import DataInput from '../FormComponents/DataInput.vue'

const inputCompanyName = ref('')
const reportStore = useReportStore()
</script>

<template>
  <data-input
    v-model="inputCompanyName"
    label="Company Name:"
    type="input"
    id="price-average-per-booking"
    @blur="reportStore.addCompanyNameAction($event.target.value)"
  />
</template>
