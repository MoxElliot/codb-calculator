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
  },
})

const schema = Yup.object({
  name: Yup.string().required(' '),
  category: Yup.string().required(' '),
  amount: Yup.number().typeError('Please Enter a Number for an Expense').required(' '),
  period: Yup.string().required(' ')
})
const { resetForm, meta } = useForm({
  validationSchema: schema
})

const { value: fixedCostName } = useField('name', undefined, {
  initialValue: ''
})
const { value: fixedCostCategory } = useField('category', undefined, {
  initialValue: ''
})
const {
  value: fixedCostAmount,
  errorMessage: amountError,
  meta: amountMeta
} = useField('amount', undefined, {
  initialValue: null
})
const { value: fixedCostPeriod } = useField('period', undefined, {
  initialValue: ''
})


</script>

<template #body>
  <Form
    class="flex flex-col mt-4 min-h-[145px]"
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
    <fieldset :class="class">
      <div>
        <data-input
          v-model="fixedCostName"
          label="Expense Name"
          placeholder="Name of the cost"
          type="input"
          name="name"
          class="fixed-cost-dataset basis-1/4 flex-1"
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
          @input="setFixedFormValidAction(true)"
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
      <div class="btn-add flex flex-col justify-center" v-if="isOpen === false">
        <form-button label="Add Fixed Cost" type="submit" class="font-bold" />
      </div>
      <div class="flex flex-row p-4" v-else>
        
          <form-button
            label="cancel"
            type="button"
            class="border rounded-main text-grey-300 font-sans uppercase text-btn p-btn m-4 gap-2.5 w-32 h-48"
            @click="closeModal"
          />
  
          <form-button
            label="Add"
            type="submit"
            class="bg-aqua-200 rounded-main text-primary-white font-sans uppercase text-btn p-btn m-4 gap-2.5 w-32 h-48"
          />
       
      </div>
    </fieldset>
    <span class="error-text" v-if="!fixedFormValid">{{ blankSubmitError }}</span>
    <span class="error-text">{{ amountError }} </span>
  </Form>
</template>
