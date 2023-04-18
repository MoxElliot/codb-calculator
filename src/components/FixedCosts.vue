<script lang="ts" >
import FixedCostDetails from './FixedCostDetails.vue'
import { useReportStore } from '../stores/reportStore'

export default {
    components: { FixedCostDetails  },
    setup() {
        const reportStore = useReportStore()

        console.log(reportStore)

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
// :fixedCost="fixedCost"
</script>

<template>
    <form class="m-2 flex flex-col">
        <div v-for="fixedCost in reportStore.fixedCosts">
            <p>{{ fixedCost.name }} - what?</p>
            <FixedCostDetails />
            <p>hello</p>
        </div>
    </form>
</template>




