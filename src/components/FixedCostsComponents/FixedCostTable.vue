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
const { menuId } = storeToRefs(modalStore)
const { openEllipsisModal, openFormModal } = modalStore

const reportStore = useReportStore()
const { fixedCosts } = storeToRefs(reportStore)
const { totalFixedCostAction } = reportStore
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

const deleteCost = (fixedCost: {
  id: string
  name: string
  category: string
  amount: number | null
  payPeriod: string
  individualTotal: number | undefined
}) => {
  const filtersList = reportStore.fixedCosts.filter((el) => el !== fixedCost)
  reportStore.fixedCosts = filtersList
  totalFixedCostAction()
}
</script>

<template>
  <div class="mt-2 md:mt-8 w-full md:w-8/10">
    <div class="flex flex-row items-center h-10 md:h-16 bg-grey-200 text-grey-100 mb-4">
      <div :class="heading[1]" v-for="heading in fixedCostHeadingArray">
        <p>{{ heading[0] }}</p>
      </div>
    </div>

    <div class="h-32 md:h-64 w-screen sm:w-full overflow-auto">
      <div
        class="h-10 md:h-16"
        v-for="fixedCost in fixedCosts"
        :id="fixedCost.id"
        :key="fixedCost.id"
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
            <p class="border-b border-grey-200">{{ fixedCost.payPeriod }}</p>
          </div>
          <div class="basis-3/24 pr-2 md:pr-6">
            <p class="border-b border-grey-200">${{ fixedCost.individualTotal }}</p>
          </div>
          <button
            class="hidden md:block basis-3/24 bg-costDelete bg-no-repeat pr-2 md:pr-6"
            @click="deleteCost(fixedCost)"
          ></button>
          <ellipsis-modal
            class="block md:hidden basis-3/24 pr-2 md:pr-6"
            v-if="menuId === fixedCost.id"
            :id="fixedCost.id"
          >
            <template #body>
              <button>Edit</button>
              <button>Delete</button>
            </template>
          </ellipsis-modal>
          <button
            v-else
            class="block md:hidden basis-3/24 pr-2 md:pr-6"
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
      @click="openFormModal()"
    />
  </div>
</template>
