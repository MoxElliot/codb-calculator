import { defineStore } from 'pinia'

type State = {
    companyName: string
    fixedCosts: FixedCosts[]
    totalCosts: number
}

type FixedCosts = {
    id: number
    name: string
    category: string
    amount: number
    payPeriod: string
}


export const useReportStore = defineStore('reportStore', {
    state: (): State => ({
        companyName: 'PhotoBomb',
        fixedCosts: [
            {id: 1, name: 'Rent', category: 'Overhead', amount: 1000, payPeriod: 'monthly'},
            {id: 2, name: 'Parking', category: 'Overhead', amount: 80, payPeriod: 'weekly'},
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
        addFixedCostAction(fixedCost: FixedCosts) {  //fixedCost here is arbitrary but setting it to the types within FixedCosts array
            console.log(this.fixedCosts)
            console.log("in reportStore actions addFixedExpense")
            this.fixedCosts.push(fixedCost)  //fixedCosts here refer to the state item to which I want to push fixedCost into4
            console.log(this.fixedCosts)
        },
        addCompanyNameAction(companyName : string) {
            console.log(this.companyName)
            console.log("in reportStore actions addCompanyName")
            this.companyName = companyName
            console.log(this.companyName)
        }
    }
})


//to generate report once report array is built
// <div v-for="report in reportStore.reportArray">
// <p>{{ report.companyName }} </p> 