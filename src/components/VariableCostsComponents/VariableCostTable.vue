<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import { onUpdated } from 'vue'
import FormButton from '../FormComponents/FormButton.vue'
import VariableCostDataInput from '../VariableCostsComponents/VariableCostDataInput.vue'
import scrollToNewCost from '../../assets/utility_functions/scrollToNewCost'
import { useModalStore } from '../../stores/modalStore'

const modalStore = useModalStore()
const { menuId } = storeToRefs(modalStore)
const { openEllipsisModal, openFormModal } = modalStore

const reportStore = useReportStore()
const { variableCosts } = storeToRefs(reportStore)
const { totalVariableCostAction } = reportStore
const variableCostHeadingArray = [
  ['Name', 'basis-6/18 pr-2 md:pr-8'],
  ['Category', 'text-center basis-6/18 pr-2 md:pr-6'],
  ['Amount ($)', 'text-center basis-3/18 pr-2 md:pr-6'],
  ['', 'basis-3/18 pr-2 md:pr-6']
]

onUpdated(() => {
  scrollToNewCost(variableCosts)
  console.log("in table'", variableCosts.value)
})

const deleteCost = (variableCost: {
  id: string
  name: string
  category: string
  amount: number | null | undefined
}) => {
  const filtersList = reportStore.variableCosts.filter((el) => el !== variableCost)
  reportStore.variableCosts = filtersList
  totalVariableCostAction()
}
</script>

<template>
  <div class="mt-2 md:mt-8 w-full md:w-8/10">
    <div class="flex flex-row items-center h-10 md:h-16 bg-grey-200 text-grey-100 mb-4">
      <div :class="heading[1]" v-for="heading in variableCostHeadingArray">
        <p>{{ heading[0] }}</p>
      </div>
    </div>
    <div class="h-32 md:h-64 w-screen sm:w-full overflow-auto">
      <div
        class="h-10 md:h-16"
        v-for="variableCost in variableCosts"
        :id="variableCost.id"
        :key="variableCost.id"
      >
        <div class="flex flex-row">
          <div class="basis-6/18 pr-2 md:pr-6">
            <p class="border-b border-grey-200">{{ variableCost.name }}</p>
          </div>
          <div class="basis-6/18 pr-2 md:pr-6">
            <p class="border-b border-grey-200">{{ variableCost.category }}</p>
          </div>
          <div class="basis-3/18 pr-2 md:pr-6">
            <p class="border-b border-grey-200">$ {{ variableCost.amount }}</p>
          </div>
          <button
            class="basis-3/18 bg-costDelete bg-no-repeat bg-center pr-2 md:pr-6"
            @click="deleteCost(variableCost)"
          ></button>
          <ellipsis-modal
            class="block md:hidden basis-3/24 sm:pr-2 md:pr-6"
            v-if="menuId === variableCost.id"
            :id="variableCost.id"
          >
            <template #body>
              <button>Edit</button>
              <button>Delete</button>
            </template>
          </ellipsis-modal>
          <button
            v-else
            class="block md:hidden basis-3/24 sm:pr-2 md:pr-6"
            @click="openEllipsisModal(variableCost.id)"
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
      @click="openFormModal()"
    />
  </div>
</template>
