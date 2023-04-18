import { defineStore } from 'pinia'


type FixedCosts = {
    name: string
    category: string
    amount: number
}

type State = {
    companyName: string
    fixedCosts: FixedCosts[]
    totalCosts: number
}

export const useReportStore = defineStore('reportStore', {
    state: (): State => ({
        companyName: 'PhotoBomb',
        fixedCosts: [
            {name: 'Rent', category: 'Overhead', amount: 1000},
            {name: 'Bills', category: 'Overhead', amount: 800},
        ],
        totalCosts: 100
    }),
    getters: {
        totalFixedCosts({ fixedCosts }): number {

            fixedCosts.reduce((a , b) => {
                return a.amount + b.amount
            })
     }
    }
})


//to generate report once report array is built
// <div v-for="report in reportStore.reportArray">
// <p>{{ report.companyName }} </p> 