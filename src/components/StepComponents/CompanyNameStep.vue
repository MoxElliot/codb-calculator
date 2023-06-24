<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import * as Yup from 'yup'
import DataInput from '../FormComponents/DataInput.vue'
import { computed, onMounted, onUpdated, type WritableComputedRef } from 'vue'
import { useForm, useField } from 'vee-validate'
import { storeToRefs } from 'pinia'

const reportStore = useReportStore()
const { addCompanyNameAction, updateInputValidAction, setBlankSubmitErrorAction } = reportStore
const { companyName, inputValid, blankSubmitError } = storeToRefs(reportStore)

onMounted(() => {
  if (companyName.value === '') {
    updateInputValidAction(false)
  }
})

const companyNameInput: WritableComputedRef<string> = computed<string>({
  get: () => companyName.value, //Maintains data in field if user goes back
  set: async (text: string) => {
    company.value = text //take this out of the set, no validation will happen
    addCompanyNameAction(text) // updates Pinia state
    const resp = await companyNameForm.validate()
    updateInputValidAction(resp.valid) // enables the Next button
    setBlankSubmitErrorAction('')
  }
})

const schema = Yup.object({
  company: Yup.string().required('Company Name is Required')
})

const companyNameForm = useForm({
  validationSchema: schema,
  validateOnMount: false
})

const { value: company, errorMessage: companyError, meta } = useField('company', schema)
</script>

<template>
  <div  class="flex basis-full justify-center items-center h-full" >
  <div class="flex flex-col items-center justify-center md:basis-3/4 px-4 h-full">
    <div class="flex flex-row mb-4 md:mb-16">
      <img class="place-self-end" src="../../images/company-name-stars.svg" />
      <p class="font-serif text-center text-grey-300 text-heading2_xs md:text-heading2">
        What is the name of your business?
      </p>
      <img class="place-self-start" src="../../images/company-name-stars.svg" />
    </div>
    <div class="mb-4 md:mb-16">
      <p class="font-sans text-grey-300 text-body2_xs md:text-body2 text-center px-6">
        Any journey begins with defining a goal. So, as we want to help you better understand the
        financial picture of your photography business, it will be great to start by filling in the
        name of it.
      </p>
    </div>
    <div class="flex flex-col items-center w-8/10 h-16">
      <div class="border-b border-b-grey-100">
        <data-input
          v-model.trim="companyNameInput"
          name="company"
          parentClass=""
          class="font-sans text-grey-300 text-body2_xs  md:text-body2 "
          :class="{ 'border-error': companyError || blankSubmitError }"
        />
      </div>
      <div class="self-start">
        <span class="error-text" v-if="!meta.dirty">{{ blankSubmitError }}</span>
        <span class="error-text">{{ companyError }}</span>
      </div>
    </div>
  </div>
</div>
</template>
