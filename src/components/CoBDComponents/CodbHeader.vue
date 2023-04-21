<script setup lang="ts">
import steps from '../../assets/stepsArray'
</script>

<template>
  <h2>Cost of Doing Business Calculator</h2>
  <div class="flex p-48" >
    <div v-for="step in steps" :key="step.id">
      <router-link class="border border-black m-1" :to="step.path">
        {{ step.name }}
      </router-link>
    </div>
  </div>
</template>
