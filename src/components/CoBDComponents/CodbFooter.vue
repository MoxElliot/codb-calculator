<script setup lang="ts">
import { useStepStore } from '../../stores/stepStore'
import { storeToRefs } from 'pinia'
import FormButton from '../FormComponents/FormButton.vue'
import BtnArrowLeft from '../IconComponents/BtnArrowLeft.vue'
import BtnArrowRight from '../IconComponents/BtnArrowRight.vue'

const stepStore = useStepStore()
const { stepCurrent } = storeToRefs(stepStore)
const { backStepAction, nextStepAction } = stepStore

</script>
<template>
  <div
    :class="stepCurrent === '/' ? 'flex h-full basis-2/3 justify-center items-center z-30' : 'flex h-full basis-2/3 justify-center items-center z-30'"
    v-if="stepCurrent !== '/final-report-step' && stepCurrent !== '/user-email-step'"
  >
    <div 
    :class="stepCurrent === '/' ? 'flex items-center justify-center basis-3/4 ' : 'flex items-center justify-end basis-3/4 '"
    >
      
      <form-button
        label="Back"
        @click="backStepAction()"
        btnClass="btn-back md:mb-2 flex justify-center items-center"
        :btnImage="BtnArrowLeft"
        v-if="stepCurrent !== '/' && stepCurrent !== '/company-name-step'"
      />
      <form-button
        :label="stepCurrent === '/' ? 'Let\'s Go!' : 'Next'"
        @click="nextStepAction()"
        btnClass="btn-next md:mb-2 flex flex-row-reverse justify-center items-center"
        :btnImage="BtnArrowRight"
        type="submit"
      />
    </div>
  </div>
</template>
