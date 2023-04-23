<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import FixedCostDataInput from '../FixedCostsComponents/FixedCostDataInput.vue'
import FixedCostTable from '../FixedCostsComponents/FixedCostTable.vue'

defineProps(['fixedCost'])

const { totalFixedCosts } = storeToRefs(useReportStore())
</script>

<template>
  <div class="fixed-cost-data-input">
    <fixed-cost-data-input />
  </div>
  <fixed-cost-table />
  <div>
    <p>Total: {{ totalFixedCosts }}</p>
  </div>
</template>
