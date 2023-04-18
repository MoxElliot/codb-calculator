<script lang="ts" >
import { useReportStore } from '../stores/reportStore'

export default {
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
</script>

<template>
    <form class="m-2 flex flex-col">
    <label for="company-name">Company Name:</label>
    <input class="border" id="company-name" name="company-name" type="text" placeholder= "Enter Company Name"/>
    <p>{{ reportStore.companyName }}</p>
    </form>
</template>

<style scoped>

</style>

