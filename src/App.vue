<script setup lang="ts">
import FormModal from '@/components/ModalComponents/FormModal.vue'
import FixedCostDataInput from './components/FixedCostsComponents/FixedCostDataInput.vue'
import { storeToRefs } from 'pinia'
import { useModalStore } from './stores/modalStore'

const modalStore = useModalStore()
const { isOpen, view } = storeToRefs(modalStore)
const { closeModal } = modalStore
</script>
<template>
  <div class="h-screen">
    <form-modal>
      <template #header>
        <div
          v-if="view === 'fixedCost'"
          class="flex flex-row justify-center items-center text-heading text-grey-300 font-serif"
        >
          <p>Add Fixed Cost</p>
        </div>
      </template>
      <template #body>
        <div class="">
          <fixed-cost-data-input v-if="view === 'fixedCost'" />
        </div>
      </template>
    </form-modal>
    <RouterView />
  </div>
</template>
