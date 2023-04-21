<script setup lang="ts">
import { ref } from 'vue';
import { useStepStore } from '../../stores/stepStore'

const stepStore = useStepStore()
const step = ref<number>(0)


</script>

<template>
  <div>
    <router-link to="/company-name-step">
      Company Name Step
      <button 
        class="border border-black w-32 rounded-full m-1 bg-cyan-500"
        @click="stepStore.backStepAction(step)"
      >
          Previous
      </button>
    </router-link>
    <router-link to="/fixed-cost-step">
      Fixed Cost Step
      <button 
        class="border border-black w-32 rounded-full m-1 bg-cyan-500"
        @click="stepStore.forwardStepAction(step)"
      >
          Next
      </button>
    </router-link>
  </div>
</template>
