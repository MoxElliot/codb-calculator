<script setup lang="ts">
import { useOwnersDrawStore } from '@/stores/ownersDrawStore'
import { ref } from 'vue'
import DataInput from '../FormComponents/DataInput.vue'

const ownersDrawStore = useOwnersDrawStore()

const payPerMonth = ref<number>()
const savingsPerMonth = ref<number>()
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
      @blur="ownersDrawStore.addpayPerMonthAction($event.target.value)"
    />
  </div>
  <div>
    <h4>On average, how much do you plan to save per month?</h4>
    <data-input
      v-model="savingsPerMonth"
      label="$"
      type="number"
      id="savings-per-month"
      @blur="ownersDrawStore.addSavingsPerMonthAction($event.target.value)"
    />
  </div>
</template>
