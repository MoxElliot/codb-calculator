<script setup lang="ts">
import { useReportStore } from '../../stores/reportStore'
import DataInput from '../FormComponents/DataInput.vue'
import { useForm, useField } from 'vee-validate'
import * as Yup from 'yup'
import { computed, onMounted, type WritableComputedRef } from 'vue'
import { storeToRefs } from 'pinia'

const reportStore = useReportStore()
const { addUserEmailAction, updateInputValidAction } = reportStore
const { userEmail } = storeToRefs(reportStore)

onMounted(() => {
  // email.value = ''
  updateInputValidAction(false)
})

const userEmailInput: WritableComputedRef<string> = computed({
  get: () => userEmail.value,
  set: async (text: string) => {
    email.value = text
    const resp = await userEmailForm.validate()
    console.log('in userEmail set', resp.valid)
    addUserEmailAction(text) //should replace blur
    updateInputValidAction(resp.valid)
  }
})

const schema = Yup.object({
  email: Yup.string().email('Please Enter Valid Email Address').required('Required!')
})

const userEmailForm = useForm({
  validationSchema: schema
})

const { value: email, errorMessage: emailError } = useField('email')
</script>
<template>
  <div  class="basis-full flex flex-col justify-center items-center">
    <h4>Please Enter Your Email Address to Access the Final Report</h4>
    <data-input
      v-model="userEmailInput"
      name="email"
      label="Email Address:"
      parentClass="flex flex-row"
      type="email"
      id="user-email-address"
    />
    <span class="text-red-100 font-semibold">{{ emailError }}</span>
  </div>
</template>
