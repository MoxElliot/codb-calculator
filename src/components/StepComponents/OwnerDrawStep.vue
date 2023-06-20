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

onMounted(() => {
  if (payPerMonth.value === 0 || savingsPerMonth.value === 0) {
    updateInputValidAction(false)
  }
})

const payPerMonthInput: WritableComputedRef<number> = computed<number>({
  get: () => payPerMonth.value, //Maintains data in field if user goes back
  set: async (num: number) => {
    pay.value = num //take this out of the set, no validation will happen
    addPayPerMonthAction(num) // updates Pinia state
    const resp = await ownerDrawForm.validate()
    updateInputValidAction(resp.valid) // enables the Next button
  }
})

const savingsPerMonthInput: WritableComputedRef<number> = computed<number>({
  get: () => savingsPerMonth.value, //Maintains data in field if user goes back
  set: async (num: number) => {
    savings.value = num //take this out of the set, no validation will happen
    addSavingsPerMonthAction(num) // updates Pinia state
    const resp = await ownerDrawForm.validate()
    updateInputValidAction(resp.valid) // enables the Next button
  }
})

const schema = Yup.object({
  pay: Yup.number().typeError('Please Enter a Number').required('All Fields Required'),
  savings: Yup.number().typeError('Please Enter a Number').required('All Fields Required')
})

const ownerDrawForm = useForm({
  validationSchema: schema
})

const { value: pay, errorMessage: payError, meta: payMeta } = useField('pay')
const { value: savings, errorMessage: savingsError, meta: savingsMeta } = useField('savings')
</script>

<template>
  <div class="flex flex-col basis-full justify-center items-center text-center">
    <div
      class="flex flex-row justify-center items-center text-heading2_xs md:text-heading text-grey-300 font-serif md:basis-1/6 md:w-6/10 md:mb-8"
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
    <div class="text-grey-300 text-body2_xs md:text-body2 basis-1/6 w-8/10 md:w-6/10">
      <p>Great job! Your CobD Calculation is Almost Finished!</p>
      <p>Don't forget, you'll need to pay yourself and save some money after all that hard work!</p>
    </div>
    <div class="basis-full flex flex-col items-center justify-center w-6/10 sm:w-5/10">
      <div class="font-sans text-grey-300 text-body mt-2 md:mt-6 px-6">
        <div>
          <data-input
            v-model="payPerMonthInput"
            label="On average, how much will you be paying yourself per month?"
            parentClass="flex flex-row"
            class="px-3"
            type="number"
            id="pay-per-month"
          />
        </div>
        <div>
          <data-input
            v-model="savingsPerMonthInput"
            label="On average, how much do you plan to save per month?"
            parentClass="flex flex-row"
            class="px-3"
            type="number"
            id="savings-per-month"
          />
        </div>
        <span class="error-text">{{ payError }}</span>
        <span class="error-text">{{ savingsError }}</span>
        <span class="error-text" v-if="!payMeta.dirty || !savingsMeta.dirty">
          {{ blankSubmitError }}
        </span>
      </div>
    </div>
  </div>
</template>
