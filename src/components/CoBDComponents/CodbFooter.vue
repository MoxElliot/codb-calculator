<script setup lang="ts">
import { useStepStore } from '../../stores/stepStore'
import { storeToRefs } from 'pinia'
import FormButton from '../FormComponents/FormButton.vue'
import { useReportStore } from '@/stores/reportStore'

const reportStore = useReportStore()
const { inputValid } = storeToRefs(reportStore)
const stepStore = useStepStore()
const { stepPath, stepNum, stepName } = storeToRefs(stepStore)
const { backStepAction, forwardStepAction } = stepStore

</script>
<template>
  <div v-if="stepName !== 'Home'">
    <router-link :to="stepPath">
      <form-button label="Back" @click="backStepAction()" class="btn-back" />
    </router-link>
    <router-link :to="stepPath">
      <form-button
        label="Next Step"
        @click="forwardStepAction()"
        class="btn-next"
        :disabled="!inputValid"
        :class="{ 'border-2 border-red-700': !inputValid }"
        type="submit"
      />
    </router-link>
  </div>
  <div v-if="stepName === 'Home'">
    <router-link :to="'/company-name-step'">
      <form-button label="Begin" @click="forwardStepAction()" class="btn-next" />
    </router-link>
  </div>
</template>
