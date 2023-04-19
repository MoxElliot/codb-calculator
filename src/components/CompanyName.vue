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
    <form class="m-2 flex flex-col m-3" @submit.prevent="handleSubmit()">
    <label for="company-name m-1">Company Name:</label>
    <input class="border border-black p-1 m-1 w-64" id="company-name" name="company-name" type="text" placeholder= "Enter Company Name" v-model="companyName"/>
    
    <button class="border border-black w-32 rounded-full m-1 bg-cyan-500">Add</button>
    </form>
</template>

<style scoped>

</style>

