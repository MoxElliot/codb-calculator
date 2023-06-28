<script setup lang="ts">
import { useStepStore } from '../../stores/stepStore'
import { storeToRefs } from 'pinia'
import FormButton from '../FormComponents/FormButton.vue'

const stepStore = useStepStore()
const { stepCurrent } = storeToRefs(stepStore)
const { backStepAction, nextStepAction } = stepStore

</script>
<template>
  <div
    :class="stepCurrent === '/' ? 'flex h-full basis-2/3 justify-center items-center z-30' : 'flex h-full basis-2/3 justify-end items-center z-30'"
    v-if="stepCurrent !== '/final-report-step'"
  >
    <div class="flex items-center">
      <form-button
        label="Back"
        @click="backStepAction()"
        btnClass="btn-back md:mb-2 flex justify-center items-center"
        btnImage="/src/images/btn-arrow-left.svg"
        v-if="stepCurrent !== '/' && stepCurrent !== '/company-name-step'"
      />
      <form-button
        :label="stepCurrent === '/' ? 'Let\'s Go!' : 'Next'"
        @click="nextStepAction()"
        btnClass="btn-next md:mb-2 flex flex-row-reverse justify-center items-center"
        btnImage="/src/images/btn-arrow-right.svg"
        type="submit"
      />
    </div>
  </div>
</template>
