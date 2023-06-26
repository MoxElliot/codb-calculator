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
const { formModalIsOpen, formModalType  } = storeToRefs(modalStore)
const { closeFormModal } = modalStore

const reportStore = useReportStore()
const { blankSubmitError, variableFormValid, variableCosts, editVariableCost } = storeToRefs(reportStore)
const { handleAddCost, addVariableCostAction, setVariableFormValidAction, replaceVariableCostAction  } = reportStore

const props = defineProps<{
  id?: string
  name?: string
  category?: string
  amount?: number | null
}>()

const schema = Yup.object({
  name: Yup.string().required(' '),
  category: Yup.string().required(' '),
  amount: Yup.number().typeError('Please Enter a Number').required(' ')
})

const { resetForm, meta } = useForm({
  validationSchema: schema,
  validateOnMount: true
})

const { value: variableCostName, errorMessage: nameError  } = useField('name', undefined, {
  initialValue: props.name
})
const { value: variableCostCategory, errorMessage: categoryError  } = useField('category', undefined, {
  initialValue: props.category
})
const { value: variableCostAmount, errorMessage: amountError } = useField('amount', undefined, {
  initialValue: props.amount
})
</script>

<template>
  <Form
    class="flex flex-col basis-full h-full"
    :valiation-schema="schema"
    @submit="formModalType === 'add'
      ? handleAddCost(
        variableCostName,
        variableCostCategory,
        variableCostAmount,
        meta.valid,
        setVariableFormValidAction,
        resetForm,
        addVariableCostAction,
        variableCosts
      )
      :replaceVariableCostAction(
            editVariableCost[0].id,
            variableCostName,
            variableCostCategory,
            variableCostAmount,
            meta.valid,
            setVariableFormValidAction,
            resetForm,
          )
    "
  >
    <fieldset
      :class="
        !formModalIsOpen
          ? 'flex flex-row w-full h-10 md:h-16 mt-4 '
          : 'flex flex-col basis-full justify-center items-center h-full text-center'
      "
    >
      <data-input
        v-model="variableCostName"
        placeholder="Name of the cost"
        name="name"
        parentClass="basis-6/18 pr-2 md:pr-6"
        class="text-center border-b border-grey-200"
        :class="{ 'border-error': nameError && blankSubmitError }"
        @input="setVariableFormValidAction(true)"
      />
      <data-select
        v-model="variableCostCategory"
        name="category"
        :optionArray="costCategoryOptions"
        parentClass="basis-6/18 pr-2 md:pr-6"
        class="border-b border-grey-200"
        :class="{ 'border-error': categoryError && blankSubmitError }"
        @input="setVariableFormValidAction(true)"
      />
      <data-input
        v-model="variableCostAmount"
        placeholder="$ Amount"
        type="number"
        name="amount"
        parentClass="basis-3/18 pr-2 md:pr-6"
        class="text-center border-b border-grey-200"
        :class="{ 'border-error': amountError && blankSubmitError }"
        @input="setVariableFormValidAction(true)"
      />
    </fieldset>
    <div class="flex flex-col justify-between sm:h-[100px]">
      <span class="error-text" v-if="!variableFormValid">{{ blankSubmitError }}</span>
      <span class="error-text">{{ amountError }} </span>
      <form-button
        label="+ Add Variable Cost"
        class="btn-add font-bold"
        v-if="formModalIsOpen === false"
      />
      <div class="flex flex-row p-1 md:p-4 h-full" v-else>
        <form-button label="Cancel" type="button" class="modal-btn-cancel" @click="closeFormModal" />
        <form-button :label="formModalType === 'add' ? 'Add' : 'Edit'" type="submit" class="modal-btn-add" />
      </div>
    </div>
  </Form>
</template>
