<script setup lang="ts">
import FixedCostDetails from './FixedCosts/FixedCostDetails.vue'
import CompanyNameStep from './views/CompanyNameStep.vue'
import CodbHeader from './CodbHeader.vue'
import CodbFooter from './CodbFooter.vue'



</script>

<template>
  <div>
    <codb-header />
    <div class="m-2 flex flex-col">
      <div>
        <company-name-step />
      </div>
      <div>
        <fixed-cost-details />
      </div>
      <!-- <p class="font-bold">Fixed Cost Details</p>
            <div v-for="fixedCost in fixedCosts" :key="fixedCost.id"> 
                <fixed-cost-details :fixedCost="fixedCost"/>
            </div> -->
      <!-- <div>
                <p> Total: {{ totalFixedCosts }} </p>
            </div> -->
    </div>
    <codb-footer />
  </div>
</template>
