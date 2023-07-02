<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import { onUpdated } from 'vue'
import fixedCostHeadingArray from '../../assets/fixedCostHeadings'
import FormButton from '../FormComponents/FormButton.vue'
import scrollToNewCost from '../../assets/utility_functions/scrollToNewCost'
import FixedCostDataInput from './FixedCostDataInput.vue'
import EllipsisModal from '../ModalComponents/EllipsisModal.vue'
import { useModalStore } from '../../stores/modalStore'
import handleDeleteCost from '../../assets/utility_functions/handleDeleteCost'
import handleEditCost from '../../assets/utility_functions/handleEditCost'

const modalStore = useModalStore()
const { ellipsisModalIsOpen } = storeToRefs(modalStore)
const {
  openEllipsisModal,
  openFormModal,
  openConfirmModal,
  closeEllipsisModal,
  closeConfirmModal
} = modalStore

const reportStore = useReportStore()
const { fixedCosts, selectedId } = storeToRefs(reportStore)
const { totalFixedCostAction, editFixedCostAction, deleteFixedCostAction, addSelectedIdAction } =
  reportStore

onUpdated(() => {
  scrollToNewCost(fixedCosts)
})
</script>

<template>
  <ellipsis-modal class="ellipsis-modal z-20" v-if="ellipsisModalIsOpen">
    <template #buttons>
      <button
        class="flex flex-row p-2"
        @click="
          handleEditCost(
            selectedId,
            addSelectedIdAction,
            editFixedCostAction,
            openFormModal,
            closeEllipsisModal,
            closeConfirmModal,
            totalFixedCostAction
          )
        "
      >
        <img src="../../images/edit-cost.svg" />
        <p class="hidden sm:block ml-1">Edit</p>
      </button>
      <button
        class="flex flex-row p-2"
        @click="
          handleDeleteCost(
            selectedId,
            addSelectedIdAction,
            closeEllipsisModal,
            closeConfirmModal,
            deleteFixedCostAction,
            totalFixedCostAction
          )
        "
      >
        <img src="../../images/delete-cost.svg" />
        <p class="hidden sm:block ml-1">Delete</p>
      </button>
    </template>
  </ellipsis-modal>
  <div
    v-if="ellipsisModalIsOpen"
    class="fixed top-0 bottom-0 left-0 right-0 z-10"
    @click="closeEllipsisModal()"
  ></div>
  <div class="mt-2 md:mt-8 w-full md:w-8/10">
    <div class="flex flex-row items-center h-10 md:h-16 bg-grey-200 text-grey-100 mb-4">
      <div :class="heading[1]" v-for="heading in fixedCostHeadingArray">
        <p>{{ heading[0] }}</p>
      </div>
    </div>

    <div class="max-h-32 md:max-h-64 w-screen sm:w-full overflow-auto">
      <div
        class="h-10 md:h-16 flex flex-row w-full"
        v-for="fixedCost in fixedCosts"
        :id="fixedCost.id"
        :key="fixedCost.id"
      >
        <div
          class="flex flex-row w-full items-end"
          @click="
            handleEditCost(
              fixedCost.id,
              addSelectedIdAction,
              editFixedCostAction,
              openFormModal,
              closeEllipsisModal,
              closeConfirmModal,
              totalFixedCostAction
            )
          "
        >
          <div class="basis-6/24 pr-2 md:pr-6">
            <p class="border-b border-grey-200">{{ fixedCost.name }}</p>
          </div>
          <div class="basis-6/24 pr-2 md:pr-6">
            <p class="border-b border-grey-200">{{ fixedCost.category }}</p>
          </div>
          <div class="basis-3/24 pr-2 md:pr-6">
            <p class="border-b border-grey-200">${{ fixedCost.amount }}</p>
          </div>
          <div class="basis-6/24 pr-2 md:pr-6">
            <p class="border-b border-grey-200">{{ fixedCost.frequency }}</p>
          </div>
          <div class="basis-3/24 pr-2 md:pr-6">
            <p class="border-b border-grey-200">${{ fixedCost.individualTotal }}</p>
          </div>
        </div>
        <div class="flex flex-row items-end basis-3/24">
          <button
            class="hidden md:block bg-costDelete bg-no-repeat w-10 h-10"
            @click="openConfirmModal(fixedCost.id, fixedCost.name)"
          ></button>
          <button
            class="block md:hidden sm:pr-2 md:pr-6"
            @click="openEllipsisModal(fixedCost.id)"
            @click.stop=""
          >
            ...
          </button>
        </div>
      </div>
    </div>
    <div class="hidden md:flex w-screen sm:w-full">
      <fixed-cost-data-input />
    </div>
  </div>
  <div class="md:hidden">
    <form-button
      label="+ Add Fixed Cost"
      type="submit"
      class="btn-add font-bold"
      @click="openFormModal('add')"
    />
  </div>
</template>
