import { defineStore } from 'pinia'

type State = {
    companyName: string
    fixedCosts: FixedCosts[]
    totalCosts: number
}

type FixedCosts = {
    name: string
    category: string
    amount: number
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

            const sum = fixedCosts.map(item => item.amount).reduce((a,b) => {
                return a + b
            });
            return sum
     }
    },
    actions: {
        addFixedCost(fixedCost: FixedCosts) {  //fixedCost here is arbitrary but setting it to the types within FixedCosts array
            this.fixedCosts.push(fixedCost)  //fixedCosts here refer to the state item to which I want to push fixedCost into
        },
        addCompanyName(companyName : string) {
            console.log("in reportStore actions addCompanyName")
            this.companyName = companyName
        }
    }
})


//to generate report once report array is built
// <div v-for="report in reportStore.reportArray">
// <p>{{ report.companyName }} </p> 