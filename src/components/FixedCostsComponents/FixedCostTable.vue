<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import { onUpdated } from 'vue'
import FormButton from '../FormComponents/FormButton.vue'
import scrollToNewCost from '../../assets/utility_functions/scrollToNewCost'
import FixedCostDataInput from './FixedCostDataInput.vue'
import EllipsisModal from '../ModalComponents/EllipsisModal.vue'
import { useModalStore } from '../../stores/modalStore'

const modalStore = useModalStore()
const { ellipsisModalisOpen } = storeToRefs(modalStore)
const { openEllipsisModal, openFormModal, closeEllipsisModal } = modalStore

const reportStore = useReportStore()
const { fixedCosts } = storeToRefs(reportStore)
const { totalFixedCostAction, editFixedCostAction } = reportStore
const fixedCostHeadingArray = [
  ['Name', 'text-center basis-6/24 pr-2 md:pr-6'],
  ['Category', 'text-center basis-6/24 pr-2 md:pr-6'],
  ['Amount ($)', 'text-center basis-3/24 pr-2 md:pr-6'],
  ['Freq', 'text-center basis-3/24 pr-2 md:pr-6'],
  ['Total', 'text-center basis-3/24 pr-2 md:pr-6'],
  ['', 'text-center basis-3/24 pr-2 md:pr-6']
]

onUpdated(() => {
  scrollToNewCost(fixedCosts)
})

const handleEditCost = (
  id: string,
  name: string,
  category: string,
  amount: number | null,
  frequency: string,
  individualTotal: number
) => {
  openFormModal('edit')
  console.log('in handleEdit', id, name, category, amount, frequency, individualTotal)
  editFixedCostAction(id, name, category, amount, frequency, individualTotal)
}

const deleteCost = (fixedCost: {
  id: string
  name: string
  category: string
  amount: number | null
  frequency: string
  individualTotal: number | undefined
}) => {
  const filtersList = reportStore.fixedCosts.filter((el) => el !== fixedCost)
  reportStore.fixedCosts = filtersList
  totalFixedCostAction()
}
</script>

<template>
  <ellipsis-modal class="ellipsis-modal" v-if="ellipsisModalisOpen"> </ellipsis-modal>
  <div
    v-if="ellipsisModalisOpen"
    class="fixed top-0 bottom-0 left-0 right-0 z-10"
    @click="closeEllipsisModal('')"
  ></div>
  <div class="mt-2 md:mt-8 w-full md:w-8/10">
    <div class="flex flex-row items-center h-10 md:h-16 bg-grey-200 text-grey-100 mb-4">
      <div :class="heading[1]" v-for="heading in fixedCostHeadingArray">
        <p>{{ heading[0] }}</p>
      </div>
    </div>

    <div class="max-h-32 md:max-h-64 w-screen sm:w-full overflow-auto">
      <div
        class="h-10 md:h-16"
        v-for="fixedCost in fixedCosts"
        :id="fixedCost.id"
        :key="fixedCost.id"
        @click="
          handleEditCost(
            fixedCost.id,
            fixedCost.name,
            fixedCost.category,
            fixedCost.amount,
            fixedCost.frequency,
            fixedCost.individualTotal
          )
        "
      >
        <div class="flex flex-row">
          <div class="basis-6/24 pr-2 md:pr-6">
            <p class="border-b border-grey-200">{{ fixedCost.name }}</p>
          </div>
          <div class="basis-6/24 pr-2 md:pr-6">
            <p class="border-b border-grey-200">{{ fixedCost.category }}</p>
          </div>
          <div class="basis-3/24 pr-2 md:pr-6">
            <p class="border-b border-grey-200">${{ fixedCost.amount }}</p>
          </div>
          <div class="basis-3/24 pr-2 md:pr-6">
            <p class="border-b border-grey-200">{{ fixedCost.frequency }}</p>
          </div>
          <div class="basis-3/24 pr-2 md:pr-6">
            <p class="border-b border-grey-200">${{ fixedCost.individualTotal }}</p>
          </div>
          <button
            class="hidden md:block basis-3/24 bg-costDelete bg-no-repeat pr-2 md:pr-6"
            @click="deleteCost(fixedCost)"
          ></button>
          <button
            class="block md:hidden basis-3/24 sm:pr-2 md:pr-6"
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
