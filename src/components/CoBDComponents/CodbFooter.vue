<script setup lang="ts">
import { useStepStore } from '../../stores/stepStore'
import { storeToRefs } from 'pinia'
import FormButton from '../FormComponents/FormButton.vue'
import { useReportStore } from '@/stores/reportStore'

const stepStore = useStepStore()
const reportStore = useReportStore()
const { stepPath } = storeToRefs(stepStore)
const { backStepAction, forwardStepAction } = stepStore
const { inputValid } = storeToRefs(reportStore)
</script>

<template>
  <div>
    <router-link :to="stepPath">
      <form-button label="Previous" @click="backStepAction()" class="w-32" />
    </router-link>
    <router-link :to="stepPath">
      <form-button
        label="Next"
        @click="forwardStepAction()"
        class="w-32"
        :disabled="!inputValid"
        :class="{ 'border-2 border-red-700': !inputValid }"
      />
    </router-link>
  </div>
</template>
