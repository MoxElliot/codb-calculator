<script setup lang="ts">
import { useStepStore } from '../../stores/stepStore'
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import FormButton from '../FormComponents/FormButton.vue'
import { validate } from 'vee-validate'




const reportStore = useReportStore()
const { inputValid } = storeToRefs(reportStore)
const {updateInputValidAction} = reportStore
const stepStore = useStepStore()
const { stepCurrent, stepNum } = storeToRefs(stepStore)
const { backStepAction, forwardStepAction,  } = stepStore

// const checkValid = () => {
//   if(inputValid) {
//     forwardStepAction()
//     console.log("innputValid IF", reportStore.inputValid)
//   } else {
//     console.log("inputValid Else,", reportStore.inputValid)
//   }
// }

// const checkValid = () => {
//   if(stepStore.hasErrorMessage === true) {
//     console.log("in if hasErrorMessage false", stepStore.hasErrorMessage)
//     forwardStepAction()
//   } else {
//     console.log("in if hasErrorMessage true 1 inputvalid", inputValid.value, "hasError", stepStore.hasErrorMessage)
//     updateInputValidAction(false)
//     console.log("in if hasErrorMessage true 2 inputvalid", inputValid.value, "hasError", stepStore.hasErrorMessage)
//   }
// }
        
</script>
<template>
  <div class="flex" v-show="(stepNum !== 7)">
    <router-link :to="stepCurrent">
      <form-button label="Back" @click="backStepAction()" class="btn-back" v-show="(stepNum > 1)"/>
    </router-link>
    <router-link :to="stepCurrent">
      <form-button
        :label="stepNum === 0 ? 'Let\'s Go!' : 'Next'"
        @click="forwardStepAction()"
        class="btn-next text-center"
        :disabled="!inputValid"
        :class="{'border-2 border-red-100': !inputValid }"
        type="submit"
      />
      
    </router-link>
  </div>
  

</template>