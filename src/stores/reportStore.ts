import { defineStore } from 'pinia'

export const useReportStore = defineStore('reportStore', {
    state: () => ({
        companyName: 'PhotoBomb',
        fixedCosts: [
            {name: 'Rent', category: 'Overhead', amount: '1000'},
            {name: 'Bills', category: 'Overhead', amount: '800'},
        ]
    })
})


//to generate report once report array is built
// <div v-for="report in reportStore.reportArray">
// <p>{{ report.companyName }} </p> 