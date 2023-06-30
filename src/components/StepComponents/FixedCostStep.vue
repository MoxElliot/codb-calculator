<script setup lang="ts">
import { onMounted } from 'vue'
import FixedCostDataInput from '../FixedCostsComponents/FixedCostDataInput.vue'
import FixedCostTable from '../FixedCostsComponents/FixedCostTable.vue'
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import FormModal from '../ModalComponents/FormModal.vue'
import FormButton from '../FormComponents/FormButton.vue'
import ConfirmModal from '../ModalComponents/ConfirmModal.vue'
import { useModalStore } from '../../stores/modalStore'

const modalStore = useModalStore()
const { formModalIsOpen, formModalType, confirmModalIsOpen } = storeToRefs(modalStore)
const { closeConfirmModal, openConfirmModal } = modalStore
 
const reportStore = useReportStore()
const { updateInputValidAction } = reportStore
const { companyName, editFixedCost } = storeToRefs(reportStore)

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
        :id="editFixedCost[0].id"
        :name="editFixedCost[0].name"
        :category="editFixedCost[0].category"
        :amount="editFixedCost[0].amount"
        :frequency="editFixedCost[0].frequency"
      />
    </template>
  </form-modal>



  <div
    class="flex flex-col text-center items-center justify-center basis-full h-full md:h-fit z-10"
  >
    <div
      class="flex flex-row justify-center items-center text-heading2_xs md:text-heading text-grey-300 font-serif md:basis-1/6 w-8/10 md:mb-8 lg:w-6/10"
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
    <div class="text-body2_xs md:text-body2 text-grey-300 basis-1/6 w-9/10 sm:w-8/10 lg:w-6/10">
      <p>
        A Fixed Cost is any Yearly or Monthly fee that you expect to pay in a regular year! Add the
        name of the cost, the category, the amount, and whether or not the cost is Monthly or
        Yearly.
      </p>
    </div>

    <fixed-cost-table />
  </div>
</template>
