<script setup lang="ts">
import { useStepStore } from '../../stores/stepStore'
import { storeToRefs } from 'pinia'
import FormButton from '../FormComponents/FormButton.vue'
import { useReportStore } from '@/stores/reportStore'
import { onMounted, onUpdated } from 'vue'

const reportStore = useReportStore()
const { inputValid } = storeToRefs(reportStore)
const stepStore = useStepStore()
const { stepCurrent, stepNum, stepName } = storeToRefs(stepStore)
const { backStepAction, forwardStepAction } = stepStore

console.log("in footer", stepCurrent.value)
</script>
<template>
  <!-- <div v-if="stepCurrent === '/'">
    <router-link :to="'/company-name-step'">
      <form-button label="Begin" @click="forwardStepAction()" class="btn-next" />
    </router-link>
  </div>
  <div v-else-if="stepCurrent === '/company-name-step'">
    <router-link :to="stepCurrent">
      <form-button
        label="Next Step"
        @click="forwardStepAction()"
        class="btn-next"
        :disabled="!inputValid"
        :class="{ 'border-2 border-red': !inputValid }"
        type="submit"
      />
    </router-link>
  </div>
  <div v-else-if="stepCurrent === '/final-report-step'">
    <router-link :to="stepCurrent">
      <form-button label="Back" @click="backStepAction()" class="btn-back" />
    </router-link>
  </div> -->
  <div >
    <router-link :to="stepCurrent">
      <form-button label="Back" @click="backStepAction()" class="btn-back" />
    </router-link>
    <router-link :to="stepCurrent">
      <form-button
        label="Next Step"
        @click="forwardStepAction()"
        class="btn-next"
        :disabled="!inputValid"
        :class="{ 'border-2 border-red': !inputValid }"
        type="submit"
      />
    </router-link>
  </div>
  
</template>
