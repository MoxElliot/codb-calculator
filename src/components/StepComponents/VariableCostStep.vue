<script setup lang="ts">
import VariableCostDataInput from '../VariableCostsComponents/VariableCostDataInput.vue'
import VariableCostTable from '../VariableCostsComponents/VariableCostTable.vue'

defineProps(['VariableCost'])
</script>

<template>
  <div class="Variable-cost-data-input">
    <variable-cost-data-input />
  </div>
  <div>
    <variable-cost-table />
  </div>
</template>
