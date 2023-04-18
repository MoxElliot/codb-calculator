<script lang="ts" >
import { ref } from 'vue'
import { useReportStore } from '../stores/reportStore'

export default {
    setup() {
        const reportStore = useReportStore()
        const companyName = ref('')

        const handleSubmit = () => {
            reportStore.addCompanyName(companyName.value) //need to use .value after companyName to access the above constant
            console.log("hello")
            companyName.value = ''
        }
        return { reportStore, companyName, handleSubmit }
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
    <form class="m-2 flex flex-col" @submit.prevent="handleSubmit()">
    <label for="company-name">Company Name:</label>
    <input class="border" id="company-name" name="company-name" type="text" placeholder= "Enter Company Name" v-model="companyName"/>
    <p>{{ reportStore.companyName }}</p>
    <button>Add</button>
    </form>
</template>

<style scoped>

</style>

