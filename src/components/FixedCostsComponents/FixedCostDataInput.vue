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
const fixedCostTotal = ref<number>(0)

const handleAddCost = (...values: any) => {
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

defineProps({
  // Must be defined
  modelValue: {
    type: [String, Number]
  },
});

const schema = Yup.object({
  name: Yup.string().required('Name is Required'),
  category: Yup.string().required('Category is Required'),
  amount: Yup.number().required('Value is Required'),
  period: Yup.string().required('Period is Required')
})

const { errors, values, meta } = useForm({
  validationSchema: schema,
})
const { value: fixedCostName, errorMessage: nameError, } = useField('name', values, {
  initialValue: '',
})
const { value: fixedCostCategory, errorMessage: categoryError } = useField('category', values, {
  initialValue: '',
})
const { value: fixedCostAmount, errorMessage: amountError } = useField('amount', values, {
  initialValue: 0
})
const { value: fixedCostPeriod, errorMessage: periodError } = useField('period', values, {
  initialValue: '',
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
      <span class="text-red font-semibold">{{ errors.name }}</span> 
      </div>
      <div>
        <data-select
        v-model="fixedCostCategory"
        label="Category"
        name="category"
        :optionArray="costCategoryOptions"
        class="basis-1/4 flex-1"
      />
      <span class="text-red font-semibold">{{ errors.category }}</span>
      </div>
      <div>
        <data-input
        v-model="fixedCostAmount"
        label="Expense Amount"
        name="amount"
        class="fixed-cost-dataset basis-1/4 flex-1"
      />
      <span class="text-red font-semibold">{{ amountError }}</span>
      </div>
      <div>
        <data-select
        v-model="fixedCostPeriod"
        label="Pay Period"
        name="period"
        :optionArray="costPeriodOptions"
        class="basis-1/4 flex-1"
      />
      <span class="text-red font-semibold">{{ errors.period }}</span>
      </div>
     
    </fieldset>
    
    <div class="btn-add flex flex-col justify-center">
      <form-button label="Add" type="submit" class="font-bold" />
    </div>
    
  </Form>
</template>

<style scoped></style>
