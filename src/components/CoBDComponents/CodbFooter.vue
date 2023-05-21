<script setup lang="ts">
import { useStepStore } from '../../stores/stepStore'
import { storeToRefs } from 'pinia'
import FormButton from '../FormComponents/FormButton.vue'
import { useReportStore } from '@/stores/reportStore'

const reportStore = useReportStore()
const { inputValid } = storeToRefs(reportStore)
const stepStore = useStepStore()
const { stepCurrent, stepNum } = storeToRefs(stepStore)
const { backStepAction, forwardStepAction } = stepStore

</script>
<template>
  <div >
    <router-link :to="stepCurrent">
      <form-button label="Back" @click="backStepAction()" class="btn-back" v-show="(stepNum > 1)"/>
    </router-link>
    <router-link :to="stepCurrent">
      <form-button
        :label="stepNum === 0 ? 'Begin' : 'Next'"
        @click="forwardStepAction()"
        class="btn-next"
        :disabled="!inputValid"
        :class="{ 'border-2 border-red': !inputValid }"
        type="submit"
      />
    </router-link>
  </div>
  
</template>