<script setup lang="ts">
defineProps(['fixedCost'])
</script>

<template>
  <div class="fixed-cost-table">
    <p>Expense Name: {{ fixedCost.name }}</p>
    <p>Category: {{ fixedCost.category }}</p>
    <p>Amount: {{ fixedCost.amount }}</p>
    <p>Pay Period: {{ fixedCost.payPeriod }}</p>
  </div>
</template>

<style scoped>
.fixed-cost-table {
  border: 1px solid black;
}
</style>
