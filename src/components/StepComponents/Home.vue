<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { onMounted } from 'vue'
import BackgroundImage from '../FormComponents/BackgroundImage.vue'
import HomeBackgroundTL from '../../images/home_background_tl.svg'
import HomeBackgroundTR from '../../images/home_background_tr.svg'
import HomeBackgroundBL from '../../images/home_background_bl.svg'
import HomeBackgroundBR from '../../images/home_background_br.svg'

const reportStore = useReportStore()
const { updateInputValidAction } = reportStore

onMounted(() => {
  updateInputValidAction(true)
})
</script>

<template>
  <BackgroundImage
    :tl-image="HomeBackgroundTL"
    tl-class="absolute top-4% left-0 h-40/100"
    :tr-image="HomeBackgroundTR"
    tr-class="absolute top-4% right-0 h-40/100"
    :bl-image="HomeBackgroundBL"
    bl-class="absolute bottom-9% left-7% h-40/100"
    :br-image="HomeBackgroundBR"
    br-class="absolute bottom-4% right-7% h-40/100"
    component-class="invisible"
  />
  <!-- <HomeBackground class="invisible absolute top-0 left-0 bottom-0 right-0 bg-no-repeat bg-cover bg-center h-100 w-100"/> -->

  <div
    class="flex flex-col items-center justify-around basis-full md:basis-3/4 lg:basis-2/3 px-8 overflow-auto"
  >
    <div class="flex">
      <p class="font-serif text-grey-300 text-heading2_xs md:text-heading2">Hey there!</p>
      <img src="../../images/waving_hand.svg" alt="Waving Hand" width="40" height="40" />
    </div>

    <div class="font-sans text-grey-300 md:text-body2 text-body2_xs text-center">
      <p class="">
        Welcome to the Cost of Doing Business (CoDB) tool. With this spreadsheet, you'll be able to
        easily calculate how much it costs for you to run your business!
      </p>
    </div>
    <div
      class="flex info-blue font-sans text-blue-300 text-body_xs md:text-body my-2 md:m-6 md:py-6 md:pr-24 md:pl-16 p-3"
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
</template>
