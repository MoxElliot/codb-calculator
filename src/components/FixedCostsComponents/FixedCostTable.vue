<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import { onUpdated } from 'vue'
import fixedCostHeadingArray from '../../assets/fixedCostHeadings'
import FormButton from '../FormComponents/FormButton.vue'
import scrollToNewCost from '../../assets/utility_functions/scrollToNewCost'
import FixedCostDataInput from './FixedCostDataInput.vue'
import OptionsMenu from '../ModalComponents/OptionsMenu.vue'
import { useModalStore } from '../../stores/modalStore'
import handleDeleteCost from '../../assets/utility_functions/handleDeleteCost'
import handleEditCost from '../../assets/utility_functions/handleEditCost'

const modalStore = useModalStore()
const { optionsMenuIsOpen } = storeToRefs(modalStore)
const {
  openOptionsMenu,
  openFormModal,
  openConfirmModal,
  closeOptionsMenu,
  closeConfirmModal
} = modalStore

const reportStore = useReportStore()
const { fixedCosts, selectedId, selectedCost } = storeToRefs(reportStore)
const { totalFixedCostAction, editFixedCostAction, deleteFixedCostAction, addSelectedIdAction } =
  reportStore

onUpdated(() => {
  scrollToNewCost(fixedCosts)
})

const testLocation = (e: any) => {
console.log("in testLocaion","x", e.clientX,"y", e.clientY)
}
</script>

<template>
  <div class="mt-2 md:mt-8 w-full md:w-8/10 relative" @click="testLocation">
    <options-menu
      class="ellipsis-modal z-20"
      v-if="optionsMenuIsOpen"
      @edit-event="
        handleEditCost(
          selectedId,
          addSelectedIdAction,
          editFixedCostAction,
          openFormModal,
          closeOptionsMenu,
          closeConfirmModal,
          totalFixedCostAction
        )
      "
      @delete-event="openConfirmModal(selectedId, selectedCost.name)"
      @menu-event="closeOptionsMenu"
    />
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
              closeOptionsMenu,
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
            @click="openOptionsMenu(fixedCost.id)"
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
