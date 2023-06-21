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
const { blankSubmitError, fixedFormValid } = storeToRefs(reportStore)
const { handleAddCost, addFixedCostAction, setFixedFormValidAction } = reportStore

const fixedCostTotal = ref<number>(0)

const props = defineProps({
  class: {
    type: String
  }
})

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

const { value: fixedCostName } = useField('name', undefined, {
  initialValue: ''
})

const { value: fixedCostCategory } = useField('category', undefined, {
  initialValue: ''
})

const { value: fixedCostAmount, errorMessage: amountError } = useField('amount', undefined, {
  initialValue: null
})

const { value: fixedCostPeriod } = useField('period', undefined, {
  initialValue: ''
})
</script>

<template>
  <Form
    class="flex flex-col basis-full"
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
        fixedCostPeriod,
        fixedCostTotal
      )
    "
  >
    <fieldset class="flex flex-row w-full h-10 md:h-16">
      <data-input
        v-model="fixedCostName"
        placeholder="Name of the cost"
        type="input"
        name="name"
        parentClass="basis-6/24 pr-2 md:pr-6"
        class="text-center border-b border-grey-200"
        @input="setFixedFormValidAction(true)"
      />
      <data-select
        v-model="fixedCostCategory"
        name="category"
        :optionArray="costCategoryOptions"
        parentClass="basis-6/24 pr-2 md:pr-6"
        class="border-b border-grey-200"
        @input="setFixedFormValidAction(true)"
      />
      <data-input
        v-model="fixedCostAmount"
        placeholder="Amount"
        name="amount"
        parentClass="basis-3/24 pr-2 md:pr-6"
        class="text-center border-b border-grey-200 max-w-[120px]"
        @input="setFixedFormValidAction(true)"
      />
      <data-select
        v-model="fixedCostPeriod"
        name="period"
        :optionArray="costPeriodOptions"
        parentClass="basis-3/24 pr-2 md:pr-6"
        class="border-b border-grey-200"
        @input="setFixedFormValidAction(true)"
      />
      <div class="basis-3/24 pr-2 md:pr-6">
        
      </div>
      <div class="basis-3/24 pr-2 md:pr-6"></div>
    </fieldset>

    <span class="error-text" v-if="!fixedFormValid">{{ blankSubmitError }}</span>
    <span class="error-text">{{ amountError }} </span>
    <form-button
      label="+ Add Fixed Cost"
      type="submit"
      class="btn-add font-bold"
      v-if="isOpen === false"
    />

    <div class="flex flex-row p-1 md:p-4 h-full" v-else>
      <form-button label="Cancel" type="button" class="modal-btn-cancel" @click="closeModal" />
      <form-button label="Add" type="submit" class="modal-btn-add" />
    </div>
  </Form>
</template>

<!-- <fieldset class="flex flex-row">
  <data-input
    v-model="fixedCostName"
    placeholder="Name of the cost"
    type="input"
    name="name"
    parentClass="basis-6/24 pr-2 md:pr-6"
    class="text-center border-b border-grey-200"
    @input="setFixedFormValidAction(true)"
  />

  <data-select
    v-model="fixedCostCategory"
    name="category"
    :optionArray="costCategoryOptions"
    parentClass="basis-6/24 pr-2 md:pr-6"
    class="border-b border-grey-200"
    @input="setFixedFormValidAction(true)"
  />

  <data-input
    v-model="fixedCostAmount"
    name="amount"
    parentClass="basis-3/24 pr-2 md:pr-6"
    class="border-b border-grey-200"
    @input="setFixedFormValidAction(true)"
  />

  <data-select
    v-model="fixedCostPeriod"
    name="period"
    :optionArray="costPeriodOptions"
    parentClass="basis-3/24 pr-2 md:pr-6"
    class="border-b border-grey-200"
    @input="setFixedFormValidAction(true)"
  />
  <div class="basis-3/24 pr-2 md:pr-6">
    <p class="border-b border-grey-200">${{ fixedCostTotal }}</p>
  </div>
  <div class="basis-3/24 pr-2 md:pr-6">
  </div>
</fieldset>
 -->
