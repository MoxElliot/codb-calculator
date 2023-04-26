<script setup lang="ts">
import { useBookingIncomeStore } from '../../stores/bookingIncomeStore'
import { ref } from 'vue'
import DataInput from '../FormComponents/DataInput.vue'

const bookingIncomeStore = useBookingIncomeStore()

const bookingsPerMonth = ref<number>()
const averagePricePerBooking = ref<number>()
const averageHoursPerBooking = ref<number>()

//@onChange="bookingIncomeStore.updateBookingsPerMonth(bookingsPerMonth)"

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
        @blur="bookingIncomeStore.updateBookingsPerMonth(bookingsPerMonth)"
      />
        <p>shoots!</p>
    </div>
</template>