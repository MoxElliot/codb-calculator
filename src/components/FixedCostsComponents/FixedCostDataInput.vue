<script setup lang="ts">
import { useFixedCostStore } from '../../stores/fixedCostStore'
import { ref } from 'vue'
import costCategoryOptions from '../../assets/costCategoryOptions'
import costPeriodOptions from '../../assets/costPeriodOptions'
import DataInput from '../FormComponents/DataInput.vue'
import DataSelect from '../FormComponents/DataSelect.vue'

const fixedCostStore = useFixedCostStore()

const fixedCostName = ref<string>('')
const fixedCostCategory = ref<string>('')
const fixedCostAmount = ref<number>()
const fixedCostPeriod = ref<string>('')
const fixedCostTotal = ref<number>()

const handleAddCost = () => {
  fixedCostStore.addFixedCostAction({
    id: fixedCostStore.fixedCosts.length + 1,
    name: fixedCostName.value,
    category: fixedCostCategory.value,
    amount: fixedCostAmount.value,
    payPeriod: fixedCostPeriod.value,
    individualTotal: fixedCostTotal.value
  })
  fixedCostName.value = ''
  fixedCostCategory.value = ''
  fixedCostAmount.value = undefined
  fixedCostPeriod.value = ''
  fixedCostTotal.value = undefined
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
      <button class="border border-black w-16 rounded-full m-1 bg-cyan-500" @click="handleAddCost">
        Add
      </button>
    </div>
  </form>
</template>

<style scoped></style>
