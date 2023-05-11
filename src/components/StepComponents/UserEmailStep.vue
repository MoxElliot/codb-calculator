<script setup lang="ts">
import { useReportStore } from '../../stores/reportStore'
import { storeToRefs } from 'pinia'
import { useForm, useField, useFormErrors } from 'vee-validate'
import * as Yup from 'yup'
import DataInput from '../FormComponents/DataInput.vue'
import { computed, type WritableComputedRef } from 'vue'

const reportStore = useReportStore()
// const { userEmail } = storeToRefs(reportStore)
const { addUserEmailAction, updateInputValidAction } = reportStore

// function onSubmit(values: any) {
//   alert(JSON.stringify(values, null, 2))
// }  @submit="onSubmit"  <-- from <Form ...>

// from <data-input @blur="addUserEmailAction($event.target.value)"

const userEmail: WritableComputedRef<string> = computed({
  get: () => userEmail.value,
  set: async (text: string) => {
    email.value = text
    const resp = await userEmailForm.validate();
    console.log('in userEmail set', resp.valid)
    addUserEmailAction(text) //should replace blur
    updateInputValidAction(resp.valid)
  }
})

const schema = Yup.object().shape({
  email: Yup.string().email('Please Enter Valid Email Address').required('Required')
})

const userEmailForm = useForm({
  validationSchema: schema
})

const { value: email, errorMessage: emailError } = useField('email') //replaces ref or storeToRefs calls
</script>
<template>
  <div>
    <h4>User Email Step</h4>
  </div>
  <div>
    <h4>Please Enter Your Email Address to Access the Final Report</h4>
    <data-input
      v-model="userEmail"
   
      name="email"
      label="Email Address"
      type="email"
      id="user-email-address"
    />
    <span>{{ emailError }}</span>
  </div>
</template>
