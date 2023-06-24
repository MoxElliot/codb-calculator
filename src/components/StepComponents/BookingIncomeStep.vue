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
  get: () => bookingsPerMonth.value,
  set: async (num: number) => {
    bookings.value = num
    addBookingsPerMonthAction(num)
    const resp = await bookingIncomeForm.validate()
    updateInputValidAction(resp.valid)
  }
})

const priceAveragePerBookingInput: WritableComputedRef<number> = computed<number>({
  get: () => priceAveragePerBooking.value,
  set: async (num: number) => {
    price.value = num
    addPricePerBookingAction(num)
    const resp = await bookingIncomeForm.validate()
    updateInputValidAction(resp.valid)
  }
})

const hoursAveragePerBookingInput: WritableComputedRef<number> = computed<number>({
  get: () => hoursAveragePerBooking.value,
  set: async (num: number) => {
    hours.value = num
    addHoursPerBookingAction(num)
    const resp = await bookingIncomeForm.validate()
    updateInputValidAction(resp.valid)
  }
})

const schema = Yup.object({
  bookings: Yup.number().typeError('Please Enter a Number').required(' '),
  price: Yup.number().typeError('Please Enter a Number').required(' '),
  hours: Yup.number().typeError('Please Enter a Number').required(' ')
})

const bookingIncomeForm = useForm({
  validationSchema: schema,
  validateOnMount: true
})

const { value: bookings, errorMessage: bookingsError, meta: bookingMeta } = useField('bookings')
const { value: price, errorMessage: priceError, meta: priceMeta } = useField('price')
const { value: hours, errorMessage: hoursError, meta: hoursMeta } = useField('hours')
</script>

<template>
  <div class="flex flex-col text-center items-center justify-center basis-full h-fit md:h-full">
    <div
      class="flex flex-row justify-center items-center text-heading2_xs md:text-heading text-grey-300 font-serif md:basis-1/6 md:w-6/10 md:mb-4"
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
    <div class="text-body2_xs md:text-body2 text-grey-300 basis-1/6 w-9/10 sm:w-8/10">
      <p>Fantastic work with those costs!</p>
      <p>Now, let's talk about how much you're making per booking.</p>
    </div>
    <div
      class="basis-full flex flex-col md:items-center w-screen md:w-8/10 md:px-4 overflow-auto"
    >
      <div class="flex flex-col font-sans text-grey-300 text-body w-full h-full">
        <div class="flex flex-col min-h-75">
          <data-input
            v-model="bookingsPerMonthInput"
            label="How many shoots do you typically book a month?"
            parentClass="flex flex-col md:flex-row items-center justify-between md:mt-6"
            class="pl-3 text-center border-b border-grey-200"
            :class="{ 'border-error': bookingsError && blankSubmitError }"
            type="number"
          />
          <span class="error-text md:text-end">{{ bookingsError }}</span>
        </div>
        <div class="flex flex-col min-h-75">
          <data-input
            v-model="priceAveragePerBookingInput"
            label="How much do you charge per booking on average?"
            parentClass="flex flex-col md:flex-row items-center justify-between md:mt-6"
            class="pl-3 text-center border-b border-grey-200"
            :class="{ 'border-error': priceError && blankSubmitError }"
            type="number"
          />
          <span class="error-text md:text-end">{{ priceError }}</span>
        </div>
        <div class="flex flex-col min-h-100">
          <data-input
            v-model="hoursAveragePerBookingInput"
            label="How many hours do you work per booking? (Including editing time, meetings, etc.)"
            parentClass="flex flex-col md:flex-row items-center justify-between md:mt-6"
            class="pl-3 text-center border-b border-grey-200"
            :class="{ 'border-error': hoursError && blankSubmitError }"
            type="number"
          />
          <span class="error-text md:text-end">{{ hoursError }}</span>
        </div>
        <span
          class="error-text"
          v-if="!bookingMeta.dirty || !priceMeta.dirty || !hoursMeta.dirty"
          >{{ blankSubmitError }}</span
        >
      </div>
    </div>
  </div>
</template>
