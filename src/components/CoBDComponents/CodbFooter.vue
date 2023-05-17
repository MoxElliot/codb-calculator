<script setup lang="ts">
import { useStepStore } from '../../stores/stepStore'
import { storeToRefs } from 'pinia'
import FormButton from '../FormComponents/FormButton.vue'

const stepStore = useStepStore()
const { stepPath } = storeToRefs(stepStore)
const { backStepAction, forwardStepAction } = stepStore
</script>

<template>
  <div>
    <router-link :to="stepPath">
      <form-button class="btn-back" label="Back" @click="backStepAction()" />
    </router-link>
    <router-link :to="stepPath">
      <form-button class="btn-next" label="Next Step" @click="forwardStepAction()" />
    </router-link>
  </div>
</template>
