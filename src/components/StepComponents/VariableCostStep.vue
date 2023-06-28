<script setup lang="ts">
import { onMounted } from 'vue'
import VariableCostDataInput from '../VariableCostsComponents/VariableCostDataInput.vue'
import VariableCostTable from '../VariableCostsComponents/VariableCostTable.vue'
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import FormModal from '../ModalComponents/FormModal.vue'
import { useModalStore } from '../../stores/modalStore'

const modalStore = useModalStore()
const { formModalIsOpen, formModalType } = storeToRefs(modalStore)

const reportStore = useReportStore()
const { updateInputValidAction } = reportStore
const { companyName, editVariableCost } = storeToRefs(reportStore)

onMounted(() => {
  updateInputValidAction(true)
})
</script>

<template>
  <form-modal v-if="formModalIsOpen" class="flex flex-col">
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
      <variable-cost-data-input v-else-if="formModalType === 'edit'" :id="editVariableCost[0].id" :name="editVariableCost[0].name" :category="editVariableCost[0].category" :amount="editVariableCost[0].amount" />
    </template>
  </form-modal>

  <div class="flex flex-col text-center items-center justify-center basis-full h-full md:h-fit">
    <div
      class="flex flex-row justify-center items-center text-heading2_xs md:text-heading text-grey-300 font-serif md:basis-1/6 w-8/10 md:mb-8 lg:w-6/10"
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
    <div class="text-body2_xs md:text-body2 text-grey-300 basis-1/6 w-9/10 sm:w-8/10">
      <p>
        A Variable Cost is any expense category that your are expecting to pay on an irregular
        basis!Add the name of the cost, the category, the amount below.
      </p>
    </div>
    <variable-cost-table />
  </div>
</template>
