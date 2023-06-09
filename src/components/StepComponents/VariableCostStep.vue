<script setup lang="ts">
import { onMounted } from 'vue'
import VariableCostDataInput from '../VariableCostsComponents/VariableCostDataInput.vue'
import VariableCostTable from '../VariableCostsComponents/VariableCostTable.vue'
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'

const reportStore = useReportStore()
const { updateInputValidAction } = reportStore
const { companyName } = storeToRefs(reportStore)


onMounted(() => {
    updateInputValidAction(true)
})

</script>

<template>
  <div class="basis-full flex flex-col justify-center items-center">
    <variable-cost-data-input />
    <variable-cost-table />
  </div>
</template>
