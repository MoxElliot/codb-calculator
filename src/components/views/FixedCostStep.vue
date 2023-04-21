<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import FixedCostDataInput from '../FixedCostsComponents/FixedCostDataInput.vue'
import FixedCostTable from '../FixedCostsComponents/FixedCostTable.vue'

defineProps(['fixedCost'])

const { fixedCosts, totalFixedCosts } = storeToRefs(useReportStore())
</script>

<template>
  <div class="fixed-cost-data-input">
    <fixed-cost-data-input />
  </div>
  <div class="fixed-cost-table" v-for="fixedCost in fixedCosts" :key="fixedCost.id">
    <fixed-cost-table :fixedCost="fixedCost" />
  </div>
  <div>
    <p>Total: {{ totalFixedCosts }}</p>
  </div>
</template>
