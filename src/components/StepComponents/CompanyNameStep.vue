<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { useStepStore } from '@/stores/stepStore'
import * as Yup from 'yup'
import DataInput from '../FormComponents/DataInput.vue'
import { computed, onMounted, onUpdated, type WritableComputedRef } from 'vue'
import { useForm, useField, Form } from 'vee-validate'
import { storeToRefs } from 'pinia'

const reportStore = useReportStore()
const { addCompanyNameAction, updateInputValidAction } = reportStore
const { companyName, inputValid } = storeToRefs(reportStore)
const stepStore = useStepStore()
const { hasErrorMessage } = storeToRefs(stepStore)
const { setHasErrorMessageAction } = stepStore

// onUpdated(() => {
//   console.log(
//     'on mountcompanyError', companyError.value
//   )
//   setHasErrorMessageAction(companyError.value ? true : false)
//   console.log("has errorMessage?", hasErrorMessage.value)
//   updateInputValidAction(!hasErrorMessage.value)
//   // updateInputValidAction(companyError.value === undefined ? false : true)
// })

onMounted(() => {
  updateInputValidAction(companyError.value === undefined ? false : true)
})

const companyNameInput: WritableComputedRef<string> = computed<string>({
  get: () => companyName.value, //Maintains data in field if user goes back
  set: (text: string) => {
    company.value = text
    // const resp = await companyNameForm.validate()
    addCompanyNameAction(text) // updates Pinia state
   // updateInputValidAction(resp.valid) // enables the Next button
   updateInputValidAction(companyError.value === undefined ? true : false)
    console.log('in companyNameInput hasErrorMessage, inputValid', companyError.value, inputValid.value)
  }
})

const schema = Yup.object({
  company: Yup.string().required('Company Name is Required')
})

const companyNameForm = useForm({
  validationSchema: schema,
  validateOnMount:true,
  initialErrors: {
    company: ''
  },
  

})

const { value: company, errorMessage: companyError, meta } = useField('company')
</script>

<template>
  <div class="flex flex-row justify-center basis-full">
    <div class="flex flex-col items-center justify-around basis-2/4">
      <div class="w-6/10">
        <p class="font-serif text-grey-300 text-heading2">
          What is the name of your business?
        </p>
      </div>
      <div class="">
        <p class="font-sans text-grey-300 text-body2 text-center">
          Any journey begins with defining a goal. So, as we want to help you better understand the
          financial picture of your photography business, it will be great to start by filling in
          the name of it.
        </p>
      </div>
      <Form class="self-stretch">
        <data-input
          v-model.trim="companyNameInput"
          name="company"
          class="input border-bottom-grey text-placeholder placeholder:text-grey-100 sans"
          :meta="meta"
          placeholder="Business Name"
          type="text"
          id="company-name"
        />

        <span class="text-red-100 font-semibold">{{ companyError }}</span>
      </Form>
    </div>
  </div>
</template>
