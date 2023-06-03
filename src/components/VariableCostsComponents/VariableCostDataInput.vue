<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { ref } from 'vue'
import * as Yup from 'yup'
import costCategoryOptions from '../../assets/costCategoryOptions'
import DataInput from '../FormComponents/DataInput.vue'
import DataSelect from '../FormComponents/DataSelect.vue'
import FormButton from '../FormComponents/FormButton.vue'
import { useField, useForm, Form } from 'vee-validate'
import { storeToRefs } from 'pinia'

const reportStore = useReportStore()
const { blankSubmitError } = storeToRefs(reportStore)
const { setBlankSubmitErrorAction } = reportStore

let variableFormValid = ref<boolean>(true)

const schema = Yup.object({
  name: Yup.string().required(' '),
  category: Yup.string().required(' '),
  amount: Yup.number().typeError('Please Enter a Number').required(' ')
})

const { resetForm } = useForm({
  validationSchema: schema,
  validateOnMount: true
})

const handleAddCost = (
  variableCostName: string,
  variableCostCategory: string,
  variableCostAmount: null | number | undefined
) => {
  if (nameMeta.valid && categoryMeta.valid && amountMeta.valid) {
    variableFormValid.value = true
    reportStore.addVariableCostAction({
      id: reportStore.variableCosts.length + 1,
      name: variableCostName,
      category: variableCostCategory,
      amount: variableCostAmount
    })
    resetForm()
  } else {
    variableFormValid.value = false
    setBlankSubmitErrorAction('Enter a value in each field')
  }
}

const {
  value: variableCostName,
  errorMessage: nameError,
  meta: nameMeta
} = useField('name', undefined, {
  initialValue: ''
})
const {
  value: variableCostCategory,
  errorMessage: categoryError,
  meta: categoryMeta
} = useField('category', undefined, {
  initialValue: ''
})
const {
  value: variableCostAmount,
  errorMessage: amountError,
  meta: amountMeta
} = useField('amount', undefined, {
  initialValue: null
})
</script>

<template>
  <Form
    class="variable-cost-input border border-black flex flex-row"
    @submit="handleAddCost(variableCostName, variableCostCategory, variableCostAmount)"
  >
    <fieldset class="variable-cost-fieldset flex flex-row flex-1">
      <div>
        <data-input
          v-model="variableCostName"
          label="Expense Name"
          type="input"
          id="expense-name"
          class="variable-cost-dataset basis-1/3 flex-1"
        />
        <span class="error-text">{{ nameError }}</span>
      </div>
      <div>
        <data-select
          v-model="variableCostCategory"
          label="Category"
          :optionArray="costCategoryOptions"
          class="basis-1/3 flex-1"
        />
        <span class="error-text">{{ categoryError }}</span>
      </div>
      <div>
        <data-input
          v-model="variableCostAmount"
          label="Expense Amount"
          type="number"
          id="expense-amount"
          class="variable-cost-dataset basis-1/3 flex-1"
          min="0"
          step="0.01"
        />
        <span class="error-text">{{ amountError }}</span>
      </div>
    </fieldset>
    <div class="btn-add flex flex-col justify-center">
      <form-button label="Add" type="submit" class="font-bold" />
    </div>
  </Form>
  <span class="error-text" v-show="!variableFormValid">{{ blankSubmitError }}</span>
</template>
