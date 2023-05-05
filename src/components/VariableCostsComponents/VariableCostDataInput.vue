<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { ref } from 'vue'
import costCategoryOptions from '../../assets/costCategoryOptions'
import DataInput from '../FormComponents/DataInput.vue'
import DataSelect from '../FormComponents/DataSelect.vue'
import FormButton from '../FormComponents/FormButton.vue'

const reportStore = useReportStore()

const variableCostName = ref<string>('')
const variableCostCategory = ref<string>('')
const variableCostAmount = ref<number>()

const handleAddCost = () => {
  reportStore.addVariableCostAction({
    id: reportStore.variableCosts.length + 1,
    name: variableCostName.value,
    category: variableCostCategory.value,
    amount: variableCostAmount.value
  })
  variableCostName.value = ''
  variableCostCategory.value = ''
  variableCostAmount.value = 0.0
}
</script>

<template>
  <form class="variable-cost-input border border-black flex flex-row" @submit.prevent>
    <fieldset class="variable-cost-fieldset flex flex-row flex-1">
      <data-input
        v-model="variableCostName"
        label="Expense Name"
        type="input"
        id="expense-name"
        class="variable-cost-dataset basis-1/3 flex-1"
      />
      <data-select
        v-model="variableCostCategory"
        label="Category"
        :optionArray="costCategoryOptions"
        class="basis-1/3 flex-1"
      />
      <data-input
        v-model="variableCostAmount"
        label="Expense Amount"
        type="number"
        id="expense-amount"
        class="variable-cost-dataset basis-1/3 flex-1"
        min="0"
        step="0.01"
      />
    </fieldset>
    <div class="flex flex-col w-16 justify-center">
      <form-button label="Add" @click="handleAddCost" />
    </div>
  </form>
</template>
