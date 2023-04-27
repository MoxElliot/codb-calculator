<script setup lang="ts">
import { useReportStore } from '../../stores/reportStore'
import { ref } from 'vue'
import costCategoryOptions from '../../assets/costCategoryOptions'
import DataInput from '../FormComponents/DataInput.vue'
import DataSelect from '../FormComponents/DataSelect.vue'

const reportStore = useReportStore()

const variableCostName = ref<string>('')
const variableCostCategory = ref<string>('')
const variableCostTotal = ref<number>(0)
</script>

<template>
  <form class="variable-cost-input border border-black" @submit.prevent>
    <fieldset class="variable-cost-fieldset">
      <data-input
        v-model="variableCostName"
        label="Expense Name"
        type="input"
        id="expense-name"
        class="variable-cost-dataset"
      />
      <data-select
        v-model="variableCostCategory"
        label="Category"
        :optionArray="costCategoryOptions"
      />
      <data-input
        v-model="variableCostTotal"
        label="Expense Amount"
        type="number"
        id="expense-amount"
        class="variable-cost-dataset"
        min="0"
        step="0.01"
      />
    </fieldset>
    <button
      class="border border-black w-32 rounded-full m-1 bg-cyan-500"
      @click="
        reportStore.addVariableCostAction({
          id: reportStore.variableCosts.length + 1,
          name: variableCostName,
          category: variableCostCategory,
          total: variableCostTotal
        })
      "
    >
      Add
    </button>
  </form>
</template>
