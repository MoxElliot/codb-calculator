<script setup lang="ts">
import { onMounted } from 'vue'
import VariableCostDataInput from '../VariableCostsComponents/VariableCostDataInput.vue'
import VariableCostTable from '../VariableCostsComponents/VariableCostTable.vue'
import VariableCostHeading from '../VariableCostsComponents/VariableCostHeading.vue'
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import FormModal from '../ModalComponents/FormModal.vue'
import { useModalStore } from '../../stores/modalStore'

const modalStore = useModalStore()
const { formModalIsOpen, formModalType } = storeToRefs(modalStore)
 
const reportStore = useReportStore()
const { updateInputValidAction } = reportStore
const { companyName, selectedCost } = storeToRefs(reportStore)

onMounted(() => {
  updateInputValidAction(true)
})
</script>

<template>
  <form-modal v-if="formModalIsOpen" class="flex flex-col justify-center items-center">
    <template #header>
      <div
        class="flex flex-row justify-center items-center text-heading2_xs md:text-heading text-grey-300 font-serif"
        v-if="formModalType === 'add'"
      >
        <p>Add Variable Cost</p>
      </div>
      <div
        class="flex flex-row justify-center items-center text-heading2_xs md:text-heading text-grey-300 font-serif"
        v-else-if="formModalType === 'edit'"
      >
        <p>Edit Variable Cost</p>
      </div>
    </template>
    <template #body>
      <variable-cost-data-input v-if="formModalType === 'add'"  />
      <variable-cost-data-input v-else-if="formModalType === 'edit'" :id="selectedCost.id" :name="selectedCost.name" :category="selectedCost.category" :amount="selectedCost.amount" />
    </template>
  </form-modal>

  <div class="flex flex-col text-center items-center justify-center basis-full h-full md:h-fit z-10">
    <variable-cost-heading />
    <variable-cost-table />
  </div>
</template>
