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
//import Company from '../types/Company'
// interface Company {
//     // name: string
//     required: true
// }
// const props = defineProps<Company>()
//v-for="fixedCost in reportStore.fixedCosts"
// 
</script>

<template>
    <form class="m-2 flex flex-col">
        <p class="font-bold">Fixed Cost Details</p>
        <div v-for="fixedCost in reportStore.fixedCosts">
            <FixedCostDetails :fixedCost="fixedCost"/>
        </div>
    </form>
</template>




