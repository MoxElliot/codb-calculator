<template>
    
    <div class="fixed-cost-table">
        <h1>Expense Name: {{ fixedCost.name }}</h1>
        <p>Category: {{ fixedCost.category }}</p>
        <p>Amount: {{ fixedCost.amount }}</p>
        <p>Pay Period: {{ fixedCost.payPeriod }}</p>
    </div>
</template>

<script setup lang="ts">
    
    defineProps(['fixedCost'])  //this prop name comes from the v-for in FixedCosts.vue, imported with v-bind (:fixedCosts="fixedCost")
    
</script>

<style scoped>

.fixed-cost-table {
    border: 1px solid black
}
</style>