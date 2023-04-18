<template>
    <div class="fixedCost">
        <h1>Expense Name: {{ fixedCost.name }}</h1>
        <p>Category: {{ fixedCost.category }}</p>
        <p>Amount: {{ fixedCost.amount }}</p>
    </div>
</template>

<script lang="ts">
    export default {
        props: ['fixedCost']
    }
</script>

<style scoped>

</style>