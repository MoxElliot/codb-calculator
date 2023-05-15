<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import * as Yup from 'yup'
import DataInput from '../FormComponents/DataInput.vue'
import { computed, onMounted, onUpdated, type WritableComputedRef } from 'vue'
import { useForm, useField } from 'vee-validate'
import { storeToRefs } from 'pinia'

const reportStore = useReportStore()
const { addCompanyNameAction, updateInputValidAction } = reportStore
const { companyName } = storeToRefs(reportStore)

onMounted(() => {
  updateInputValidAction(companyName.value === '' ? false : true)
})

onUpdated(() => {
  console.log('meta', meta.validated)
})

const companyNameInput: WritableComputedRef<string> = computed({
  get: () => companyName.value,
  set: async (text: string) => {
    company.value = text
    const resp = await companyNameInputForm.validate()
    addCompanyNameAction(text)
    updateInputValidAction(resp.valid)
  }
})

const schema = Yup.object({
  company: Yup.string().required('Required!')
})

const companyNameInputForm = useForm({
  validationSchema: schema,
  initialValues: {
    company: companyName
  },
  initialErrors: {
    company: ''
  }
})

const { value: company, errorMessage: companyError, meta } = useField('company')
</script>

<template>
  <data-input
    v-model.trim="companyNameInput"
    name="company"
    label="Company Name:"
    type="text"
    id="company-name"
  />
  <span class="text-red-700 font-semibold">{{ companyError }}</span>
</template>
