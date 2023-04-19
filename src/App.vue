<script lang="ts">
import CompanyName from './components/CompanyName.vue'
import FixedCosts from './components/FixedCosts.vue'
import { useReportStore } from './stores/reportStore';

export default {
  name: 'App',
  components: {
    CompanyName,
    FixedCosts,
  },
  setup() {
    const reportStore = useReportStore()

    return { reportStore }
  },
  methods: {

  },
};
</script>

<template>
  <div class="app">
    <CompanyName />
  </div>
  <div class="fixed-costs">
    <FixedCosts />
  </div>
  <div class="flex">
    <p class="company-name_p m-2 font-bold">Company Name: </p>
    <p class="company-name_p m-2">{{ reportStore.companyName }}</p>
  </div>

  <footer>
    <button class="border border-black w-32 rounded-full m-1 bg-cyan-500">Previous</button>
    <button class="border border-black w-32 rounded-full m-1 bg-cyan-500">Next</button>
  </footer>
</template>

<style scoped>

</style>


