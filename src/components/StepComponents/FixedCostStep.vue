<script setup lang="ts">
import { onMounted } from 'vue'
import FixedCostDataInput from '../FixedCostsComponents/FixedCostDataInput.vue'
import FixedCostTable from '../FixedCostsComponents/FixedCostTable.vue'
import FixedCostHeading from '../FixedCostsComponents/FixedCostHeading.vue'
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import FormModal from '../ModalComponents/FormModal.vue'
import ConfirmModal from '../ModalComponents/ConfirmModal.vue'
import { useModalStore } from '../../stores/modalStore'
import handleDeleteCost from '../../assets/utility_functions/handleDeleteCost'

const modalStore = useModalStore()
const { formModalIsOpen, formModalType, confirmModalIsOpen } = storeToRefs(modalStore)
const { openEllipsisModal, openFormModal, openConfirmModal, closeEllipsisModal, closeConfirmModal } = modalStore

const reportStore = useReportStore()
const { updateInputValidAction } = reportStore
const { selectedCost, selectedId } = storeToRefs(reportStore)
const { totalFixedCostAction, editFixedCostAction, deleteFixedCostAction, addSelectedIdAction } =
  reportStore

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
  <confirm-modal v-if="confirmModalIsOpen">
    <template #header>
      <div class="flex flex-row justify-center items-center text-body2 text-grey-300 font-serif">
        <p>Are you sure you want to delete this cost?</p>
      </div>
    </template>
    <template #body>
      <div class="flex flex-row p-1 md:p-4 h-full">
        <form-button label="No" type="button" class="modal-btn-cancel" @click="closeConfirmModal" />
        <form-button
          label="Yes"
          type="submit"
          class="modal-btn-add"
          @click="handleDeleteCost(selectedId, addSelectedIdAction, closeEllipsisModal, closeConfirmModal, deleteFixedCostAction, totalFixedCostAction)"
        />
      </div>
    </template>
  </confirm-modal>
  <div
    class="flex flex-col text-center items-center justify-center basis-full h-full md:h-fit z-10"
  >
    <fixed-cost-heading />
    <fixed-cost-table />
  </div>
</template>
