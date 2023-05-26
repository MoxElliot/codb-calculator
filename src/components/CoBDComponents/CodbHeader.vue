<script setup lang="ts">
import { useStepStore } from '../../stores/stepStore'
import { storeToRefs } from 'pinia'
import {} from '../../images/cloudspot-logo.png'

const stepStore = useStepStore()
const { stepName } = storeToRefs(stepStore)
</script>

<template>
  <div class="flex flex-col basis-full items-center">
    <div class="mt-8 mb-10">
      <img src="../../images/cloudspot-logo.png" />
    </div>
    <div class="basis-1/4 w-1/2 border border-full-grey rounded-xl" v-show="stepName !== 'Home'">
      <p>{{ stepName }}</p>
    </div>
  </div>
</template>
