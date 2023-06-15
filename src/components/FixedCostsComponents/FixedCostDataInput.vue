<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { computed, onUpdated, ref } from 'vue'
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
const { blankSubmitError, fixedFormValid } = storeToRefs(reportStore)
const { setBlankSubmitErrorAction, handleAddCost, addFixedCostAction, setFixedFormValidAction } =
  reportStore

const fixedCostTotal = ref<number>(0)

// let fixedFormValid = ref<boolean>(true)

const schema = Yup.object({
  name: Yup.string().required(' '),
  category: Yup.string().required(' '),
  amount: Yup.number().typeError('Please Enter a Number for an Expense').required(' '),
  period: Yup.string().required(' ')
})
const { resetForm, meta } = useForm({
  validationSchema: schema
  // validateOnMount: true
})

const {
  value: fixedCostName,
  errorMessage: nameError,
  meta: nameMeta,
  handleBlur: nameHandleBlur
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
  meta: amountMeta,
} = useField('amount', undefined, {
  initialValue: null
})
const {
  value: fixedCostPeriod,
  errorMessage: periodError,
  meta: periodMeta,
} = useField('period', undefined, {
  initialValue: ''
})

// const validationListeners = computed(() => {
//   // If the field is valid or have not been validated yet
//   // lazy
//   if (!errorMessage.value) {
//     return {
//       blur: handleChange,
//       change: handleChange,
//       // disable `shouldValidate` to avoid validating on input
//       input: (e: any) => handleChange(e, false),
//     };
//   }
//   // Aggressive
//   return {
//     blur: handleChange,
//     change: handleChange,
//     input: handleChange, // only switched this
//   };
// });
// let allValid = nameMeta.valid && categoryMeta.valid && amountMeta.valid && periodMeta.valid

// onUpdated(() => {
//   allValid = nameMeta.valid && categoryMeta.valid && amountMeta.valid && periodMeta.valid
//   console.log('hello', allValid)
// })

// console.log('all Valid FixedCost', allValid, nameMeta.valid, categoryMeta.valid, amountMeta.valid, periodMeta.valid)
</script>

<template #body>
  <Form
    class="flex flex-col mt-4 min-h-[120px]"
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
          @blur="nameHandleBlur"
          @input="setFixedFormValidAction(true)"
        />
        
      </div>
      <div>
        <data-select
          v-model="fixedCostCategory"
          label="Category"
          name="category"
          :optionArray="costCategoryOptions"
          class="basis-1/4 flex-1"
          @input="setFixedFormValidAction(true)"
        />
        
      </div>
      <div>
        <data-input
          v-model="fixedCostAmount"
          label="Expense Amount"
          name="amount"
          class="fixed-cost-dataset basis-1/4 flex-1"
          @input="amountMeta.valid ? setFixedFormValidAction(true) : setFixedFormValidAction(false)"
        />
        
      </div>
      <div>
        <data-select
          v-model="fixedCostPeriod"
          label="Pay Period"
          name="period"
          :optionArray="costPeriodOptions"
          class="basis-1/4 flex-1"
          @input="setFixedFormValidAction(true)"
        />
        
      </div>
      <div class="btn-add flex flex-col justify-center" v-if="!isOpen">
      <form-button label="Add Fixed Cost" type="submit" class="font-bold" />
    </div>
    <div class="flex flex-row p-4" v-if="isOpen">
      <div>
        <form-button
          label="cancel"
          @click="closeModal"
          class="border rounded-main text-grey-300 font-sans uppercase text-btn p-btn m-4 gap-2.5 w-32 h-48"
        />
      </div>
      <div>
        <form-button
          label="Add"
          type="submit"
          class="bg-aqua-200 rounded-main text-primary-white font-sans uppercase text-btn p-btn m-4 gap-2.5 w-32 h-48"
        />
      </div>
    </div>
    </fieldset>
    <!-- <span class="error-text">{{ periodError }}</span>
    <span class="error-text">{{ amountError }}</span>
    <span class="error-text">{{ categoryError }}</span>
    <span class="error-text">{{ nameError }}</span> -->
    <!-- <span class="error-text">{{ errorMessage }}</span> -->
    <span class="error-text" v-if="!fixedFormValid">{{ amountError || blankSubmitError }}</span>
  </Form>
</template>
