<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import { onUpdated } from 'vue'
import FormButton from '../FormComponents/FormButton.vue'
import VariableCostDataInput from '../VariableCostsComponents/VariableCostDataInput.vue'
import scrollToNewCost from '../../assets/utility_functions/scrollToNewCost'
import EllipsisModal from '../ModalComponents/EllipsisModal.vue'
import { useModalStore } from '../../stores/modalStore'

const modalStore = useModalStore()
const { ellipsisModalisOpen, formModalType, menuId } = storeToRefs(modalStore)
const { openEllipsisModal, openFormModal, closeEllipsisModal } = modalStore

const reportStore = useReportStore()
const { variableCosts } = storeToRefs(reportStore)
const { totalVariableCostAction, editVariableCostAction } = reportStore
const variableCostHeadingArray = [
  ['Name', 'basis-6/18 pr-2 md:pr-8'],
  ['Category', 'text-center basis-6/18 pr-2 md:pr-6'],
  ['Amount ($)', 'text-center basis-6/18 pr-2 md:pr-6'],
  ['', 'basis-3/18 pr-2 md:pr-6']
]

onUpdated(() => {
  scrollToNewCost(variableCosts)
})

const handleEditCost = (id: string, name: string, category: string, amount: number | null) => {
  openFormModal('edit')
  editVariableCostAction(id, name, category, amount)
}

const deleteCost = (variableCost: {
  id: string
  name: string
  category: string
  amount: number | null
}) => {
  const filtersList = reportStore.variableCosts.filter((el) => el !== variableCost)
  reportStore.variableCosts = filtersList
  totalVariableCostAction()
}
</script>

<template>
  <ellipsis-modal class="ellipsis-modal z-20" v-if="ellipsisModalisOpen">
    <template #buttons>
      <button class="flex flex-row p-2" @click="
            handleEditCost(
              variableCosts[Number(menuId)].id,
              variableCosts[Number(menuId)].name,
              variableCosts[Number(menuId)].category,
              variableCosts[Number(menuId)].amount
            )
          ">
        <img src="../../images/edit-cost.svg" />
        <p class="hidden sm:block ml-1">Edit</p>
      </button>
      <button class="flex flex-row p-2" @click="deleteCost(variableCosts[Number(menuId)])">
        <img src="../../images/delete-cost.svg" />
        <p class="hidden sm:block ml-1">Delete</p>
      </button>
    </template>
  </ellipsis-modal>
  <div
    v-if="ellipsisModalisOpen"
    class="fixed top-0 bottom-0 left-0 right-0 z-10"
    @click="closeEllipsisModal()"
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
          class="flex flex-row w-full"
          @click="handleEditCost(
                  variableCost.id,
                  variableCost.name,
                  variableCost.category,
                  variableCost.amount
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
        <button
          class="hidden md:block basis-3/18 bg-costDelete bg-no-repeat w-10 h-10"
          @click="deleteCost(variableCost)"
        ></button>
        <button
          class="block md:hidden basis-3/18 sm:pr-2 md:pr-6"
          @click="openEllipsisModal(variableCost.id)"
          @click.stop=""
        >
          ...
        </button>
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
