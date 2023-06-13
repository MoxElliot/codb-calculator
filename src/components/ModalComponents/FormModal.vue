<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useModalStore } from '../../stores/modalStore'

const modalStore = useModalStore()
const { isOpen, view } = storeToRefs(modalStore)
const { closeModal } = modalStore
</script>

<template>
  <div class="modal-container" v-if="isOpen">
    <div class="flex flex-col bg-primary-white p-12">
      <header class="modal-header">
        <slot name="header"> This is the default title! </slot>
      </header>

      <section class="modal-body pb-6">
        <slot name="body"> This is the default body! </slot>
      </section>
    </div>
  </div>
</template>

