<script setup lang="ts">
import { onUpdated } from 'vue';
import FormButton from '../FormComponents/FormButton.vue'

defineEmits(['menu-event', 'edit-event', 'delete-event'])

// const props = defineProps({
//   xLoc: {
//     type: String,
//     default: ''
   
//   },
//   yLoc: {
//     type: String,
//     default: ''
   
//   }
//   })

// onUpdated(()=>{
//   console.log("hello",props.xLoc)
// })  :style="{left:props.xLoc + 'px', top:props.yLoc + 'px'}"
</script>

<template>
  <div
    class="absolute top-0 bottom-0 left-0 right-0 z-10 h-full w-full"
    @click="$emit('menu-event')"
  ></div>
  <div class="absolute  top-0 right-0 options-menu h-[85px] w-[85px] z-20" 
  
  >
    <section
      class="bg-primary-white flex flex-col justify-center items-center max-w-[100px] max-h-[100px]"
    >
      <form-button
        class="flex flex-row p-2"
        label="Edit"
        btnImage="src/images/edit-cost.svg"
        @click="$emit('edit-event')"
      />
      <form-button
        class="flex flex-row p-2"
        label="Delete"
        btnImage="/src/images/delete-cost.svg"
        @click="$emit('delete-event')"
      />
    </section>
  </div>
</template>
