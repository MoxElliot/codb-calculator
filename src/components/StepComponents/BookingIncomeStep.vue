<script setup lang="ts">
import { useReportStore } from '../../stores/reportStore'
import { storeToRefs } from 'pinia'
import DataInput from '../FormComponents/DataInput.vue'
import { useForm, useField } from 'vee-validate'
import * as Yup from 'yup'
import { computed, onMounted, type WritableComputedRef } from 'vue'

const reportStore = useReportStore()
const {
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
  validationSchema: schema,
  
})

const { value: bookings, errorMessage: bookingsError, meta: bookingMeta } = useField('bookings')
const { value: price, errorMessage: priceError, meta: priceMeta } = useField('price')
const { value: hours, errorMessage: hoursError, meta: hoursMeta } = useField('hours')
</script>

<template>
  <div class="basis-full flex flex-col justify-center items-center">
    <h4>How many bookings do you take on per month?</h4>
    <div class="">
      <data-input
        v-model="bookingsPerMonthInput"
        label="In a month, I typicaly book"
        labelAfter="shoots!"
        parentClass="flex flex-row"
        type="number"
        id="bookings-per-month"
      />
    </div>

    <div>
      <data-input
        v-model="priceAveragePerBookingInput"
        label="How Much do you charge per booking on average?"
        parentClass="flex flex-row"
        type="number"
        id="price-average-per-booking"
      />
    </div>
    <div>
      <data-input
        v-model="hoursAveragePerBookingInput"
        label="How many hours do you work per booking? (Including editing time, meetings, etc.)"
        labelAfter="Hours"
        parentClass="flex flex-row"
        type="number"
        id="hour-average-per-booking"
      />
    </div>
    <span class="error-text">{{ bookingsError }}</span>
    <span class="error-text">{{ priceError }}</span>
    <span class="error-text">{{ hoursError }}</span>
    <span class="error-text" v-show="!bookingMeta.dirty || !priceMeta.dirty || !hoursMeta.dirty">{{
      blankSubmitError
    }}</span>
  </div>
</template>
