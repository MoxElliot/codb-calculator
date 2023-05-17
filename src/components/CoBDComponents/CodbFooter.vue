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
      <form-button class="btn-back" label="Back" @click="backStepAction()" />
    </router-link>
    <router-link :to="stepPath">
      <form-button class="btn-next" label="Next Step" @click="forwardStepAction()" />
    </router-link>
    <p>
      hello {{ stepName }} stepNum: {{ stepNum }} stepPath:{{ stepPath }} inputValid:
      {{ inputValid }}
    </p>
  </div>
  <div v-if="stepName === 'Home'">
    <router-link :to="'/company-name-step'">
      <form-button label="Begin" @click="forwardStepAction()" class="btn-next"/>
    </router-link>
    <p>hello {{ stepName }} stepNum: {{ stepNum }} stepPath:{{ stepPath }}</p>
  </div>
</template>
