<script setup lang="ts">
// import { useUserEmailStore } from '../../stores/userEmailStore'
import { useReportStore } from '../../stores/reportStore'
import { ref } from 'vue'
import DataInput from '../FormComponents/DataInput.vue'

// const userEmailStore = useUserEmailStore()
const reportStore = useReportStore()

const userEmail = ref<string>('')
</script>
<template>
  <div>
    <h4>User Email Step</h4>
  </div>
  <div>
    <h4>Please Enter Your Email Address to Access the Final Report</h4>
    <data-input
      v-model="userEmail"
      label="Email Address"
      type="email"
      id="user-email-address"
      @blur="reportStore.addUserEmailAction($event.target.value)"
    />
  </div>
</template>
