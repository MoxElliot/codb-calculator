<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { computed, ref, type WritableComputedRef } from 'vue'
import * as Yup from 'yup'
import costCategoryOptions from '../../assets/costCategoryOptions'
import costPeriodOptions from '../../assets/costPeriodOptions'
import DataInput from '../FormComponents/DataInput.vue'
import FormButton from '../FormComponents/FormButton.vue'
import DataSelect from '../FormComponents/DataSelect.vue'
import { useField, useForm, Form } from 'vee-validate'
import { storeToRefs } from 'pinia'

const reportStore = useReportStore()

const fixedCostName = ref<string>('')
const fixedCostCategory = ref<string>('')
const fixedCostAmount = ref<number>(0)
const fixedCostPeriod = ref<string>('')
const fixedCostTotal = ref<number>(0)

const handleAddCost = (...values: any) => {
  console.log(JSON.stringify([...values], null, 2))
  console.log('in handleAddCost', fixedCostName.value)
  console.log('in handledAddCost allFilled validForm',allFilled)
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

const allFilled = {name: false, category: false, amount: false, period: false}
const validForm = Object.values(allFilled).every(item => item === true)

const fixedCostNameInput: WritableComputedRef<string> = computed<string>({
  get: () => fixedCostName.value, //Maintains data in field if user goes back
  set: (text: string) => {
    name.value = text
    allFilled.name = true
    // updateInputValidAction(true) // enables the Next button
  }
})
const fixedCostCategoryInput: WritableComputedRef<string> = computed<string>({
  get: () => fixedCostCategory.value, //Maintains data in field if user goes back
  set: (text: string) => {
    category.value = text
    allFilled.category = true
    // updateInputValidAction(true) // enables the Next button
  }
})
const fixedCostAmountInput: WritableComputedRef<any> = computed<any>({
  get: () => fixedCostAmount.value, //Maintains data in field if user goes back
  set: (num: number) => {
    amount.value = num
    allFilled.amount = true
    // updateInputValidAction(true) // enables the Next button
  }
})
const fixedCostPeriodInput: WritableComputedRef<string> = computed<string>({
  get: () => fixedCostPeriod.value, //Maintains data in field if user goes back
  set: (text: string) => {
    period.value = text
    allFilled.period = true
    // updateInputValidAction(true) // enables the Next button
  }
})

const schema = Yup.object().shape({
  name: Yup.string().required('Name is Required'),
  category: Yup.string().required('Category is Required'),
  amount: Yup.number().required('Value is Required'),
  period: Yup.string().required('Period is Required')
})

useForm({
  validationSchema: schema,
})

const { value: name, errorMessage: nameError } = useField('name')
const { value: category, errorMessage: categoryError } = useField('category')
const { value: amount, errorMessage: amountError } = useField('amount')
const { value: period, errorMessage: periodError } = useField('period')
</script>

<template>
  <Form
    class="fixed-cost-input border border-black flex flex-row"
    :valiation-schema="schema"
    @submit="handleAddCost(fixedCostName, fixedCostCategory, fixedCostAmount, fixedCostPeriod)"
  >
    <fieldset class="fixed-cost-fieldset flex flex-row flex-1">
      <div>
        <data-input
        v-model="fixedCostNameInput"
        label="Expense Name"
        type="input"
        id="expense-name"
        name="name"
        class="fixed-cost-dataset basis-1/4 flex-1"
      />
      <span class="text-red font-semibold">{{ nameError }}</span>
      </div>
      <div>
        <data-select
        v-model="fixedCostCategoryInput"
        label="Category"
        name="category"
        :optionArray="costCategoryOptions"
        class="basis-1/4 flex-1"
      />
      <span class="text-red font-semibold">{{ categoryError }}</span>
      </div>
      <div>
        <data-input
        v-model="fixedCostAmountInput"
        label="Expense Amount"
        name="amount"
        class="fixed-cost-dataset basis-1/4 flex-1"
        min="0"
        step="0.01"
      />
      <span class="text-red font-semibold">{{ amountError }}</span>
      </div>
      <div>
        <data-select
        v-model="fixedCostPeriodInput"
        label="Pay Period"
        name="period"
        :optionArray="costPeriodOptions"
        class="basis-1/4 flex-1"
      />
      <span class="text-red font-semibold">{{ periodError }}</span>
      </div>
      
    </fieldset>
    <div class="btn-add flex flex-col justify-center">
      <form-button label="Add" type="submit" class="font-bold" />
    </div>
  </Form>
</template>

<style scoped></style>
