<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import * as Yup from 'yup'
import DataInput from '../FormComponents/DataInput.vue'
import { computed, onMounted, type WritableComputedRef } from 'vue'
import { useForm, useField } from 'vee-validate'
import { storeToRefs } from 'pinia'

const reportStore = useReportStore()
const { addCompanyNameAction, updateInputValidAction } = reportStore
// const { companyName } = storeToRefs(reportStore)

onMounted(() => {
  company.value = ''
  updateInputValidAction(false)
})

//https://codesandbox.io/s/3mebq?file=/src/App.vue 

const companyName: WritableComputedRef<string> = computed({
  get: () => companyName.value,
  set: async (text: string) => {
    company.value = text
    const resp = await companyNameForm.validate()
    console.log('in companyNameInput set, text', resp.valid, text, companyNameForm.validate())
    addCompanyNameAction(text) //should replace blur
    updateInputValidAction(resp.valid)
  }
})

const schema = Yup.object({
  company: Yup.string().required('Required!')
})

const companyNameForm = useForm({
  validationSchema: schema
})

const { value: company, errorMessage: companyError, meta } = useField('company')
</script>

<template>
  <data-input
    v-model="companyName"
    name="company"
    label="Company Name:"
    type="text"
    id="company-name"
  />
  <span class="text-red-700 font-semibold" v-if="companyError && meta.touched">{{ companyError }}</span>
</template>
