<template>
    <div class="fixed-cost-data-input">
        <fixed-cost-data-input></fixed-cost-data-input>
    </div>
    <div class="fixed-cost-table" v-for="fixedCost in fixedCosts" :key="fixedCost.id">
        <fixed-cost-table :fixedCost="fixedCost"/>
    </div>
    <div>
        <p> Total: {{ totalFixedCosts }} </p>
    </div>
</template>

<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore';
import { storeToRefs } from 'pinia';
import FixedCostDataInput from './FixedCostDataInput.vue';
import FixedCostTable from './FixedCostTable.vue';
import { ref } from 'vue';
    defineProps(['fixedCost'])  //this prop name comes from the v-for in FixedCosts.vue, imported with v-bind (:fixedCosts="fixedCost")

    const { fixedCosts, totalFixedCosts } = storeToRefs(useReportStore());
    // const { fixedCosts, totalFixedCosts } = storeToRefs(useReportStore());
    // const { addCompanyNameAction } = useReportStore();
</script>

<style scoped>


</style>