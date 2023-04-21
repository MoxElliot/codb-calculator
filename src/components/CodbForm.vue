<script setup lang="ts">
// import FixedCostDetails from './views/FixedCostStep.vue'
// import CompanyNameStep from './views/CompanyNameStep.vue'
// import CodbHeader from './CoBDComponents/CodbHeader.vue'
// import CodbFooter from './CoBDComponents/CodbFooter.vue'
</script>

<template>
  <div>
    <div id="nav" class="m-3">
      <router-link class="border border-black m-1" to="/company-name-step">Company Name Step</router-link>
      <router-link class="border border-black m-1" to="/fixed-cost-step">Fixed Cost Step</router-link>
      <router-link class="border border-black m-1" to="/variable-cost-step">Variable Cost Step</router-link>
      <router-link class="border border-black m-1" to="/booking-income-step">Booking Income Step</router-link>
      <router-link class="border border-black m-1" to="/owner-draw-step">Owner's Draw Step</router-link>
      <router-link class="border border-black m-1" to="/final-report-step">Final Report Step</router-link>
    </div>
    <router-view />
  </div>
  <div>
    <!-- <codb-header /> -->
    <div class="m-2 flex flex-col">
      <div>
        <!-- <company-name-step /> -->
      </div>
      <div>
        <!-- <fixed-cost-details /> -->
      </div>
    </div>
    <!-- <codb-footer /> -->
  </div>
</template>
