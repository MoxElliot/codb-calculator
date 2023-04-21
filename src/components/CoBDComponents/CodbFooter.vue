<script setup lang="ts">
import { ref } from 'vue';
import { useStepStore } from '../../stores/stepStore'

const stepStore = useStepStore()

</script>

<template>
  <div>
    <router-link to="/company-name-step">
      Company Name Step
      <button 
        class="border border-black w-32 rounded-full m-1 bg-cyan-500"
        @click="stepStore.backStepAction({
          step: step.stepStore
        })"
      >
          Previous
      </button>
    </router-link>
    <router-link to="/fixed-cost-step">
      Fixed Cost Step
      <button 
        class="border border-black w-32 rounded-full m-1 bg-cyan-500"
        @click="stepStore.forwardStepAction({
          step: step.stepStore
        })"
      >
          Next
      </button>
    </router-link>
  </div>
</template>
