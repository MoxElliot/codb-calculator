<script setup lang="ts">
import { useStepStore } from '../../stores/stepStore'
import FormButton from '../FormComponents/FormButton.vue'

const stepStore = useStepStore()
</script>

<template>
  <div>
    <router-link :to="stepStore.stepName">
      <form-button 
        label="Previous"
        @click="stepStore.backStepAction()"
        class="w-32"
      />
    </router-link>
    <router-link :to="stepStore.stepName">
      <form-button 
        label="Next"
        @click="stepStore.forwardStepAction()"
        class="w-32"
      />
    </router-link>
  </div>
</template>
