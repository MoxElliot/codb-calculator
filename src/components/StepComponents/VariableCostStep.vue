<script setup lang="ts">
import VariableCostDataInput from '../VariableCostsComponents/VariableCostDataInput.vue'
import VariableCostTable from '../VariableCostsComponents/VariableCostTable.vue'

defineProps(['VariableCost'])
</script>

<template>
  <div class="basis-full flex flex-col justify-center items-center">
    <variable-cost-data-input />
    <variable-cost-table />
  </div>
</template>
