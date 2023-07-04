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
const { formModalIsOpen, formModalType, confirmModalIsOpen } =
  storeToRefs(modalStore)
const { closeOptionsMenu, closeConfirmModal } = modalStore

const reportStore = useReportStore()
const { updateInputValidAction } = reportStore
const { selectedCost, selectedId } = storeToRefs(reportStore)
const { totalFixedCostAction, deleteFixedCostAction, addSelectedIdAction } = reportStore

onMounted(() => {
  updateInputValidAction(true)
})

//https://stackoverflow.com/questions/45553162/how-to-get-mouse-coordinates-in-vuejs
</script>

<template>
  <form-modal v-if="formModalIsOpen" class="flex flex-col justify-center items-center" type="Fixed">
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
  <confirm-modal
    v-if="confirmModalIsOpen"
    @confirm-event="closeConfirmModal"
    @handle-event="
      handleDeleteCost(
        selectedId,
        addSelectedIdAction,
        closeOptionsMenu,
        closeConfirmModal,
        deleteFixedCostAction,
        totalFixedCostAction
      )
    "
  />
  <div
    class="flex flex-col text-center items-center justify-center basis-full h-screen sm:min-h-[900px] z-10"
  >
    <fixed-cost-heading />
    <fixed-cost-table />
  </div>
</template>
