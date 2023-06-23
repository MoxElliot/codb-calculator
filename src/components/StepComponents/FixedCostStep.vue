<script setup lang="ts">
import { onMounted } from 'vue'
import FixedCostDataInput from '../FixedCostsComponents/FixedCostDataInput.vue'
import FixedCostTable from '../FixedCostsComponents/FixedCostTable.vue'
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import FormModal from '../ModalComponents/FormModal.vue'
import { useModalStore } from '../../stores/modalStore'

const modalStore = useModalStore()
const { isOpen } = storeToRefs(modalStore)

const reportStore = useReportStore()
const { updateInputValidAction } = reportStore
const { companyName } = storeToRefs(reportStore)

onMounted(() => {
  updateInputValidAction(true)
})
</script>

<template>
  <form-modal v-if="isOpen" class="flex flex-col">
    <template #header>
      <div
        class="flex flex-row justify-center items-center text-heading2_xs md:text-heading text-grey-300 font-serif"
      >
        <p>Add Fixed Cost</p>
      </div>
    </template>
    <template #body>
      <fixed-cost-data-input />
    </template>
  </form-modal>

  <div class="flex flex-col text-center items-center justify-center basis-full h-fit">
    <div
      class="flex flex-row justify-center items-center text-heading2_xs md:text-heading text-grey-300 font-serif md:basis-1/6 w-8/10 md:mb-8"
    >
      <p class="">
        Fixed Costs for <span>{{ companyName }}</span>
      </p>
      <img
        src="../../images/fixed-cost-calandar.svg"
        alt="Calandar"
        class="hidden sm:inline sm:px-3"
      />
    </div>
    <div class="text-body text-grey-300 basis-1/6 w-9/10 sm:w-8/10">
      <p>
        A Fixed Cost is any Yearly or Monthly fee that you expect to pay in a regular year! Add the
        name of the cost, the category, the amount, and whether or not the cost is Monthly or
        Yearly.
      </p>
    </div>
    <fixed-cost-table />
  </div>
</template>
