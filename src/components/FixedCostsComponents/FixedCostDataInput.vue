<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import * as Yup from 'yup'
import costCategoryOptions from '../../assets/costCategoryOptions'
import costPeriodOptions from '../../assets/costPeriodOptions'
import DataInput from '../FormComponents/DataInput.vue'
import FormButton from '../FormComponents/FormButton.vue'
import DataSelect from '../FormComponents/DataSelect.vue'
import { useField, useForm, Form } from 'vee-validate'
import { storeToRefs } from 'pinia'
import { useModalStore } from '../../stores/modalStore'
import uniqueId from 'lodash.uniqueid'

const modalStore = useModalStore()
const { formModalIsOpen, formModalType } = storeToRefs(modalStore)
const { closeFormModal } = modalStore

const reportStore = useReportStore()
const { blankSubmitError, fixedFormValid, fixedCosts, selectedCost, totalFixedCosts } =
  storeToRefs(reportStore)
const { handleAddCost, addFixedCostAction, setFixedFormValidAction, replaceFixedCostAction } =
  reportStore

const props = defineProps<{
  id?: string
  name?: string
  category?: string
  amount?: number
  frequency?: string
  individualTotal?: number
}>()

const schema = Yup.object({
  name: Yup.string().required(' '),
  category: Yup.string().required(' '),
  amount: Yup.number().typeError('Please Enter a Number for an Expense').required(' '),
  frequency: Yup.string().required(' ')
})

const { resetForm, meta } = useForm({
  validationSchema: schema,
  validateOnMount: true
})

const { value: fixedCostName, errorMessage: nameError } = useField('name', undefined, {
  initialValue: props.name
})

const { value: fixedCostCategory, errorMessage: categoryError } = useField('category', undefined, {
  initialValue: props.category
})

const { value: fixedCostAmount, errorMessage: amountError } = useField('amount', undefined, {
  initialValue: props.amount
})

const { value: fixedCostFrequency, errorMessage: frequencyError } = useField(
  'frequency',
  undefined,
  {
    initialValue: props.frequency
  }
)
</script>

<template>
  <Form
    :class="
      !formModalIsOpen ? 'flex flex-col basis-full h-full' : 'flex flex-col items-around h-80'
    "
    :valiation-schema="schema"
    @submit="
      formModalType === 'edit'
        ? replaceFixedCostAction(
            selectedCost.id,
            fixedCostName,
            fixedCostCategory,
            fixedCostAmount,
            meta.valid,
            setFixedFormValidAction,
            resetForm,
            fixedCostFrequency,
            totalFixedCosts
          )
        : handleAddCost(meta.valid, setFixedFormValidAction, resetForm, addFixedCostAction, {
            id: uniqueId().toString(),
            name: fixedCostName,
            category: fixedCostCategory,
            amount: fixedCostAmount,
            frequency: fixedCostFrequency,
            individualTotal: totalFixedCosts
          })
    "
  >
    <fieldset
      :class="
        !formModalIsOpen
          ? 'flex flex-row h-10 md:h-16 mt-4 md:mt-8 w-screen sm:w-full text-bodyTable text-grey-300 font-sans'
          : 'flex flex-col basis-full justify-around items-center text-center text-bodyTable text-grey-300 font-sans'
      "
    >
      <data-input
        v-model="fixedCostName"
        placeholder="Name of the cost"
        name="name"
        :parentClass="!formModalIsOpen ? 'pr-2 md:pr-6' : ''"
        class="text-center border-b border-grey-200 basis-6/24"
        :class="{ 'border-error': nameError && blankSubmitError }"
        @input="setFixedFormValidAction(true)"
      />
      <data-select
      v-model="fixedCostCategory"
        label="category"
        name="frequency"
        :options="costCategoryOptions"
        class="flex text-center border-b border-grey-200 bg-primary-white basis-6/24 "
        :class="{ 'border-error': categoryError && blankSubmitError }"
        @input="setFixedFormValidAction(true)"
      />
      <data-input
        v-model="fixedCostAmount"
        placeholder="Amount"
        name="amount"
        :parentClass="!formModalIsOpen ? ' pr-2 md:pr-6' : ''"
        class="text-center border-b border-grey-200 basis-3/24 "
        :class="{ 'border-error': amountError && blankSubmitError }"
        @input="setFixedFormValidAction(true)"
      />
      <data-select
        v-model="fixedCostFrequency"
        label="category"
        name="frequency"
        :options="costPeriodOptions"
        class="flex text-center border-b border-grey-200 bg-primary-white basis-6/24"
        :class="{ 'border-error': categoryError && blankSubmitError }"
        @input="setFixedFormValidAction(true)"
      />
      <div :parentClass="!formModalIsOpen ? 'basis-6/24 pr-2 md:pr-6' : ''"></div>
    </fieldset>
    <div class="flex flex-col justify-between sm:h-[100px]">
      <span class="error-text text-center" v-if="!fixedFormValid">{{ blankSubmitError }}</span>
      <span class="error-text text-center">{{ amountError }} </span>
      <form-button
        label="+ Add Fixed Cost"
        class="btn-add font-bold"
        v-if="formModalIsOpen === false"
      />
      <div class="flex flex-row justify-center p-1 md:p-4 h-full" v-else>
        <form-button
          label="Cancel"
          type="button"
          class="modal-btn-cancel"
          @click="closeFormModal"
        />
        <form-button
          :label="formModalType === 'add' ? 'Add' : 'Edit'"
          type="submit"
          class="modal-btn-add"
        />
      </div>
    </div>
  </Form>
</template>
