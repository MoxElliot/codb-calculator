<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import DataInput from '../FormComponents/DataInput.vue'

const reportStore = useReportStore()
const { companyName } = storeToRefs(reportStore)
const { addCompanyNameAction } = reportStore

</script>

<template>
  <data-input
    v-model="companyName"
    label="Company Name:"
    type="input"
    id="price-average-per-booking"
    @blur="addCompanyNameAction($event.target.value)"
  />
</template>
