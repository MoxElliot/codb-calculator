<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import DataInput from '../FormComponents/DataInput.vue'
import { useForm, useField } from 'vee-validate'
import * as Yup from 'yup'
import { computed, onMounted, type WritableComputedRef } from 'vue'

const reportStore = useReportStore()
const { companyName, payPerMonth, savingsPerMonth, blankSubmitError } = storeToRefs(reportStore)
const { addPayPerMonthAction, addSavingsPerMonthAction, updateInputValidAction } = reportStore

// onMounted(() => {
//   if (payPerMonth.value === 0 || savingsPerMonth.value === 0) {
//     updateInputValidAction(false)
//   }
// })

const payPerMonthInput: WritableComputedRef<number> = computed<number>({
  get: () => payPerMonth.value,
  set: async (num: number) => {
    pay.value = num
    addPayPerMonthAction(num)
    const resp = await ownerDrawForm.validate()
    updateInputValidAction(resp.valid)
  }
})

const savingsPerMonthInput: WritableComputedRef<number> = computed<number>({
  get: () => savingsPerMonth.value,
  set: async (num: number) => {
    savings.value = num
    addSavingsPerMonthAction(num)
    const resp = await ownerDrawForm.validate()
    updateInputValidAction(resp.valid)
  }
})

const schema = Yup.object({
  pay: Yup.number().typeError('Please Enter a Number').required(' '),
  savings: Yup.number().typeError('Please Enter a Number').required(' ')
})

const ownerDrawForm = useForm({
  validationSchema: schema,
  validateOnMount: true
})

const { value: pay, errorMessage: payError, meta: payMeta } = useField('pay')
const { value: savings, errorMessage: savingsError, meta: savingsMeta } = useField('savings')
</script>

<template>
  <div class="flex flex-col text-center items-center justify-center basis-full h-full lg:mt-16 ">
    <div
      class="flex flex-row justify-center items-center text-heading2_xs md:text-heading text-grey-300 font-serif md:basis-1/6 md:w-6/10 md:mb-4"
    >
      <p class="">
        Owner's draw for <span>{{ companyName }}</span>
      </p>
      <img
        src="../../images/fixed-cost-calandar.svg"
        alt="Calandar"
        class="hidden sm:inline sm:px-3"
      />
    </div>
    <div class="text-body2_xs md:text-body2 text-grey-300 basis-1/6 w-9/10 ">
      <p>Great job! Your CobD Calculation is Almost Finished!</p>
      <p>Don't forget, you'll need to pay yourself and save some money after all that hard work!</p>
    </div>
    <div
    class="lg:basis-full flex flex-col items-center w-screen md:w-8/10 md:px-4 overflow-auto"
    >
      <div class="flex flex-col font-sans text-grey-300 text-body w-7/10 md:w-full h-full mt-4">
        <div class="flex flex-col min-h-100">
          <data-input
            v-model="payPerMonthInput"
            label="On average, how much will you be paying yourself per month?"
            parentClass="flex flex-col sm:flex-row items-center justify-between md:mt-6"
            class="pl-3 text-center border-b border-grey-200"
            :class="{ 'border-error': payError && blankSubmitError }"
            type="number"
          />
          <span class="error-text md:text-end">{{ payError }}</span>
        </div>
        <div class="flex flex-col min-h-100">
          <data-input
            v-model="savingsPerMonthInput"
            label="On average, how much do you plan to save per month?"
            parentClass="flex flex-col sm:flex-row items-center justify-between md:mt-6"
            class="pl-3 text-center border-b border-grey-200"
            :class="{ 'border-error': savingsError && blankSubmitError }"
            type="number"
          />
          <span class="error-text md:text-end">{{ savingsError }}</span>
        </div>
        <span class="error-text" v-if="!payMeta.dirty || !savingsMeta.dirty">
          {{ blankSubmitError }}
        </span>
      </div>
    </div>
  </div>
</template>
