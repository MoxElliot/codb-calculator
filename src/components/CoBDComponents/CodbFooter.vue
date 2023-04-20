<script setup lang="ts">

const stepsArr:string[] = ["company-name-step", "fixed-cost-step"]

const step:number = 1
const stepCount:number = 1

const onClick  = ():string => {
  let stepLink: string = '' 
  step === 1 ? stepLink = stepsArr[0] : stepsArr[1]

  return stepLink
}

</script>


<template>
  <div>
    <router-link to="/company-name-step">
      Company Name Step
      <button class="border border-black w-32 rounded-full m-1 bg-cyan-500">Previous</button>
    </router-link>
    <router-link to="/fixed-cost-step">
      Fixed Cost Step
      <button class="border border-black w-32 rounded-full m-1 bg-cyan-500">Next</button>
    </router-link>
  </div>
</template>

<style scoped></style>


  