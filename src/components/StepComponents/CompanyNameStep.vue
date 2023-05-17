<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import * as Yup from 'yup'
import DataInput from '../FormComponents/DataInput.vue'
import { computed, onMounted, type WritableComputedRef } from 'vue'
import { useForm, useField } from 'vee-validate'
import { storeToRefs } from 'pinia'

const reportStore = useReportStore()
const { addCompanyNameAction, updateInputValidAction } = reportStore
const { companyName } = storeToRefs(reportStore)

onMounted(() => {
  updateInputValidAction(companyName.value === '' ? false : true )
})

const companyNameInput: WritableComputedRef<string> = computed<string>({
  get: () => companyName.value,  //Maintains data in field if user goes back
  set:  (text:string) => {
    company.value = text
    addCompanyNameAction(text)    // updates Pinia state
    updateInputValidAction(true)  // enables the Next button
  }
})

const schema = Yup.object({
  company: Yup.string().required('Company Name is Required')
})

useForm({
  validationSchema: schema,
  initialErrors: {   //Turns off the errorMessage when user first navigates to the page
    company: ''
  },
})

const { value: company, errorMessage: companyError } = useField('company')

</script>

<template>
  <data-input
    v-model.trim="companyNameInput"
    name="company"
    label="Company Name:"
    type="text"
    id="company-name"
    
  />
  <span class="text-red font-semibold">{{ companyError }}</span>
</template>
