<script setup lang="ts">
import { useReportStore } from '../../stores/reportStore'
import { storeToRefs } from 'pinia'
import DataInput from '../FormComponents/DataInput.vue'

const reportStore = useReportStore()
const { bookingsPerMonth, priceAveragePerBooking, hoursAveragePerBooking } =
  storeToRefs(reportStore)
const { addBookingsPerMonthAction, addPricePerBookingAction, addHoursPerBookingAction } =
  reportStore
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
      @blur="addBookingsPerMonthAction($event.target.value)"
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
        @blur="addPricePerBookingAction($event.target.value)"
      />
    </div>
    <div>
      <h4>How many hours do you work per booking? (Including editing time, meetings, etc.)</h4>
      <data-input
        v-model="hoursAveragePerBooking"
        label="Hours"
        type="number"
        id="hour-average-per-booking"
        @blur="addHoursPerBookingAction($event.target.value)"
      />
    </div>
  </div>
</template>
