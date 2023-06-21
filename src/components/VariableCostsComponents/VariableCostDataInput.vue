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
import { useModalStore } from '../../stores/modalStore'

const modalStore = useModalStore()
const { isOpen } = storeToRefs(modalStore)
const { closeModal } = modalStore

const reportStore = useReportStore()
const { blankSubmitError, variableFormValid, variableCosts } = storeToRefs(reportStore)
const { handleAddCost, addVariableCostAction, setVariableFormValidAction } = reportStore

const schema = Yup.object({
  name: Yup.string().required(' '),
  category: Yup.string().required(' '),
  amount: Yup.number().typeError('Please Enter a Number').required(' ')
})

const { resetForm, meta } = useForm({
  validationSchema: schema,
  validateOnMount: true
})

const { value: variableCostName } = useField('name', undefined, {
  initialValue: ''
})
const { value: variableCostCategory } = useField('category', undefined, {
  initialValue: ''
})
const { value: variableCostAmount, errorMessage: amountError } = useField('amount', undefined, {
  initialValue: null
})
</script>

<template>
  <Form
    class="flex flex-col basis-full h-full"
    :valiation-schema="schema"
    @submit="
      handleAddCost(
        variableCostName,
        variableCostCategory,
        variableCostAmount,
        meta.valid,
        setVariableFormValidAction,
        resetForm,
        addVariableCostAction,
        variableCosts
      )
    "
  >
    <fieldset
      :class="
        !isOpen
          ? 'flex flex-row justify-center items-center w-full h-10 md:h-16'
          : 'flex flex-col justify-center items-start h-full text-center'
      "
    >
      <data-input
        v-model="variableCostName"
        placeholder="Name of the cost"
        type="input"
        name="name"
        parentClass="basis-6/18 pr-2 md:pr-6"
        class="border-b border-grey-200"
        @input="setVariableFormValidAction(true)"
      />
      <data-select
        v-model="variableCostCategory"
        name="category"
        :optionArray="costCategoryOptions"
        parentClass="basis-6/18 pr-2 md:pr-6"
        class="border-b border-grey-200"
        @input="setVariableFormValidAction(true)"
      />
      <data-input
        v-model="variableCostAmount"
        placeholder="Amount"
        type="number"
        name="amount"
        parentClass="basis-3/18 pr-2 md:pr-6"
        class="border-b border-grey-200"
        @input="setVariableFormValidAction(true)"
      />
    </fieldset>
    <span class="error-text" v-if="!variableFormValid">{{ blankSubmitError }}</span>
    <span class="error-text">{{ amountError }} </span>
    <form-button
      label="+ Add Variable Cost"
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
