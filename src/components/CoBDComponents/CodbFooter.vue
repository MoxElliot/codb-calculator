<script setup lang="ts">
import { useStepStore } from '../../stores/stepStore'

// for Tomorrow Make Cancel bring user back to previous step, updated stepStore.name and stepStore.Num. Make Submit trigger report calculation action (to be coded), and bring user to final report step, update stepStore.name and stepStore.Num
const handleSubmit = () => {
  stepStore.forwardStepAction()
}
const stepStore = useStepStore()
</script>

<template>
  <div v-if="stepStore.stepName !== '/user-email-step'">
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
  <div v-if="stepStore.stepName === '/user-email-step'">
    <!--Where should cancel bring user? Back one or back to beginning? -->
    <router-link :to="stepStore.stepName">
      <button
        class="border border-black w-32 rounded-full m-1 bg-cyan-500"
        @click="stepStore.backStepAction()"
      >
        Cancel
      </button>
    </router-link>
    <router-link :to="stepStore.stepName">
      <!-- Does this submit button need to transmit data somewhere? -->
      <button
        class="border border-black w-32 rounded-full m-1 bg-cyan-500"
        @click="stepStore.forwardStepAction()"
      >
        Submit
      </button>
    </router-link>
  </div>
</template>
