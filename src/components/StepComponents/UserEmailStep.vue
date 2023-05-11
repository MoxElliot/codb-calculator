<script setup lang="ts">
import { useReportStore } from '../../stores/reportStore'
import { useForm, useField, Form } from 'vee-validate'
import * as Yup from 'yup'
import DataInput from '../FormComponents/DataInput.vue'
import { computed, type WritableComputedRef } from 'vue'

const reportStore = useReportStore()
const { addUserEmailAction, updateInputValidAction } = reportStore

const userEmail: WritableComputedRef<string> = computed({
  get: () => userEmail.value,
  set: async (text: string) => {
    email.value = text
    const resp = await userEmailForm.validate()
    console.log('in userEmail set', resp.valid)
    addUserEmailAction(text) //should replace blur
    updateInputValidAction(resp.valid)
  }
})

const schema = Yup.object().shape({
  email: Yup.string().email('Please Enter Valid Email Address').required('Required!').min(3)
})

const userEmailForm = useForm({
  validationSchema: schema
})

const { value: email, errorMessage: emailError } = useField('email')

</script>
<template>
  <div>
    <h4>User Email Step</h4>
  </div>
  <Form :validation-schema="schema">
    <h4>Please Enter Your Email Address to Access the Final Report</h4>
    <data-input
      v-model="userEmail"
      name="email"
      label="Email Address"
      type="email"
      id="user-email-address"
      rules="required"
    />
    <span class="text-red-700 font-semibold">{{ emailError }}</span>
  </Form>
</template>
