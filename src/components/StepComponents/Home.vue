<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const reportStore = useReportStore()
const { updateInputValidAction } = reportStore

onMounted(() => {
    updateInputValidAction(true)
})
</script>

<template>
  <!-- <div
    class="absolute top-0 left-0 bg-homeBackground bg-no-repeat bg-contain bg-center h-100 w-100"
  ></div> -->
  <!-- <div
    class="absolute top-14% left-4% bg-homeBackgroundTL bg-no-repeat bg-contain bg-center h-35/100 w-35/100"
  ></div>
  <div
    class="absolute top-18% right-2% bg-homeBackgroundTR bg-no-repeat bg-contain bg-center h-4/10 w-25/100"
  ></div>
  <div
    class="absolute bottom-9% left-7% bg-homeBackgroundBL bg-no-repeat bg-contain bg-center h-15/100 w-15/100"
  ></div>
  <div
    class="absolute bottom-4% right-7% bg-homeBackgroundBR bg-no-repeat bg-contain bg-center h-25/100 w-25/100"
  ></div> -->
  <div class="flex flex-row justify-center basis-full">
    <div
      class="flex flex-col items-center justify-around lg:basis-2/3 sm:basis-3/4 basis-full px-8"
    >   
        <div class="bg-homeWavingHand bg-no-repeat bg-right pr-12">
          <p class="font-serif text-grey-300 sm:text-heading2 text-heading2_xs">Hey there!</p>
        </div>
  
      <div class="font-sans text-grey-300 sm:text-body2 text-body2_xs text-center">
        <p class="">
          Welcome to the Cost of Doing Business (CoDB) tool. With this spreadsheet,
        </p>
        <p class="">
          you'll be able to easily calculate how much it costs for you to run your business!
        </p>
      </div>
      <div
        class="info-blue font-sans text-blue-300 sm:text-body text-body_xs m-6 sm:mt-2 md:py-6 md:pr-24 md:pl-16 sm:py-3 pr-12 pl-12 bg-homeInfoQuestionMark bg-no-repeat bg-infoQuesionMark bg-4%"
      >
        <p>This is a self-guided excercise, so don't feel rushed!</p>
        <p>Using the NEXT STEP button, navigate through each section until the end!</p>
      </div>
    </div>
  </div>
</template>
