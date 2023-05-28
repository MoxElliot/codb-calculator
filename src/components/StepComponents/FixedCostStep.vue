<script setup lang="ts">
import FixedCostDataInput from '../FixedCostsComponents/FixedCostDataInput.vue'
import FixedCostTable from '../FixedCostsComponents/FixedCostTable.vue'

defineProps(['fixedCost'])
</script>

<template>
  <div class="basis-full flex flex-col justify-center items-center">
    <fixed-cost-data-input />
    <fixed-cost-table />
  </div>
</template>
