<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import * as Yup from 'yup'
import DataInput from '../FormComponents/DataInput.vue'
import { computed, onMounted, type WritableComputedRef } from 'vue'
import { useForm, useField, Form } from 'vee-validate'
import { storeToRefs } from 'pinia'

const reportStore = useReportStore()
const { addCompanyNameAction, updateInputValidAction } = reportStore
const { companyName } = storeToRefs(reportStore)

onMounted(() => {
  console.log(
    'on mount meta.valid, meta.touched, meta.intitalValue, meta.dirty',
    meta.valid,
    meta.touched,
    meta.initialValue,
    meta.dirty
  )
})

const companyNameInput: WritableComputedRef<string> = computed<string>({
  get: () => companyName.value, //Maintains data in field if user goes back
  set: async (text: string) => {
    company.value = text
    const resp = await companyNameForm.validate()
    addCompanyNameAction(text) // updates Pinia state
    updateInputValidAction(resp.valid) // enables the Next button
    console.log('in companyNameInput metaDirty meta.valid', meta.dirty, meta.valid)

  }
})

const schema = Yup.object({
  company: Yup.string().required('Company Name is Required')
})

const companyNameForm = useForm({
  validationSchema: schema,
  validateOnMount: true,

})

const { value: company, errorMessage: companyError, meta } = useField('company')


</script>

<template>
  <Form >
    <data-input
      v-model.trim="companyNameInput"
      name="company"
      :meta="meta"
      label="Company Name:"
      type="text"
      id="company-name"
    />
  </Form>

  <span class="text-red font-semibold">{{ companyError }}</span>
</template>
