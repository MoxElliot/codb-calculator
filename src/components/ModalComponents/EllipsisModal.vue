<script setup lang="ts">
import editCost from '../../images/edit-cost.svg'
import deleteCost from '../../images/delete-cost.svg'

</script>

<template>
  <div class="bg-primary-white flex flex-col justify-center items-center max-w-[100px] max-h-[100px] fixed top-[300px] left-[460px]">
    <button class="flex flex-row p-2"><img :src="editCost" /><p class="hidden sm:block ml-1">Edit</p></button>
    <button class="flex flex-row p-2"><img :src="deleteCost" /><p class="hidden sm:block ml-1">Delete</p></button>
  </div>
</template>
