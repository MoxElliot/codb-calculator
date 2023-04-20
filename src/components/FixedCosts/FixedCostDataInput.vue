<script setup lang="ts">
import { useReportStore } from '../../stores/reportStore'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

// const addFixedCostAction = useReportStore();

const fixedCostName = ref<string>('')
const fixedCostCategory = ref<string>('')
const fixedCostAmount = ref<number>(0)
const fixedCostPeriod = ref<string>('')

const reportStore = useReportStore()
</script>

<template>
  <form class="fixed-cost-input" @submit.prevent>
    <fieldset name="fixed-cost-fieldset">
      <div class="fixed-cost-dataset">
        <label class="label expense-name-label" for="expense-name">Expense Name</label>
        <input
          class="input expense-name-input"
          type="input"
          id="expense-name"
          v-model="fixedCostName"
        />
      </div>
      <div class="fixed-cost-dataset">
        <label class="label category-label" for="category">Category</label>
        <select class="input category-select" id="category" v-model="fixedCostCategory">
          <option value="marketing">Marketing</option>
          <option value="operations">Operations</option>
          <option value="incidental">Incidental</option>
          <option value="overhead">Overhead</option>
        </select>
      </div>
      <div class="fixed-cost-dataset">
        <label class="label expense-amount-label" for="expense-amount">Expense Amount</label>
        <input
          class="input expense-amount-input"
          id="expense-amount"
          type="number"
          min="0"
          step="0.01"
          v-model="fixedCostAmount"
        />
      </div>
      <div class="fixed-cost-period">
        <label class="label period-label" for="period">Pay Period</label>
        <select class="input period-select" id="period" v-model="fixedCostPeriod">
          <option value="advertising">Weekly</option>
          <option value="bi-monthly">Bi-Monthly</option>
          <option value="monthly">monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
    </fieldset>
    <button
      class="border border-black w-32 rounded-full m-1 bg-cyan-500"
      @click="
        reportStore.addFixedCostAction({
          id: reportStore.fixedCosts.length + 1,
          name: fixedCostName,
          category: fixedCostCategory,
          amount: fixedCostAmount,
          payPeriod: fixedCostPeriod
        })
      "
    >
      Add
    </button>
  </form>
</template>

<style scoped>
.expense-name-input,
.expense-amount-input {
  border: 1px solid black;
}
.input,
.label {
  margin-right: 0.5rem;
}
.fixed-cost-input {
  border: 1px solid black;
}
.fixed-cost-fieldset {
  display: flex;
  flex-direction: column;
}
</style>
