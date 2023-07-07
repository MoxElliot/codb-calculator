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
  openEditFormModal,
  openConfirmModal,
  closeOptionsMenu,
  closeConfirmModal
} = modalStore

const reportStore = useReportStore()
const { variableCosts, selectedId } = storeToRefs(reportStore)
const { totalCostAction, editVariableCostAction, addSelectedIdAction } = reportStore

onUpdated(() => {
  scrollToNewCost(variableCosts.value[0].id)
})
</script>

<template>
  <div class="mt-2 md:mt-8 w-full md:w-8/10 relative">
    <div class="flex flex-row items-center h-10 md:h-16 bg-grey-200 text-grey-100 mb-4">
      <div :class="heading[1]" v-for="heading in variableCostHeadingArray">
        <p>{{ heading[0] }}</p>
      </div>
    </div>
    <options-menu
      v-if="optionsMenuIsOpen"
      @edit-event="openEditFormModal(selectedId, 'variable')"
      @delete-event="openConfirmModal(selectedId, 'variable')"
      @menu-event="closeOptionsMenu()"
    />

    <div class="max-h-32 md:max-h-64 w-screen sm:w-full overflow-auto">
      <div
        class="h-10 md:h-16 flex flex-row w-full"
        v-for="variableCost in variableCosts"
        :id="variableCost.id"
        :key="variableCost.id"
      >
        <div class="flex flex-row w-full items-end" @click="openEditFormModal(variableCost.id, 'variable')">
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
        <form-button
          class="md:flex md:flex-row hidden basis-3/24 h-full pt-6"
          btnImage="/src/images/delete-cost.svg"
          @click="openConfirmModal(variableCost.id, 'variable')"
        />
        <form-button
          class="flex flex-row md:hidden basis-3/24 w-3/4 h-3/4"
          label="..."
          @click="openOptionsMenu(variableCost.id)"
          @click.stop=""
        />
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
