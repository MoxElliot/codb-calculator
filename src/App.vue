<script lang="ts" setup>
import { defineComponent } from 'vue';
import CompanyName from './components/CompanyName.vue'

// export default defineComponent({
//   name: 'App',
//   components: {},
//   setup() {
   
//   },
//   methods: {

//   },
// });
</script>

<template>
  <div class="app">
    <CompanyName />
  </div>
  <footer>
    <button class="btn btn-previous">Previous</button>
    <button class="btn btn-next ">Next</button>
  </footer>
</template>

<style scoped>
.btn {
  border: 1px solid black;
  margin: 1rem;
  padding: .3rem;
}
</style>


