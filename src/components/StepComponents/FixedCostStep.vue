<script setup lang="ts">
import { onMounted } from 'vue'
import FixedCostDataInput from '../FixedCostsComponents/FixedCostDataInput.vue'
import FixedCostTable from '../FixedCostsComponents/FixedCostTable.vue'
import FixedCostHeading from '../FixedCostsComponents/FixedCostHeading.vue'
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import FormModal from '../ModalComponents/FormModal.vue'
import { useModalStore } from '../../stores/modalStore'

const modalStore = useModalStore()
const { formModalIsOpen, formModalType } = storeToRefs(modalStore)
 
const reportStore = useReportStore()
const { updateInputValidAction } = reportStore
const { selectedCost } = storeToRefs(reportStore)

onMounted(() => {
  updateInputValidAction(true)
})

//https://stackoverflow.com/questions/45553162/how-to-get-mouse-coordinates-in-vuejs
</script>

<template>
  <form-modal v-if="formModalIsOpen" class="flex flex-col justify-center items-center">
    <template #header>
      <div
        class="flex flex-row justify-center items-center text-heading2_xs md:text-heading text-grey-300 font-serif"
        v-if="formModalType === 'add'"
      >
        <p>Add Fixed Cost</p>
      </div>
      <div
        class="flex flex-row justify-center items-center text-heading2_xs md:text-heading text-grey-300 font-serif"
        v-else-if="formModalType === 'edit'"
      >
        <p>Edit Fixed Cost</p>
      </div>
    </template>
    <template #body>
      <fixed-cost-data-input v-if="formModalType === 'add'" />
      <fixed-cost-data-input
        v-else-if="formModalType === 'edit'"
        :id="selectedCost.id"
        :name="selectedCost.name"
        :category="selectedCost.category"
        :amount="selectedCost.amount"
        :frequency="selectedCost.frequency"
      />
    </template>
  </form-modal>
  <div
    class="flex flex-col text-center items-center justify-center basis-full h-full md:h-fit z-10"
  >
    <fixed-cost-heading />
    <fixed-cost-table />
  </div>
</template>
