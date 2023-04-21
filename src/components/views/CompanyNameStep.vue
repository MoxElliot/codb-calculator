<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { ref } from 'vue'

const inputCompanyName = ref('')
const { addCompanyNameAction } = useReportStore()
</script>

<template>
  <div class="flex">
    <p class="company-name_p font-bold">Company Name:</p>
    <input
      class="border border-black p-1 m-1 w-64"
      id="company-name"
      name="company-name"
      type="text"
      placeholder="Enter Company Name"
      v-model="inputCompanyName"
    />
    <button
      class="border border-black w-32 rounded-full m-1 bg-cyan-500"
      @click="addCompanyNameAction(inputCompanyName)"
    >
      Add
    </button>
  </div>
</template>
