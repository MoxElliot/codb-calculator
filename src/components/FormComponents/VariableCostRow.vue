<script setup lang="ts">
import { useModalStore } from '../../stores/modalStore'

const modalStore = useModalStore()
const { openEditFormModal } = modalStore

defineProps({
  parentClass: {
    type: String,
    default: ''
  },
  cellClass: {
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
    <div :class=cellClass>
        <p :class=pClass> {{ costName }}</p>
    </div>
    <div :class=cellClass>
        <p :class=pClass> {{ category }}</p>
    </div>
    <div :class=cellClass>
        <p :class=pClass> {{ amount }}</p>
    </div>
  </div>
</template>
