<script setup lang="ts">
    import FixedCostDetails from './FixedCosts/FixedCostDetails.vue';
    import CodbHeader from './CodbHeader.vue';
    import CodbFooter from './CodbFooter.vue';
    import { useReportStore } from '../stores/reportStore';
    import { storeToRefs } from 'pinia';
    import { ref } from 'vue';
    
    const inputCompanyName = ref('');
    // const { fixedCosts, totalFixedCosts } = storeToRefs(useReportStore());
    const { addCompanyNameAction } = useReportStore();
</script>

<template>
    <div>
        <codb-header />
        <div class="m-2 flex flex-col">
            <div class="flex">
                <p class="company-name_p font-bold">Company Name: </p>
                <input class="border border-black p-1 m-1 w-64" id="company-name" name="company-name" type="text" placeholder= "Enter Company Name" v-model="inputCompanyName"/>
                <button
                    class="border border-black w-32 rounded-full m-1 bg-cyan-500"
                    @click="addCompanyNameAction(inputCompanyName)"
                >Add</button>
            </div>
            <div>
                <fixed-cost-details />
            </div>
            <!-- <p class="font-bold">Fixed Cost Details</p>
            <div v-for="fixedCost in fixedCosts" :key="fixedCost.id"> 
                <fixed-cost-details :fixedCost="fixedCost"/>
            </div> -->
            <!-- <div>
                <p> Total: {{ totalFixedCosts }} </p>
            </div> -->
        </div>
        <codb-footer />
    </div>
</template>




