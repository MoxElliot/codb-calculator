<script setup lang="ts">
import { useReportStore } from '../../stores/reportStore'
import { storeToRefs } from 'pinia'
import DataInput from '../FormComponents/DataInput.vue'
import { useForm, useField } from 'vee-validate'
import * as Yup from 'yup'
import { computed, onMounted, type WritableComputedRef } from 'vue'

const reportStore = useReportStore()
const {
  companyName,
  bookingsPerMonth,
  priceAveragePerBooking,
  hoursAveragePerBooking,
  blankSubmitError
} = storeToRefs(reportStore)
const {
  addBookingsPerMonthAction,
  addPricePerBookingAction,
  addHoursPerBookingAction,
  updateInputValidAction
} = reportStore

onMounted(() => {
  if (
    bookingsPerMonth.value === 0 ||
    priceAveragePerBooking.value === 0 ||
    hoursAveragePerBooking.value === 0
  ) {
    updateInputValidAction(false)
  }
})

const bookingsPerMonthInput: WritableComputedRef<number> = computed<number>({
  get: () => bookingsPerMonth.value, //Maintains data in field if user goes back
  set: async (num: number) => {
    bookings.value = num //take this out of the set, no validation will happen
    addBookingsPerMonthAction(num) // updates Pinia state
    const resp = await bookingIncomeForm.validate()
    console.log('in BookingsInput', resp.errors.bookings)
    updateInputValidAction(resp.valid) // enables the Next button
  }
})

const priceAveragePerBookingInput: WritableComputedRef<number> = computed<number>({
  get: () => priceAveragePerBooking.value, //Maintains data in field if user goes back
  set: async (num: number) => {
    price.value = num //take this out of the set, no validation will happen
    addPricePerBookingAction(num) // updates Pinia state
    const resp = await bookingIncomeForm.validate()
    console.log('in BookingsInput', resp.errors.price)
    updateInputValidAction(resp.valid) // enables the Next button
  }
})

const hoursAveragePerBookingInput: WritableComputedRef<number> = computed<number>({
  get: () => hoursAveragePerBooking.value, //Maintains data in field if user goes back
  set: async (num: number) => {
    hours.value = num //take this out of the set, no validation will happen
    addHoursPerBookingAction(num) // updates Pinia state
    const resp = await bookingIncomeForm.validate()
    console.log('in BookingsInput', resp.errors.hours)
    updateInputValidAction(resp.valid) // enables the Next button
  }
})

const schema = Yup.object({
  bookings: Yup.number().typeError('Please Enter a Number').required('All Fields Required'),
  price: Yup.number().typeError('Please Enter a Number').required('All Fields Required'),
  hours: Yup.number().typeError('Please Enter a Number').required('All Fields Required')
})

const bookingIncomeForm = useForm({
  validationSchema: schema
})

const { value: bookings, errorMessage: bookingsError, meta: bookingMeta } = useField('bookings')
const { value: price, errorMessage: priceError, meta: priceMeta } = useField('price')
const { value: hours, errorMessage: hoursError, meta: hoursMeta } = useField('hours')
</script>

<template>
  <div class="flex flex-col text-center basis-full items-center justify-center">
    <div
      class="flex flex-row justify-center items-center text-heading2_xs md:text-heading text-grey-300 font-serif md:basis-1/6 md:w-6/10 md:mb-8"
    >
      <p class="">
        Booking Income for <span>{{ companyName }}</span>
      </p>
      <img
        src="../../images/fixed-cost-calandar.svg"
        alt="Calandar"
        class="hidden sm:inline sm:px-3"
      />
    </div>
    <div class="text-grey-300 text-body2_xs md:text-body2 basis-1/6 w-8/10 md:w-6/10">
      <p>Fantastic work with those costs!</p>
      <p>Now, let's talk about how much you're making per booking.</p>
    </div>
    <div
      class="basis-full flex flex-col md:items-center mt-2 md:mt-8 w-screen md:w-full overflow-auto"
    >
      <div class="font-sans text-grey-300 text-body md:mt-6 md:px-6">
        <data-input
          v-model="bookingsPerMonthInput"
          label="How many shoots do you typically book a month?"
          parentClass="flex flex-col md:flex-row items-center md:mt-6"
          class="pl-3 text-center border-b border-grey-200 w-fit"
          type="number"
          id="bookings-per-month"
        />

        <data-input
          v-model="priceAveragePerBookingInput"
          label="How Much do you charge per booking on average?"
          parentClass="flex flex-col md:flex-row items-center md:mt-6"
          class="pl-3 text-center border-b border-grey-200 w-fit"
          type="number"
          id="price-average-per-booking"
        />

        <data-input
          v-model="hoursAveragePerBookingInput"
          label="How many hours do you work per booking? (Including editing time, meetings, etc.)"
          parentClass="flex flex-col md:flex-row items-center md:mt-6"
          class="pl-3 text-center border-b border-grey-200 w-fit"
          type="number"
          id="hour-average-per-booking"
        />

        <span class="error-text">{{ bookingsError }}</span>
        <span class="error-text">{{ priceError }}</span>
        <span class="error-text">{{ hoursError }}</span>
        <span
          class="error-text"
          v-show="!bookingMeta.dirty || !priceMeta.dirty || !hoursMeta.dirty"
          >{{ blankSubmitError }}</span
        >
      </div>
    </div>
  </div>
</template>
