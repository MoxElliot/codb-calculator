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
const { isOpen } = storeToRefs(modalStore)
const { closeModal } = modalStore

const reportStore = useReportStore()
const { blankSubmitError, fixedFormValid, fixedCosts } = storeToRefs(reportStore)
const { handleAddCost, addFixedCostAction, setFixedFormValidAction } = reportStore

const fixedCostTotal = ref<number>(0)

const schema = Yup.object({
  name: Yup.string().required(' '),
  category: Yup.string().required(' '),
  amount: Yup.number().typeError('Please Enter a Number for an Expense').required(' '),
  period: Yup.string().required(' ')
})

const { resetForm, meta } = useForm({
  validationSchema: schema,
  validateOnMount: true
})

const { value: fixedCostName, errorMessage: nameError } = useField('name', undefined, {
  initialValue: ''
})

const { value: fixedCostCategory, errorMessage: categoryError } = useField('category', undefined, {
  initialValue: ''
})

const { value: fixedCostAmount, errorMessage: amountError } = useField('amount', undefined, {
  initialValue: null
})

const { value: fixedCostPeriod, errorMessage: periodError } = useField('period', undefined, {
  initialValue: ''
})
</script>

<template>
  <Form
    class="flex flex-col basis-full h-full"
    :valiation-schema="schema"
    @submit="
      handleAddCost(
        fixedCostName,
        fixedCostCategory,
        fixedCostAmount,
        meta.valid,
        setFixedFormValidAction,
        resetForm,
        addFixedCostAction,
        fixedCosts,
        fixedCostPeriod,
        fixedCostTotal
      )
    "
  >
    <fieldset
      :class="
        !isOpen
          ? 'flex flex-row w-full h-10 md:h-16 mt-4 '
          : 'flex flex-col basis-full justify-center items-center h-full text-center'
      "
    >
      <data-input
        v-model="fixedCostName"
        placeholder="Name of the cost"
        name="name"
        parentClass="basis-6/24 pr-2 md:pr-6"
        class="text-center border-b border-grey-200"
        :class="{ 'border-error': nameError && blankSubmitError }"
        @input="setFixedFormValidAction(true)"
      />
      <data-select
        v-model="fixedCostCategory"
        name="category"
        :optionArray="costCategoryOptions"
        parentClass="basis-6/24  pr-2 md:pr-6"
        class="border-b border-grey-200"
        :class="{ 'border-error': categoryError && blankSubmitError }"
        @input="setFixedFormValidAction(true)"
      />
      <data-input
        v-model="fixedCostAmount"
        placeholder="Amount"
        name="amount"
        parentClass="basis-3/24 pr-2 md:pr-6"
        class="text-center border-b border-grey-200 w-[120px]"
        :class="{ 'border-error': amountError && blankSubmitError }"
        @input="setFixedFormValidAction(true)"
      />
      <data-select
        v-model="fixedCostPeriod"
        name="period"
        :optionArray="costPeriodOptions"
        parentClass="basis-3/24 pr-2 md:pr-6"
        class="border-b border-grey-200"
        :class="{ 'border-error': periodError && blankSubmitError }"
        @input="setFixedFormValidAction(true)"
      />
      <div class="basis-3/24 pr-4 md:pr-16"></div>
    </fieldset>
    <div class="flex flex-col justify-between sm:h-[100px]">
      <span class="error-text" v-if="!fixedFormValid">{{ blankSubmitError }}</span>
      <span class="error-text">{{ amountError }} </span>
      <form-button
        label="+ Add Fixed Cost"
        class="btn-add font-bold"
        v-if="isOpen === false"
      />
      <div class="flex flex-row p-1 md:p-4 h-full" v-else>
        <form-button label="Cancel" type="button" class="modal-btn-cancel" @click="closeModal" />
        <form-button label="Add" type="submit" class="modal-btn-add" />
      </div>
    </div>
  </Form>
</template>
