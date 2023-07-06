<script setup lang="ts">
import { useModalStore } from '../../stores/modalStore'
import { storeToRefs } from 'pinia'
import FormButton from '../FormComponents/FormButton.vue'

const modalStore = useModalStore()
const { confirmCostName } = storeToRefs(modalStore)

defineEmits(['cancel-confirm', 'handle-confirm'])
</script>
<template>
    <div class="fixed top-0 bottom-0 left-0 right-0 bg-primary-white/60 flex justify-center items-center z-40">
      <div class="flex flex-col justify-center p-8 rounded-2xl bg-primary-white drop-shadow-xl w-80">
        <header class="flex flex-row justify-center items-center text-body2 text-grey-300 text-center">
          <p>Are you sure you want to delete the cost {{ confirmCostName }}?</p>
        </header>
  
        <section class=" min-h-[100px]">
          <div class="flex flex-row p-1 md:p-4 h-full">
        <form-button label="No" type="button" class="modal-btn-cancel" 
        @click="$emit('cancel-confirm')"/>
        <form-button
          label="Yes"
          type="submit"
          class="modal-btn-add"
          @click="$emit('handle-confirm')"
        />
      </div>
        </section>
      </div>
    </div>
  </template>
  