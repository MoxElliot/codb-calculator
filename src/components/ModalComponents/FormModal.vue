<script setup lang="ts">
import { useModalStore } from '../../stores/modalStore'
import { storeToRefs } from 'pinia'

const modalStore = useModalStore()
const { formModalType } = storeToRefs(modalStore)

defineProps({
  type: {
    type: String,
    default: ''
  },
})
</script>

<template>
  <div
    class="fixed top-0 bottom-0 left-0 right-0 bg-primary-white/60 flex justify-center items-center z-40"
  >
    <div class="rounded-2xl bg-primary-white drop-shadow-xl h-full w-full sm:w-fit sm:h-fit p-12">
      <div class="flex flex-col justify-center h-full">
        <header class="modal-header">
          <div
            class="flex flex-row justify-center items-center text-heading2_xs md:text-heading text-grey-300 font-serif"
          >
            <p v-if="formModalType === 'add'">Add {{ type }} Cost</p>
            <p v-else-if="formModalType === 'edit'">Edit {{ type }} Cost</p>
          </div>
        </header>

        <section class="">
          <slot name="body"> This is the default body! </slot>
        </section>
      </div>
    </div>
  </div>
</template>
