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
      <form-button 
        label="Previous"
        @click="backStepAction()"
        class="w-32"
      />
    </router-link>
    <router-link :to="stepPath">
      <form-button 
        label="Next"
        @click="forwardStepAction()"
        class="w-32"
      />
    </router-link>
  </div>
</template>
