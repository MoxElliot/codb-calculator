<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useModalStore } from '../../stores/modalStore'

const modalStore = useModalStore()
const { isOpen, view } = storeToRefs(modalStore)
const { closeModal } = modalStore
</script>

<template>
  <div class="modal-container" v-if="isOpen">
    <div class="flex flex-col bg-primary-white p-16">
      <header class="modal-header">
        <slot name="header"> This is the default title! </slot>
        
      </header>

      <section class="modal-body">
        <slot name="body"> This is the default body! </slot>
      </section>

      <footer class="modal-footer">
        <slot name="footer"></slot>
        <button type="button" class="btn-back" @click="closeModal">Cancel</button>
        <button type="button" class="btn-next" @click="closeModal">Add</button>
      </footer>
    </div>
  </div>
</template>

