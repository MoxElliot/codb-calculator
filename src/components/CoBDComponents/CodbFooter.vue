<script setup lang="ts">
import { useStepStore } from '../../stores/stepStore'
import { storeToRefs } from 'pinia'
import FormButton from '../FormComponents/FormButton.vue'

const stepStore = useStepStore()
const { stepCurrent } = storeToRefs(stepStore)
const { nextStepAction, backStepAction } = stepStore

</script>
<template>
  <div
    class="flex h-full justify-center items-end sm:items-center"
    v-show="stepCurrent !== '/final-report-step'"
  >
    <div>
      <form-button
        label="Back"
        @click="backStepAction()"
        class="btn-back"
        v-show="stepCurrent !== '/' || '/company-name-step'"
      />
      <form-button
        :label="stepCurrent === '/' ? 'Let\'s Go!' : 'Next'"
        @click="nextStepAction()"
        class="btn-next mb-20 sm:mb-0 bg-nextButtonArrow bg-no-repeat bg-buttonArrow bg-15%"
        type="submit"
      />
    </div>
  </div>
</template>
