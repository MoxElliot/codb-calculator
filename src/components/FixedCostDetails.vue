<template>
    <div class="fixedCost">
        <h1>Expense Name: {{ fixedCost.name }}</h1>
        <p>Category: {{ fixedCost.category }}</p>
        <p>Amount: {{ fixedCost.amount }}</p>
        <p>Total: {{ totalFixedCost }}</p>
    </div>
</template>

<script lang="ts">
    export default {
        props: ['fixedCost', 'totalFixedCost']  //this prop name comes from the v-for in FixedCosts.vue, imported with v-bind (:fixedCosts="fixedCost")
    }
</script>

<style scoped>

</style>