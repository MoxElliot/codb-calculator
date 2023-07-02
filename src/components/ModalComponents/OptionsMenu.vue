<script setup lang="ts">
import FormButton from '../FormComponents/FormButton.vue'
</script>

<template>
  <div
    class="fixed top-0 bottom-0 left-0 right-0 z-10 h-full w-full"
    @click="$emit('menuEvent')"
  ></div>
  <div class="absolute top-10 right-20 options-menu h-[85px] w-[85px] z-20">
    <section
      class="bg-primary-white flex flex-col justify-center items-center max-w-[100px] max-h-[100px]"
    >
      <form-button
        class="flex flex-row p-2"
        label="Edit"
        btnImage="src/images/edit-cost.svg"
        @click="$emit('editEvent')"
      />
      <form-button
        class="flex flex-row p-2"
        label="Delete"
        btnImage="/src/images/delete-cost.svg"
        @click="$emit('deleteEvent')"
      />
    </section>
  </div>
</template>
