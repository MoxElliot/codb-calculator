<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { ref } from 'vue'
import * as Yup from 'yup'
import costCategoryOptions from '../../assets/costCategoryOptions'
import costPeriodOptions from '../../assets/costPeriodOptions'
import DataInput from '../FormComponents/DataInput.vue'
import FormButton from '../FormComponents/FormButton.vue'
import DataSelect from '../FormComponents/DataSelect.vue'
import { useField, useForm, Form } from 'vee-validate'
import { storeToRefs } from 'pinia'

const reportStore = useReportStore()
const { blankSubmitError } = storeToRefs(reportStore)
const { setBlankSubmitErrorAction } = reportStore

const fixedCostTotal = ref<number>(0)

let fixedFormValid = ref<boolean>(true)

const schema = Yup.object({
  name: Yup.string().required(' '),
  category: Yup.string().required(' '),
  amount: Yup.number().typeError('Please Enter a Number').required(' '),
  period: Yup.string().required(' ')
})

const { resetForm } = useForm({
  validationSchema: schema,
  validateOnMount: true
})

const handleAddCost = (
  fixedCostName: string,
  fixedCostCategory: string,
  fixedCostAmount: number | null,
  fixedCostPeriod: string
) => {
  if (nameMeta.valid && categoryMeta.valid && amountMeta.valid && periodMeta.valid) {
    fixedFormValid.value = true
    reportStore.addFixedCostAction({
      id: reportStore.fixedCosts.length + 1,
      name: fixedCostName,
      category: fixedCostCategory,
      amount: fixedCostAmount,
      payPeriod: fixedCostPeriod,
      individualTotal: fixedCostTotal.value
    })
    resetForm()
  } else {
    fixedFormValid.value = false
    setBlankSubmitErrorAction('Enter a value in each field')
  }
}

const {
  value: fixedCostName,
  errorMessage: nameError,
  meta: nameMeta
} = useField('name', undefined, {
  initialValue: ''
})
const {
  value: fixedCostCategory,
  errorMessage: categoryError,
  meta: categoryMeta
} = useField('category', undefined, {
  initialValue: ''
})
const {
  value: fixedCostAmount,
  errorMessage: amountError,
  meta: amountMeta
} = useField('amount', undefined, {
  initialValue: null
})
const {
  value: fixedCostPeriod,
  errorMessage: periodError,
  meta: periodMeta
} = useField('period', undefined, {
  initialValue: ''
})

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
          v-model="fixedCostName"
          label="Expense Name"
          type="input"
          id="expense-name"
          name="name"
          class="fixed-cost-dataset basis-1/4 flex-1"
        />
        <span class="error-text">{{ nameError }}</span>
      </div>
      <div>
        <data-select
          v-model="fixedCostCategory"
          label="Category"
          name="category"
          :optionArray="costCategoryOptions"
          class="basis-1/4 flex-1"
        />
        <span class="error-text">{{ categoryError }}</span>
      </div>
      <div>
        <data-input
          v-model="fixedCostAmount"
          label="Expense Amount"
          name="amount"
          class="fixed-cost-dataset basis-1/4 flex-1"
        />
        <span class="error-text">{{ amountError }}</span>
      </div>
      <div>
        <data-select
          v-model="fixedCostPeriod"
          label="Pay Period"
          name="period"
          :optionArray="costPeriodOptions"
          class="basis-1/4 flex-1"
        />
        <span class="error-text">{{ periodError }}</span>
      </div>
    </fieldset>

    <div class="btn-add flex flex-col justify-center">
      <form-button label="Add" type="submit" class="font-bold" />
    </div>
  </Form>
  <span class="error-text" v-show="!fixedFormValid">{{ blankSubmitError }}</span>
</template>
