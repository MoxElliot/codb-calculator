<script setup lang="ts">
import { onMounted } from 'vue'
import FixedCostDataInput from '../FixedCostsComponents/FixedCostDataInput.vue'
import FixedCostTable from '../FixedCostsComponents/FixedCostTable.vue'
import { useReportStore } from '@/stores/reportStore'
import FormButton from '../FormComponents/FormButton.vue'
import { storeToRefs } from 'pinia'
import { useModalStore } from '../../stores/modalStore'

const modalStore = useModalStore()
const { isOpen } = storeToRefs(modalStore)
const { openModal } = modalStore

const reportStore = useReportStore()
const { updateInputValidAction } = reportStore
const { companyName } = storeToRefs(reportStore)

onMounted(() => {
  updateInputValidAction(true)
})

const fixedCostModalOn = () => {
  modalStore.isOpen === true
}
</script>

<template>
  <div class="flex flex-col text-center basis-full items-center justify-center">
    <div
      class="flex flex-row justify-center items-center text-heading text-grey-300 font-serif basis-1/6 w-6/10 mb-8"
    >
      <p class="">
        Fixed Costs for <span>{{ companyName }}</span>
      </p>
      <img src="../../images/fixed-cost-calandar.svg" alt="Calandar" class="px-3" />
    </div>
    <div class="text-body text-grey-300 basis-1/6 w-6/10">
      <p>
        A Fixed Cost is any Yearly or Monthly fee that you expect to pay in a regular year! Add the
        name of the cost, the category, the amount, and whether or not the cost is Monthly or
        Yearly.
      </p>
    </div>
    <div class="basis-full flex flex-col items-center justify-center w-7/10">
      <div class="hidden md:flex">
        <fixed-cost-data-input />
      </div>
      <div class="md:hidden">
        <div class="btn-add flex flex-col justify-center" v-show="!isOpen">
          <form-button label="Add Fixed Cost" type="submit" class="font-bold" @click="openModal('fixedCost')"/>
        </div>
      </div>
      <fixed-cost-table />
    </div>
  </div>
</template>
