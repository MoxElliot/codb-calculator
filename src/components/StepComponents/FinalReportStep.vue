<script setup lang="ts">
import ReportOutput from '../FormComponents/ReportOutput.vue'
import reportOutputsArray from '../../assets/reportOutputsArray'
</script>

<template>
  <report-output v-for="output in reportOutputsArray" :class="output.class">
    <template #top> {{ output.label }}</template>
    <template #bottom> {{ output.variable }}</template>
  </report-output>
</template>
