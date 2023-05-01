<script setup lang="ts">
import { useStepStore } from '../../stores/stepStore'

// const handleSubmit = () => {
//   stepStore.forwardStepAction()
// }
const stepStore = useStepStore()
</script>

<template>
  <div>
    <!-- v-if="stepStore.stepName !== '/user-email-step'" -->
    <router-link :to="stepStore.stepName">
      <button
        class="border border-black w-32 rounded-full m-1 bg-cyan-500"
        @click="stepStore.backStepAction()"
      >
        Previous
      </button>
    </router-link>
    <router-link :to="stepStore.stepName">
      <button
        class="border border-black w-32 rounded-full m-1 bg-cyan-500"
        @click="stepStore.forwardStepAction()"
      >
        Next
      </button>
    </router-link>
  </div>
  <!-- <div v-if="stepStore.stepName === '/user-email-step'">
    <router-link :to="stepStore.stepName">
      <button
        class="border border-black w-32 rounded-full m-1 bg-cyan-500"
        @click="stepStore.backStepAction()"
      >
        Cancel
      </button>
    </router-link>
    <router-link :to="stepStore.stepName">
     
      <button
        class="border border-black w-32 rounded-full m-1 bg-cyan-500"
        @click="stepStore.forwardStepAction()"
      >
        Submit
      </button>
    </router-link>
  </div> -->
</template>
