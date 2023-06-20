<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import * as Yup from 'yup'
import DataInput from '../FormComponents/DataInput.vue'
import { computed, onMounted, type WritableComputedRef } from 'vue'
import { useForm, useField } from 'vee-validate'
import { storeToRefs } from 'pinia'

const reportStore = useReportStore()
const { addCompanyNameAction, updateInputValidAction } = reportStore
const { companyName, inputValid, blankSubmitError } = storeToRefs(reportStore)

onMounted(() => {
  console.log('in onMounted', company.value)
  if (companyName.value === '') {
    updateInputValidAction(false)
    console.log('in OnMounted If', inputValid.value)
  }
})

const companyNameInput: WritableComputedRef<string> = computed<string>({
  get: () => companyName.value, //Maintains data in field if user goes back
  set: async (text: string) => {
    company.value = text //take this out of the set, no validation will happen
    addCompanyNameAction(text) // updates Pinia state
    const resp = await companyNameForm.validate()
    console.log('inCompanyName INput', resp.errors.company)
    updateInputValidAction(resp.valid) // enables the Next button
  }
})

const schema = Yup.object({
  company: Yup.string().required('Company Name is Required')
})

const companyNameForm = useForm({
  validationSchema: schema,
  initialErrors: {
    company: blankSubmitError.value
  }
})

const { value: company, errorMessage: companyError, meta } = useField('company', schema)
</script>

<template>
  <div class="flex flex-col items-center justify-around basis-full md:basis-3/4 lg:basis-2/4 px-4">
    <div class="flex flex-row">
      <img class="place-self-end" src="../../images/company-name-stars.svg" />
      <p class="font-serif text-center text-grey-300 text-heading2_xs md:text-heading2">
        What is the name of your business?
      </p>
      <img class="place-self-start" src="../../images/company-name-stars.svg" />
    </div>
    <div class="">
      <p class="font-sans text-grey-300 text-body2_xs md:text-body2 text-center mt-2 md:mt-6 px-6">
        Any journey begins with defining a goal. So, as we want to help you better understand the
        financial picture of your photography business, it will be great to start by filling in the
        name of it.
      </p>
    </div>
    <div class="self-starts mt-6">
      <data-input
        v-model.trim="companyNameInput"
        name="company"
        class="input border-bottom-grey text-placeholder placeholder:text-grey-100 sans"
        :meta="meta"
        placeholder="Business Name"
        type="text"
        id="company-name"
      />
      <div>
        <span class="error-text">{{ companyError }}</span>
        <span class="error-text" v-if="!meta.dirty">{{ blankSubmitError }}</span>
      </div>
    </div>
  </div>
</template>
