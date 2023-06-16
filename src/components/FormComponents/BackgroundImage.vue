<script setup lang="ts">
const props = defineProps({
  tlImage: {
    type: String,
    default: ''
  },
  tlClass: {
    type: String,
    default: ''
  },
  trImage: {
    type: String,
    default: ''
  },
  trClass: {
    type: String,
    default: ''
  },
  brImage: {
    type: String,
    default: ''
  },
  brClass: {
    type: String,
    default: ''
  },
  blImage: {
    type: String,
    default: ''
  },
  blClass: {
    type: String,
    default: ''
  },
 
})
</script>
<template>
    <img :src='tlImage' :class='tlClass' />
    <img :src='trImage' :class='trClass' />
    <img :src='blImage' :class='blClass' />
    <img :src='brImage' :class='brClass' />
</template>
