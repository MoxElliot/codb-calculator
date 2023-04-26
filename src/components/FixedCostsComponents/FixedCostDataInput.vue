<script setup lang="ts">
import { useReportStore } from '../../stores/reportStore'
import { ref } from 'vue'
import costCategoryOptions from '../../assets/costCategoryOptions'
import costPeriodOptions from '../../assets/costPeriodOptions'
import DataInput from '../FormComponents/DataInput.vue'
import DataSelect from '../FormComponents/DataSelect.vue'

const reportStore = useReportStore()

const fixedCostName = ref<string>('')
const fixedCostCategory = ref<string>('')
const fixedCostAmount = ref<number>(0)
const fixedCostPeriod = ref<string>('')
const fixedCostTotal = ref<number>(0)

</script>

<template>
  <form class="fixed-cost-input border border-black" @submit.prevent>
    <fieldset class="fixed-cost-fieldset">
      <data-input
        v-model="fixedCostName"
        label="Expense Name"
        type="input"
        id="expense-name"
        class="fixed-cost-dataset"
      />
      <data-select
        v-model="fixedCostCategory"
        label="Category"
        :optionArray="costCategoryOptions"
      />
      <data-input
        v-model="fixedCostAmount"
        label="Expense Amount"
        type="number"
        id="expense-amount"
        class="fixed-cost-dataset"
        min="0"
        step="0.01"
      />
      <data-select
        v-model="fixedCostPeriod"
        label="Pay Period"
        :optionArray="costPeriodOptions"
      />
    </fieldset>
    <button
      class="border border-black w-32 rounded-full m-1 bg-cyan-500"
      @click="
        reportStore.addFixedCostAction({
          id: reportStore.fixedCosts.length + 1,
          name: fixedCostName,
          category: fixedCostCategory,
          amount: fixedCostAmount,
          payPeriod: fixedCostPeriod,
          total: fixedCostTotal
        })
      "
    >
      Add
    </button>
  </form>
</template>

<style scoped></style>
