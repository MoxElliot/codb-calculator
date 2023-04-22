<script setup lang="ts">
import { ref } from 'vue';
import { useStepStore } from '../../stores/stepStore'

const stepStore = useStepStore()
const step = ref<number>(stepStore.stepNum)


//Next make a state to hold an array of pathnames for each step. that will be what the router-link to=" " is responding too.
</script>

<template>
  <div>
    <router-link :to='stepStore.stepName'>
      Footer
     <p>
       {{ stepStore.stepName }}
     </p> 
      <button 
        class="border border-black w-32 rounded-full m-1 bg-cyan-500"
        @click="stepStore.backStepAction(step)"
      >
          Previous
      </button>
    </router-link>
    <router-link :to='stepStore.stepName'>
      
      <button 
        class="border border-black w-32 rounded-full m-1 bg-cyan-500"
        @click="stepStore.forwardStepAction(step)"
      >
          Next
      </button>
    </router-link>
  </div>
</template>
