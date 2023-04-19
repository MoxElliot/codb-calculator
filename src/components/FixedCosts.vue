<script lang="ts" >
import FixedCostDetails from './FixedCostDetails.vue'
import { useReportStore } from '../stores/reportStore'

export default {
    components: { FixedCostDetails },
    setup() {
        const reportStore = useReportStore()

        return { reportStore }
    }
}
</script>


<!-- in v-for "fixedCost in reportStore.fixedCosts" the "fixedCost" name is arbitrary but then must flow down through the subcomponent. the "reportStore" is the store name within reportStore.ts -> defineStore('reportStore', ....) "fixedCosts" in reportStore.fixedCosts must match the state name in the store-->
<template>
    <form class="m-2 flex flex-col">
        <p class="font-bold">Fixed Cost Details</p>
        <div v-for="fixedCost in reportStore.fixedCosts" :key="fixedCost.id"> 
            <FixedCostDetails :fixedCost="fixedCost"/>
        </div>
        <div>
            <p> Total: {{ reportStore.totalFixedCosts }} </p>
        </div>
    </form>
</template>




