<script setup lang="ts">
import { useStepStore } from '../../stores/stepStore'

const stepStore = useStepStore()
</script>

<template>
  <div>
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
  <div>
    <button class="border border-black w-32 rounded-full m-1 bg-cyan-500" @onClick="">
      Cancel
    </button>
    <button class="border border-black w-32 rounded-full m-1 bg-cyan-500" @onClick="">
      Submit
    </button>
  </div>
</template>
