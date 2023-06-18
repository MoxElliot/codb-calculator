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
const { blankSubmitError, variableFormValid } = storeToRefs(reportStore)
const { handleAddCost, addVariableCostAction, setVariableFormValidAction } = reportStore

// let variableFormValid = ref<boolean>(true)

const props = defineProps({
  class: {
    type: String
  }
})

const schema = Yup.object({
  name: Yup.string().required(' '),
  category: Yup.string().required(' '),
  amount: Yup.number().typeError('Please Enter a Number').required(' ')
})

const { resetForm, meta } = useForm({
  validationSchema: schema,
  validateOnMount: true
})

// const handleAddCost = (
//   variableCostName: string,
//   variableCostCategory: string,
//   variableCostAmount: null | number | undefined
// ) => {
//   if (nameMeta.valid && categoryMeta.valid && amountMeta.valid) {
//     variableFormValid.value = true
//     reportStore.addVariableCostAction({
//       id: reportStore.variableCosts.length + 1,
//       name: variableCostName,
//       category: variableCostCategory,
//       amount: variableCostAmount
//     })
//     resetForm()
//   } else {
//     variableFormValid.value = false
//     setBlankSubmitErrorAction('Enter a value in each field')
//   }
// }

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
    class="variable-cost-input border border-black flex flex-row"
    @submit="
      handleAddCost(
        variableCostName,
        variableCostCategory,
        variableCostAmount,
        meta.valid,
        setVariableFormValidAction,
        resetForm,
        addVariableCostAction
      )
    "
  >
    <fieldset :class="class">
      <div>
        <data-input
          v-model="variableCostName"
          label="Expense Name"
          type="input"
          name="name"
          class="basis-1/3 flex-1"
          @input="setVariableFormValidAction(true)"
        />
      </div>
      <div>
        <data-select
          v-model="variableCostCategory"
          label="Category"
          name="category"
          :optionArray="costCategoryOptions"
          class="basis-1/3 flex-1"
          @input="setVariableFormValidAction(true)"
        />
      </div>
      <div>
        <data-input
          v-model="variableCostAmount"
          label="Expense Amount"
          type="number"
          name="amount"
          class="basis-1/3 flex-1"
          @input="setVariableFormValidAction(true)"
        />
      </div>
      <div class="btn-add flex flex-col justify-center" v-if="isOpen === false">
        <form-button label="+ Add Variable Cost" type="submit" class="font-bold" />
      </div>
      <div class="flex flex-row p-1 md:p-4 h-full" v-else>
        <form-button label="Cancel" type="button" class="modal-btn-cancel" @click="closeModal" />
        <form-button label="Add" type="submit" class="modal-btn-add" />
      </div>
    </fieldset>
    <span class="error-text" v-if="!variableFormValid">{{ blankSubmitError }}</span>
    <span class="error-text">{{ amountError }} </span>
  </Form>
</template>
