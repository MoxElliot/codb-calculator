<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { ref } from 'vue'
import * as Yup from 'yup'
import costCategoryOptions from '../../assets/costCategoryOptions'
import costPeriodOptions from '../../assets/costPeriodOptions'
import DataInput from '../FormComponents/DataInput.vue'
import FormButton from '../FormComponents/FormButton.vue'
import DataSelect from '../FormComponents/DataSelect.vue'
import type FixedCostObj from '../../types/FixedCostObj'
import { watch, onMounted } from 'vue'
import { useField } from 'vee-validate'
import { storeToRefs } from 'pinia'

const reportStore = useReportStore()
const { fixedCosts } = storeToRefs(reportStore)

const fixedCostName = ref<string>('')
const fixedCostCategory = ref<string>('')
const fixedCostAmount = ref<number>()
const fixedCostPeriod = ref<string>('')
const fixedCostTotal = ref<number>()

console.log('inFixedCostData INput', fixedCosts)

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

// const schema = Yup.object.shape({
//   fixedCosts: Yup.array().of(
//   name:Yup.string().required('Name is Required'),
//   category:Yup.string().required('Category is Required'),
//   amount: Yup.number().required('Value is Required').min(0),
//   period:Yup.string().required('Period is Required')
// })

const schema = Yup.object().shape({
  fixedCosts: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required('Name is Required'),
        category: Yup.string().required('Category is Required'),
        amount: Yup.number().required('Value is Required').min(0),
        period: Yup.string().required('Period is Required')
      })
    )
    .strict()
})

const currencyOptions = {
  currency: 'USD'
}

const { value: amount, errorMessage: valueError } = useField('amount')


</script>

<template>
  <form
    class="fixed-cost-input border border-black flex flex-row"
    :valiation-schema="schema"
    @submit.prevent
  >
    <fieldset class="fixed-cost-fieldset flex flex-row flex-1">
      <data-input
        v-model="fixedCostName"
        label="Expense Name"
        type="input"
        id="expense-name"
        name="name"
        class="fixed-cost-dataset basis-1/4 flex-1"
      />
      <data-select
        v-model="fixedCostCategory"
        label="Category"
        name="category"
        :optionArray="costCategoryOptions"
        class="basis-1/4 flex-1"
      />
      <data-input
        v-model="fixedCostAmount"
        label="Expense Amount"
        name="amount"
        class="fixed-cost-dataset basis-1/4 flex-1"
        min="0"
        step="0.01"
      />
      <data-select
        v-model="fixedCostPeriod"
        label="Pay Period"
        name="period"
        :optionArray="costPeriodOptions"
        class="basis-1/4 flex-1"
      />
    </fieldset>
    <span>{{ valueError }}</span>
    <div class="flex flex-col w-16 justify-center">
      <form-button label="Add" @click="handleAddCost" class="font-bold" />
    </div>
  </form>
</template>

<style scoped></style>
