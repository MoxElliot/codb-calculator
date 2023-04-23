<script setup lang="ts">
import { useReportStore } from '../../stores/reportStore'
import { ref } from 'vue'
import fixedCostCategoryOptions from '../../assets/fixedCostCategoryOptions'
import fixedCostPeriodOptions from '../../assets/fixedCostPeriodOptions'
import firstLetterUpperCase from '../../assets/utility_functions/firstLetterUpperCase'
import DataInput from '../FormComponents/DataInput.vue'

const reportStore = useReportStore()

const fixedCostName = ref<string>('')
const fixedCostCategory = ref<string>('')
const fixedCostAmount = ref<number>(0)
const fixedCostPeriod = ref<string>('')

</script>

<template>
  <form class="fixed-cost-input border border-black" @submit.prevent>
    <fieldset class="fixed-cost-fieldset">
      <div class="fixed-cost-dataset">
        <data-input 
          v-model="fixedCostName"
          label="Expense Name"
          type="input"
          id="expense-name"
        />
        <!-- <label class="label expense-name-label m-1" for="expense-name">Expense Name</label>
        <input
          class="input expense-name-input border border-black m-1"
          type="input"
          id="expense-name"
          v-model="fixedCostName"
        /> -->
      </div>
      <div class="fixed-cost-dataset">
        <label class="label category-label m-1" for="category">Category</label>
        <select class="input category-select m-1" id="category" v-model="fixedCostCategory">
          <option value="option" v-for="option in fixedCostCategoryOptions">
            {{ firstLetterUpperCase(option) }}
          </option>
        </select>
      </div>
      <div class="fixed-cost-dataset">
        <label class="label expense-amount-label m-1" for="expense-amount">Expense Amount</label>
        <input
          class="input expense-amount-input border border-black m-1"
          id="expense-amount"
          type="number"
          min="0"
          step="0.01"
          v-model="fixedCostAmount"
        />
      </div>
      <div class="fixed-cost-period">
        <label class="label period-label m-1" for="period">Pay Period</label>
        <select class="input period-select m-1" id="period" v-model="fixedCostPeriod">
          <option value="option" v-for="option in fixedCostPeriodOptions">
            {{ firstLetterUpperCase(option) }}
          </option>
        </select>
      </div>
    </fieldset>
    <button
      class="border border-black w-32 rounded-full m-1 bg-cyan-500"
      @click="reportStore.addFixedCostAction({
          id: reportStore.fixedCosts.length + 1,
          name: fixedCostName,
          category: fixedCostCategory,
          amount: fixedCostAmount,
          payPeriod: fixedCostPeriod})"
    >
      Add
    </button>
  </form>
</template>

<style scoped>


</style>
