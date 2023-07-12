<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { onMounted } from 'vue'
import HomeBackground from '../../images/home_background.svg'

const reportStore = useReportStore()
const { updateInputValidAction } = reportStore

onMounted(() => {
  updateInputValidAction(true)
})
</script>

<template>

  <img
    :src="HomeBackground"
    alt=""
    class="hidden lg:block absolute top-0 left-0 bottom-0 right-0 h-100 w-100 z-10"
  />
  <div class="flex basis-full justify-center items-center h-full z-20">
    <div
      class="flex flex-col items-center justify-center basis-full md:basis-3/4 lg:basis-2/3 px-8"
    >
      <div class="flex mb-2 md:mb-10">
        <p class="font-serif text-grey-300 text-heading2_xs md:text-heading2">Hey there!</p>
        <img src="../../images/waving_hand.svg" alt="Waving Hand" width="40" height="40" />
      </div>

      <div class="font-sans text-grey-300 md:text-body2 text-body2_xs text-center mb-2 md:mb-10">
        <p class="">
          Welcome to the Cost of Doing Business (CoDB) tool. With this spreadsheet, you'll be able
          to easily calculate how much it costs for you to run your business!
        </p>
      </div>
      <div
        class="flex info-blue font-sans text-blue-300 text-body_xs md:text-body my-2 md:mb-10 md:py-6 md:pr-24 md:pl-16 p-3"
      >
        <img
          src="../../images/info-question-mark.svg"
          alt="Question"
          class="p-1 self-start"
          width="40"
          height="40"
        />
        <div>
          <p>This is a self-guided excercise, so don't feel rushed!</p>
          <p>Using the NEXT STEP button, navigate through each section until the end!</p>
        </div>
      </div>
    </div>
  </div>
</template>
