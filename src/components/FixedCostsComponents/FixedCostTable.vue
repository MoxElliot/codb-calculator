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
import CostRow from '../FormComponents/CostRow.vue'

const modalStore = useModalStore()
const { optionsMenuIsOpen } = storeToRefs(modalStore)
const { openOptionsMenu, openFormModal, openEditFormModal, openConfirmModal, closeOptionsMenu } =
  modalStore

const reportStore = useReportStore()
const { fixedCosts, selectedId } = storeToRefs(reportStore)

onUpdated(() => {
  scrollToNewCost(fixedCosts.value[0].id)
})
</script>

<template>
  <div class="mt-2 md:mt-8 w-full md:w-8/10 relative">
    <div class="flex flex-row items-center h-10 md:h-16 bg-grey-200 text-grey-100 mb-4">
      <div :class="heading[1]" v-for="heading in fixedCostHeadingArray">
        <p>{{ heading[0] }}</p>
      </div>
    </div>
    <options-menu
      v-if="optionsMenuIsOpen"
      @edit-event="openEditFormModal(selectedId, 'fixed')"
      @delete-event="openConfirmModal(selectedId, 'fixed')"
      @menu-event="closeOptionsMenu()"
    />
    <div class="max-h-32 sm:max-h-64 w-screen sm:w-full overflow-auto">
      <div
        class="h-10 md:h-16 flex flex-row w-full"
        v-for="fixedCost in fixedCosts"
        :id="fixedCost.id"
        :key="fixedCost.id"
      >
        <cost-row
          @click="openEditFormModal(fixedCost.id, 'fixed')"
          parentClass="flex flex-row w-full items-end"
          cellClass1="basis-6/24 pr-2 md:pr-6"
          cellClass2="basis-3/24 pr-2 md:pr-6"
          pClass="border-b border-grey-200"
          :name="fixedCost.id"
          :costName="fixedCost.name"
          :category="fixedCost.category"
          :amount="fixedCost.amount"
          :frequency="fixedCost.frequency"
          :individual-total="fixedCost.individualTotal"
        >
      
        </cost-row>
        <form-button
          class="md:flex md:flex-row hidden basis-3/24 h-full pt-6"
          btnImage="/src/images/delete-cost.svg"
          @click="openConfirmModal(fixedCost.id, 'fixed')"
        />
        <form-button
          class="flex flex-row md:hidden basis-3/24 w-3/4 h-3/4"
          label="..."
          @click="openOptionsMenu(fixedCost.id)"
          @click.stop=""
        />
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
