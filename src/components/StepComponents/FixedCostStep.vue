<script setup lang="ts">
import FixedCostDataInput from '../FixedCostsComponents/FixedCostDataInput.vue'
import FixedCostTable from '../FixedCostsComponents/FixedCostTable.vue'

defineProps(['fixedCost'])
</script>

<template>
  <div class="fixed-cost-data-input">
    <fixed-cost-data-input />
  </div>
  <fixed-cost-table />
</template>
