<script setup lang="ts">
import { useVariableCostStore } from '../../stores/variableCostStore'
import { ref } from 'vue'
import costCategoryOptions from '../../assets/costCategoryOptions'
import DataInput from '../FormComponents/DataInput.vue'
import DataSelect from '../FormComponents/DataSelect.vue'

const variableCostStore = useVariableCostStore()

const variableCostName = ref<string>('')
const variableCostCategory = ref<string>('')
const variableCostAmount = ref<number>(0)
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
      <button
        class="border border-black rounded-full bg-cyan-500"
        @click="
          variableCostStore.addVariableCostAction({
            id: variableCostStore.variableCosts.length + 1,
            name: variableCostName,
            category: variableCostCategory,
            amount: variableCostAmount
          })
        "
      >
        Add
      </button>
    </div>
  </form>
</template>
