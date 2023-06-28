<script setup lang="ts">
import { useReportStore } from '../../stores/reportStore'
import DataInput from '../FormComponents/DataInput.vue'
import { useForm, useField } from 'vee-validate'
import * as Yup from 'yup'
import FormButton from '../FormComponents/FormButton.vue'
import { computed, onMounted, type WritableComputedRef } from 'vue'
import { storeToRefs } from 'pinia'
import EmailModal from '../ModalComponents/EmailModal.vue'
import { useStepStore } from '../../stores/stepStore'
import { useModalStore } from '../../stores/modalStore'

const modalStore = useModalStore()
const { formModalIsOpen, formModalType } = storeToRefs(modalStore)
const { closeFormModal } = modalStore

const reportStore = useReportStore()
const { addUserEmailAction, updateInputValidAction } = reportStore
const { userEmail, inputValid, blankSubmitError } = storeToRefs(reportStore)

const stepStore = useStepStore()
const { stepCurrent } = storeToRefs(stepStore)
const { backStepAction, nextStepAction } = stepStore

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
  validationSchema: schema
})

const { value: email, errorMessage: emailError, meta } = useField('email')
</script>
<template>
  <email-modal class="flex flex-col justify-center items-center">
    <template #header>
      <div
      class="text-body2_xs md:text-body2 text-grey-300 "
      >
        <p>Please Enter Your Email Address to Access the Final Report</p>
      </div>
    </template>
    <template #body> 
      <div class="basis-full flex flex-col items-center justify-center m-10">
      <div class="font-sans text-grey-300 text-body">
        <data-input
          v-model="userEmailInput"
          name="email"
          label="Email Address:"
          class="pl-3"
          parentClass="flex flex-row"
          type="email"
          id="user-email-address"
        />
        <span class="error-text">{{ emailError }}</span>
        <span class="error-text" v-if="!meta.dirty">{{ blankSubmitError }}</span>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <form-button
        label="Cancel"
        @click="backStepAction()"
        btnClass="btn-back md:mb-2 flex justify-center items-center"
        v-if="stepCurrent !== '/' && stepCurrent !== '/company-name-step'"
      />
      <form-button
        label="Ok"
        @click="nextStepAction()"
        btnClass="btn-next md:mb-2 flex justify-center items-center"
        type="submit"
      />
    </div>
    </template>
  </email-modal>

</template>
