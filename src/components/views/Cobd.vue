<script setup lang="ts">
import CodbForm from '../CoBDComponents/CodbForm.vue'
import CodbHeader from '../CoBDComponents/CodbHeader.vue'
import CodbFooter from '../CoBDComponents/CodbFooter.vue'

import { useStepStore } from '../../stores/stepStore'
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import FormButton from '../FormComponents/FormButton.vue'

const reportStore = useReportStore()
const { inputValid } = storeToRefs(reportStore)
const { setBlankSubmitErrorAction } = reportStore
const stepStore = useStepStore()
const { stepCurrent, stepNum } = storeToRefs(stepStore)
const { backStepAction, forwardStepAction } = stepStore
</script>

<template>
  <div class="grid grid-flow-row auto-rows-max md:auto-rows-auto grid-rows-3 h-screen">
    <div class="flex">
      <codb-header class="" />
    </div>
    <div class="flex">
      <codb-form class="flex basis-full" />
    </div>
    <div class="">
      <codb-footer />
    </div>
  </div>
</template>
