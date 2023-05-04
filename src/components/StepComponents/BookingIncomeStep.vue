<script setup lang="ts">
// import { useBookingIncomeStore } from '../../stores/bookingIncomeStore'
import { useReportStore } from '../../stores/reportStore'
import { ref } from 'vue'
import DataInput from '../FormComponents/DataInput.vue'

// const bookingIncomeStore = useBookingIncomeStore()
const reportStore = useReportStore()

const bookingsPerMonth = ref<number>()
const priceAveragePerBooking = ref<number>()
const hoursAveragePerBooking = ref<number>()
</script>

<template>
  <div>
    <h4>Booking Income Step</h4>
  </div>
  <div>
    <h4>How many bookings do you take on per month?</h4>
    <data-input
      v-model="bookingsPerMonth"
      label="In a month, I typicaly book"
      type="number"
      id="bookings-per-month"
      @blur="reportStore.addBookingsPerMonthAction($event.target.value)"
    />
    <p>shoots!</p>
  </div>
  <div>
    <div>
      <h4>How Much do you charge per booking on average?</h4>
      <data-input
        v-model="priceAveragePerBooking"
        label="$"
        type="number"
        id="price-average-per-booking"
        @blur="reportStore.addPricePerBookingAction($event.target.value)"
      />
    </div>
    <div>
      <h4>How many hours do you work per booking? (Including editing time, meetings, etc.)</h4>
      <data-input
        v-model="hoursAveragePerBooking"
        label="Hours"
        type="number"
        id="hour-average-per-booking"
        @blur="reportStore.addHoursPerBookingAction($event.target.value)"
      />
    </div>
  </div>
</template>
