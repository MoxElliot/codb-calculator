<script setup lang="ts">
import VariableCostDataInput from '../VariableCostsComponents/VariableCostDataInput.vue'
import VariableCostTable from '../VariableCostsComponents/VariableCostTable.vue'

defineProps(['VariableCost'])

// const { totalVariableCosts } = storeToRefs(useReportStore())
</script>

<template>
  <div class="Variable-cost-data-input">
    <variable-cost-data-input />
  </div>
  <variable-cost-table />
  <!-- <div>
    <p>Total: {{ totalVariableCosts }}</p>
  </div> -->
</template>
