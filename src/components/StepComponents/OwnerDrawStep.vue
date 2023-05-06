<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
// import { ref } from 'vue'
import DataInput from '../FormComponents/DataInput.vue'

const reportStore = useReportStore()
const { payPerMonth, savingsPerMonth } = storeToRefs(reportStore)
const { addPayPerMonthAction, addSavingsPerMonthAction } = reportStore

// const payPerMonth = ref<number>()
// const savingsPerMonth = ref<number>()
</script>

<template>
  <div>
    <h4>Owner's Draw Step</h4>
  </div>
  <div>
    <h4>On average, how much will you be paying yourself per month?</h4>
    <data-input
      v-model="payPerMonth"
      label="$"
      type="number"
      id="pay-per-month"
      @blur="addPayPerMonthAction($event.target.value)"
    />
  </div>
  <div>
    <h4>On average, how much do you plan to save per month?</h4>
    <data-input
      v-model="savingsPerMonth"
      label="$"
      type="number"
      id="savings-per-month"
      @blur="addSavingsPerMonthAction($event.target.value)"
    />
  </div>
</template>
