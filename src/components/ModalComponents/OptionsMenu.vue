<script setup lang="ts">
import FormButton from '../FormComponents/FormButton.vue'
import EditCost from '../Icons/EditCost.vue'
import DeleteCost from '../Icons/DeleteCost.vue'

defineEmits(['menu-event', 'edit-event', 'delete-event'])
</script>

<template>
  <div
    class="fixed top-0 bottom-0 left-0 right-0 z-10 h-full w-full"
    @click="$emit('menu-event')"
  ></div>
  <div class="absolute top-0 right-0 options-menu h-[85px] w-[85px] z-50">
    <section
      class="bg-primary-white flex flex-col justify-center items-center max-w-[100px] max-h-[100px]"
    >
      <form-button
        class="flex flex-row p-2"
        label="Edit"
        :btnImage="EditCost"
        @click="$emit('edit-event')"
      />
      <form-button
        class="flex flex-row p-2"
        label="Delete"
        :btnImage="DeleteCost"
        @click="$emit('delete-event')"
      />
    </section>
  </div>
</template>
