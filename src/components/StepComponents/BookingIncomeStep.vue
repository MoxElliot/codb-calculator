<script setup lang="ts">
import { useReportStore } from '../../stores/reportStore'
import { storeToRefs } from 'pinia'
import DataInput from '../FormComponents/DataInput.vue'
import { onMounted } from 'vue'

const reportStore = useReportStore()
const { bookingsPerMonth, priceAveragePerBooking, hoursAveragePerBooking } =
  storeToRefs(reportStore)
const { addBookingsPerMonthAction, addPricePerBookingAction, addHoursPerBookingAction, updateInputValidAction } =
  reportStore

// onMounted(() => {
//   console.log('in onMounted', company.value)
//   if (companyName.value === '') {
//     updateInputValidAction(false)
//     console.log('in OnMounted If', inputValid.value)
//   }
// })

</script>

<template>
  <div class="basis-full flex flex-col justify-center items-center">
    <h4>How many bookings do you take on per month?</h4>
    <div class="">
      <data-input
        v-model="bookingsPerMonth"
        label="In a month, I typicaly book"
        labelAfter="shoots!"
        parentClass="flex flex-row"
        type="number"
        id="bookings-per-month"
        @blur="addBookingsPerMonthAction($event.target.value)"
      />
    </div>

    <div>
      <h4>How Much do you charge per booking on average?</h4>
      <data-input
        v-model="priceAveragePerBooking"
        label="$"
        parentClass="flex flex-row"
        type="number"
        id="price-average-per-booking"
        @blur="addPricePerBookingAction($event.target.value)"
      />

      <h4>How many hours do you work per booking? (Including editing time, meetings, etc.)</h4>
      <data-input
        v-model="hoursAveragePerBooking"
        labelAfter="Hours"
        parentClass="flex flex-row"
        type="number"
        id="hour-average-per-booking"
        @blur="addHoursPerBookingAction($event.target.value)"
      />
    </div>
  </div>
</template>
