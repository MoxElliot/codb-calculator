<script setup lang="ts">
import { useReportStore } from '../../stores/reportStore'
// import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import DataInput from '../FormComponents/DataInput.vue'

const reportStore = useReportStore()
const { userEmail } = storeToRefs(reportStore)
const { addUserEmailAction } = reportStore

// const userEmail = ref<string>('')

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
      @blur="addUserEmailAction($event.target.value)"
    />
  </div>
</template>
