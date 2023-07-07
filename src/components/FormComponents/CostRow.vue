<script setup lang="ts">
import { useModalStore } from '../../stores/modalStore'

const modalStore = useModalStore()
const { openEditFormModal } = modalStore

defineProps({
  costArr: {
    type: String,
    default: ''
  },
  parentClass: {
    type: String,
    default: ''
  },
  cellClass1: {
    type: String,
    default: ''
  },
  cellClass2: {
    type: String,
    default: ''
  },
  pClass: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  },
  costName: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    default: ''
  },
  amount: {
    type: Number,
    default: 0
  },
  frequency: {
    type: String,
    default: ''
  },
  individualTotal: {
    type: Number,
    default: 0
  },
})
</script>
<template>
  <div :class=parentClass :name=id>
    <div :class=cellClass1>
        <p :class=pClass> {{ costName }}</p>
    </div>
    <div :class=cellClass1>
        <p :class=pClass> {{ category }}</p>
    </div>
    <div :class=cellClass2>
        <p :class=pClass> {{ amount }}</p>
    </div>
    <div :class=cellClass1>
        <p :class=pClass> {{ frequency }}</p>
    </div>
    <div :class=cellClass2>
        <p :class=pClass> {{ individualTotal }}</p>
    </div>
  </div>
</template>
