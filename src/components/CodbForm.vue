<script setup lang="ts">
    import FixedCostDetails from './FixedCostDetails.vue';
    import CodbHeader from './CodbHeader.vue';
    import CodbFooter from './CodbFooter.vue';
    import CompanyNameDetails from './views/CompanyNameDetails.vue'
    import { useReportStore } from '../stores/reportStore';
    import { storeToRefs } from 'pinia';
    
    const { fixedCosts, totalFixedCosts } = storeToRefs(useReportStore()); //storeToRefs extracts data from store from an object with state data, getters (ie the composition of fixed costs array). prevents destructuring of property
    
</script>

<template>
    <div>
        <codb-header />
        <div class="m-2 flex flex-col">
            <p class="font-bold">Fixed Cost Details</p>
            <div v-for="fixedCost in fixedCosts" :key="fixedCost.id"> 
                <fixed-cost-details :fixedCost="fixedCost"/>
            </div>
            <div>
                <company-name-details /> <!-- to be routed from this page -->
            </div>
            <div>
                <p> Total: {{ totalFixedCosts }} </p>
            </div>
        </div>
        <codb-footer />
    </div>
</template>




