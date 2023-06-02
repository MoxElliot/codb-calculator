<script setup lang="ts">
import { useReportStore } from '../../stores/reportStore'
import DataInput from '../FormComponents/DataInput.vue'
import { useForm, useField } from 'vee-validate'
import * as Yup from 'yup'
import { computed, onMounted, type WritableComputedRef } from 'vue'
import { storeToRefs } from 'pinia'

const reportStore = useReportStore()
const { addUserEmailAction, updateInputValidAction } = reportStore
const { userEmail, inputValid, blankSubmitError } = storeToRefs(reportStore)

onMounted(() => {
  console.log('in onMounted', email.value)
  if (userEmail.value === '') {
    updateInputValidAction(false)
    console.log('in OnMounted If', inputValid.value)
  }
})

const userEmailInput: WritableComputedRef<string> = computed<string>({
  get: () => userEmail.value, //Maintains data in field if user goes back
  set: async (text: string) => {
    email.value = text //take this out of the set, no validation will happen
    addUserEmailAction(text) // updates Pinia state
    const resp = await userEmailForm.validate()
    console.log('inCompanyName INput', resp.errors.company)
    updateInputValidAction(resp.valid) // enables the Next button
  }
})

const schema = Yup.object({
  email: Yup.string().email('Please Enter Valid Email Address').required('Required!')
})

const userEmailForm = useForm({
  validationSchema: schema,
})

const { value: email, errorMessage: emailError, meta } = useField('email')
</script>
<template>
  <div class="basis-full flex flex-col justify-center items-center">
    <h4>Please Enter Your Email Address to Access the Final Report</h4>
    <data-input
      v-model="userEmailInput"
      name="email"
      label="Email Address:"
      parentClass="flex flex-row"
      type="email"
      id="user-email-address"
    />
    <span class="error-text">{{ emailError }}</span>
    <span class="error-text" v-show="!meta.dirty">{{ blankSubmitError }}</span>
  </div>
</template>
