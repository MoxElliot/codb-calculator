<script setup lang="ts">
import { onMounted } from 'vue'
import VariableCostDataInput from '../VariableCostsComponents/VariableCostDataInput.vue'
import VariableCostTable from '../VariableCostsComponents/VariableCostTable.vue'
import VariableCostHeading from '../VariableCostsComponents/VariableCostHeading.vue'
import FormButton from '../FormComponents/FormButton.vue'
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import FormModal from '../ModalComponents/FormModal.vue'
import ConfirmModal from '../ModalComponents/ConfirmModal.vue'
import { useModalStore } from '../../stores/modalStore'
import handleDeleteCost from '../../assets/utility_functions/handleDeleteCost'

const modalStore = useModalStore()
const { formModalIsOpen, formModalType, confirmModalIsOpen, confirmCostName  } = storeToRefs(modalStore)
const { closeOptionsMenu, closeConfirmModal } = modalStore

const reportStore = useReportStore()
const { updateInputValidAction } = reportStore
const { selectedCost, selectedId } = storeToRefs(reportStore)
const { totalVariableCostAction, deleteVariableCostAction, addSelectedIdAction } =
  reportStore

onMounted(() => {
  updateInputValidAction(true)
})
</script>

<template>
  <form-modal v-if="formModalIsOpen" class="flex flex-col justify-center items-center" type="Variable">
    <template #body>
      <variable-cost-data-input v-if="formModalType === 'add'" />
      <variable-cost-data-input
        v-else-if="formModalType === 'edit'"
        :id="selectedCost.id"
        :name="selectedCost.name"
        :category="selectedCost.category"
        :amount="selectedCost.amount"
      />
    </template>
  </form-modal>
  <confirm-modal v-if="confirmModalIsOpen">
    <template #header>
      <p>Are you sure you want to delete the cost {{ confirmCostName }}?</p>
    </template>
    <template #body>
      <div class="flex flex-row p-1 md:p-4 h-full">
        <form-button label="No" type="button" class="modal-btn-cancel" @click="closeConfirmModal" />
        <form-button
          label="Yes"
          type="submit"
          class="modal-btn-add"
          @click="
            handleDeleteCost(
              selectedId,
              addSelectedIdAction,
              closeOptionsMenu,
              closeConfirmModal,
              deleteVariableCostAction,
              totalVariableCostAction
            )
          "
        />
      </div>
    </template>
  </confirm-modal>
  <div
    class="flex flex-col text-center items-center justify-center basis-full h-screen sm:min-h-[900px] z-10"
  >
    <variable-cost-heading />
    <variable-cost-table />
  </div>
</template>
