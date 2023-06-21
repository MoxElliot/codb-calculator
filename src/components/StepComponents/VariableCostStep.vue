<script setup lang="ts">
import { onMounted } from 'vue'
import VariableCostDataInput from '../VariableCostsComponents/VariableCostDataInput.vue'
import VariableCostTable from '../VariableCostsComponents/VariableCostTable.vue'
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import FormButton from '../FormComponents/FormButton.vue'
import FormModal from '../ModalComponents/FormModal.vue'
import { useModalStore } from '../../stores/modalStore'

const modalStore = useModalStore()
const { isOpen } = storeToRefs(modalStore)
const { openModal } = modalStore

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
        class="flex flex-row justify-center items-center text-heading2_xs md:text-heading text-grey-300 font-seri"
      >
        <p>Add Variable Cost</p>
      </div>
    </template>
    <template #body>
      <variable-cost-data-input />
    </template>
  </form-modal>

  <div class="flex flex-col text-center basis-full items-center justify-center">
    <div
      class="flex flex-row justify-center items-center text-heading2_xs md:text-heading text-grey-300 font-serif md:basis-1/6 md:w-6/10 md:mb-8"
    >
      <p class="">
        Variable Costs for <span>{{ companyName }}</span>
      </p>
      <img
        src="../../images/variable-cost-camera.svg"
        alt="Camera"
        class="hidden sm:inline sm:px-3"
      />
    </div>
    <div class="text-body text-grey-300 basis-1/6 w-8/10 md:w-6/10">
      <p>
        A Variable Cost is any expense category that your are expecting to pay on an irregular
        basis!Add the name of the cost, the category, the amount below.
      </p>
    </div>
    <div class="basis-full flex flex-col items-center justify-center w-6/10 sm:w-5/10">
      <div class="hidden md:flex">
        <variable-cost-data-input class="flex flex-row" />
      </div>
      <div class="md:hidden">
        <div class="btn-add flex flex-col justify-center">
          <form-button
            label="+ Add Variable Cost"
            type="submit"
            class="font-bold"
            @click="openModal()"
          />
        </div>
      </div>
      <variable-cost-table />
    </div>
  </div>
</template>
