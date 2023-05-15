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
  company.value = ''
  updateInputValidAction(companyName.value === '' ? false : true)
  console.log("meta", meta.touched, meta.dirty)
})

//https://codesandbox.io/s/3mebq?file=/src/App.vue

const companyNameInput: WritableComputedRef<string> = computed({
  get: () => companyNameInput.value,
  set: async (text: string) => {
    company.value = text
    const resp = await companyNameInputForm.validate()
    // console.log('in companyNameInput set, text', resp.valid, text, companyNameInputForm.validate())
    addCompanyNameAction(text) //should replace blur
    updateInputValidAction(resp.valid)
  }
})

const schema = Yup.object({
  company: Yup.string().required('Required!')
})

const companyNameInputForm = useForm({
  validationSchema: schema
})

const { value: company, errorMessage: companyError, meta } = useField('company')

//computed conditional v-model

const companyNameVModel = computed({
  get() {
    if (companyName.value === '') {
      return companyNameInput.value
    } else {
      return companyName.value
    }
  },
  set(val) {
    if (companyName.value === '') {
      companyNameInput.value = val
    } else {
      companyName.value = val
    }
  }
})

console.log("In companyNameStep", companyNameInput.value)
</script>

<template>
  <data-input
    v-model="companyNameVModel"
    name="company"
    label="Company Name:"
    type="text"
    id="company-name"
  />
  <span class="text-red-700 font-semibold" v-if="companyError && meta.touched">{{
    companyError
  }}</span>
</template>
