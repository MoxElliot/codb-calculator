<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import DataInput from '../FormComponents/DataInput.vue'

const reportStore = useReportStore()
const { payPerMonth, savingsPerMonth } = storeToRefs(reportStore)
const { addPayPerMonthAction, addSavingsPerMonthAction } = reportStore
</script>

<template>
  <div class="basis-full flex flex-col justify-center items-center">
    <h4>On average, how much will you be paying yourself per month?</h4>
    <data-input
      v-model="payPerMonth"
      label="$"
      parentClass="flex flex-row"
      type="number"
      id="pay-per-month"
      @blur="addPayPerMonthAction($event.target.value)"
    />
  
    <h4>On average, how much do you plan to save per month?</h4>
    <data-input
      v-model="savingsPerMonth"
      label="$"
      parentClass="flex flex-row"
      type="number"
      id="savings-per-month"
      @blur="addSavingsPerMonthAction($event.target.value)"
    />
  </div>
</template>
