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
import { useModalStore } from '../../stores/modalStore'

const modalStore = useModalStore()
const { isOpen, view } = storeToRefs(modalStore)
const { closeModal } = modalStore

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
  console.log(nameMeta, categoryMeta, amountMeta, periodMeta)
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

<template #body>
  <Form
    class="flex flex-row mt-4"
    :valiation-schema="schema"
    @submit="handleAddCost(fixedCostName, fixedCostCategory, fixedCostAmount, fixedCostPeriod)"
  >
    <fieldset :class="!isOpen ? 'flex flex-row flex-1' : 'flex-flex-col flex-1'">
      <div>
        <data-input
          v-model="fixedCostName"
          label="Expense Name"
          placeholder="Name of the cost"
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

    <div class="btn-add flex flex-col justify-center" v-show="!isOpen">
      <form-button label="Add Fixed Cost" type="submit" class="font-bold" />
    </div>
  </Form>
  <span class="error-text" v-show="!fixedFormValid">{{ blankSubmitError }}</span>
</template>
