<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
// import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import costCategoryOptions from '../../assets/costCategoryOptions'
import costPeriodOptions from '../../assets/costPeriodOptions'
import DataInput from '../FormComponents/DataInput.vue'
import FormButton from '../FormComponents/FormButton.vue'
import DataSelect from '../FormComponents/DataSelect.vue'

const reportStore = useReportStore()

// const { fixedCosts } = storeToRefs(reportStore)

const fixedCostName = ref<string>('')
const fixedCostCategory = ref<string>('')
const fixedCostAmount = ref<number>()
const fixedCostPeriod = ref<string>('')
const fixedCostTotal = ref<number>()

const handleAddCost = () => {
  reportStore.addFixedCostAction({
    id: reportStore.fixedCosts.length + 1,
    name: fixedCostName.value,
    category: fixedCostCategory.value,
    amount: fixedCostAmount.value,
    payPeriod: fixedCostPeriod.value,
    individualTotal: fixedCostTotal.value
  })
  fixedCostName.value = ''
  fixedCostCategory.value = ''
  fixedCostAmount.value = 0.0
  fixedCostPeriod.value = ''
  fixedCostTotal.value = 0.0
}
</script>

<template>
  <form class="fixed-cost-input border border-black flex flex-row" @submit.prevent>
    <fieldset class="fixed-cost-fieldset flex flex-row flex-1">
      <data-input
        v-model="fixedCostName"
        label="Expense Name"
        type="input"
        id="expense-name"
        class="fixed-cost-dataset basis-1/4 flex-1"
      />
      <data-select
        v-model="fixedCostCategory"
        label="Category"
        :optionArray="costCategoryOptions"
        class="basis-1/4 flex-1"
      />
      <data-input
        v-model="fixedCostAmount"
        label="Expense Amount"
        type="number"
        id="expense-amount"
        class="fixed-cost-dataset basis-1/4 flex-1"
        min="0"
        step="0.01"
      />
      <data-select
        v-model="fixedCostPeriod"
        label="Pay Period"
        :optionArray="costPeriodOptions"
        class="basis-1/4 flex-1"
      />
    </fieldset>
    <div class="flex flex-col w-16 justify-center">
      <form-button label="Add" @click="handleAddCost" class="font-bold" />
    </div>
  </form>
</template>

<style scoped></style>
