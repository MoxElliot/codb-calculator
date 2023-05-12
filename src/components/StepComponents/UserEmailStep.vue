<script setup lang="ts">
import { useReportStore } from '../../stores/reportStore'
import { useForm, useField, Form } from 'vee-validate'
import validationSchema from '../../assets/validationSchema'
import DataInput from '../FormComponents/DataInput.vue'
import { computed, onMounted, type WritableComputedRef } from 'vue'

const reportStore = useReportStore()
const { addUserEmailAction, updateInputValidAction } = reportStore

onMounted(() => {
  email.value = ''
  updateInputValidAction(false)
})

const theForm = useForm({
  validationSchema: validationSchema
})

const userEmail: WritableComputedRef<string> = computed({
  get: () => userEmail.value,
  set: async (text: string) => {
    email.value = text
    const resp = await theForm.validate()
    console.log('in userEmail set', resp.valid)
    addUserEmailAction(text) //should replace blur
    updateInputValidAction(resp.valid)
  }
})

const { value: email, errorMessage: emailError } = useField('email')

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
    <span class="text-red-700 font-semibold">{{ emailError }}</span>
  </div>
</template>
