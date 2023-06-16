<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import DataInput from '../FormComponents/DataInput.vue'
import { useForm, useField } from 'vee-validate'
import * as Yup from 'yup'
import { computed, onMounted, type WritableComputedRef } from 'vue'

const reportStore = useReportStore()
const { payPerMonth, savingsPerMonth, blankSubmitError } = storeToRefs(reportStore)
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
  <div class="basis-full flex flex-col justify-center items-center">
    <div>
      <data-input
        v-model="payPerMonthInput"
        label="On average, how much will you be paying yourself per month?"
        parentClass="flex flex-row"
        type="number"
        id="pay-per-month"
      />
    </div>
    <div>
      <data-input
        v-model="savingsPerMonthInput"
        label="On average, how much do you plan to save per month?"
        parentClass="flex flex-row"
        type="number"
        id="savings-per-month"
      />
    </div>
    <span class="error-text">{{ payError }}</span>
    <span class="error-text">{{ savingsError }}</span>
    <span class="error-text" v-if="!payMeta.dirty || !savingsMeta.dirty">{{
      blankSubmitError
    }}</span>
  </div>
</template>
