<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import { onUpdated } from 'vue'
import variableCostHeadingArray from '@/assets/variableCostHeadings'
import FormButton from '../FormComponents/FormButton.vue'
import VariableCostDataInput from '../VariableCostsComponents/VariableCostDataInput.vue'
import scrollToNewCost from '../../assets/utility_functions/scrollToNewCost'
import OptionsMenu from '../ModalComponents/OptionsMenu.vue'
import { useModalStore } from '../../stores/modalStore'
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
const { variableCosts, selectedId, selectedCost } = storeToRefs(reportStore)
const {
  totalVariableCostAction,
  editVariableCostAction,
  addSelectedIdAction
} = reportStore

onUpdated(() => {
  scrollToNewCost(variableCosts)
})
</script>

<template>
  <options-menu class="ellipsis-modal z-20" v-if="optionsMenuIsOpen">
    <template #buttons>
      <button
        class="flex flex-row p-2"
        @click="
          handleEditCost(
            selectedId,
            addSelectedIdAction,
            editVariableCostAction,
            openFormModal,
            closeOptionsMenu,
            closeConfirmModal,
            totalVariableCostAction
          )
        "
      >
        <img src="../../images/edit-cost.svg" />
        <p class="hidden sm:block ml-1">Edit</p>
      </button>
      <button
        class="flex flex-row p-2"
        @click="openConfirmModal(selectedId, selectedCost.name)"
      >
        <img src="../../images/delete-cost.svg" />
        <p class="hidden sm:block ml-1">Delete</p>
      </button>
    </template>
  </options-menu>
  <div
    v-if="optionsMenuIsOpen"
    class="fixed top-0 bottom-0 left-0 right-0 z-10"
    @click="closeOptionsMenu()"
  ></div>
  <div class="mt-2 md:mt-8 w-full md:w-8/10">
    <div class="flex flex-row items-center h-10 md:h-16 bg-grey-200 text-grey-100 mb-4">
      <div :class="heading[1]" v-for="heading in variableCostHeadingArray">
        <p>{{ heading[0] }}</p>
      </div>
    </div>
    <div class="max-h-32 md:max-h-64 w-screen sm:w-full overflow-auto">
      <div
        class="h-10 md:h-16 flex flex-row w-full"
        v-for="variableCost in variableCosts"
        :id="variableCost.id"
        :key="variableCost.id"
      >
        <div
          class="flex flex-row w-full items-end"
          @click="
            handleEditCost(
              variableCost.id,
              addSelectedIdAction,
              editVariableCostAction,
              openFormModal,
              closeOptionsMenu,
              closeConfirmModal,
              totalVariableCostAction
            )
          "
        >
          <div class="basis-6/18 pr-2 md:pr-6">
            <p class="border-b border-grey-200">{{ variableCost.name }}</p>
          </div>
          <div class="basis-6/18 pr-2 md:pr-6">
            <p class="border-b border-grey-200">{{ variableCost.category }}</p>
          </div>
          <div class="basis-6/18 pr-2 md:pr-6">
            <p class="border-b border-grey-200">$ {{ variableCost.amount }}</p>
          </div>
        </div>
        <div class="flex flex-row items-end basis-3/18">
          <button
            class="hidden md:block bg-costDelete bg-no-repeat w-10 h-10"
            @click="openConfirmModal(variableCost.id, variableCost.name)"
          ></button>
          <button
            class="block md:hidden sm:pr-2 md:pr-6"
            @click="openOptionsMenu(variableCost.id)"
            @click.stop=""
          >
            ...
          </button>
        </div>
      </div>
    </div>
    <div class="hidden md:flex w-screen sm:w-full">
      <variable-cost-data-input />
    </div>
  </div>
  <div class="md:hidden">
    <form-button
      label="+ Add Variable Cost"
      type="submit"
      class="btn-add font-bold"
      @click="openFormModal('add')"
    />
  </div>
</template>
