<script setup lang="ts">
const props = defineProps({
  isActive: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15 3V5"
      :stroke="isActive ? '#7CC1B5' : '#A4ABAA'"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7 3V5"
      :stroke="isActive ? '#7CC1B5' : '#A4ABAA'"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 8H19"
      :stroke="isActive ? '#7CC1B5' : '#A4ABAA'"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19 10V6C19 4.895 18.105 4 17 4H5C3.895 4 3 4.895 3 6V17C3 18.105 3.895 19 5 19H10"
      :stroke="isActive ? '#7CC1B5' : '#A4ABAA'"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.999 10.75C6.861 10.75 6.749 10.862 6.75 11C6.75 11.138 6.862 11.25 7 11.25C7.138 11.25 7.25 11.138 7.25 11C7.25 10.862 7.138 10.75 6.999 10.75"
      :stroke="isActive ? '#7CC1B5' : '#A4ABAA'"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.999 14.75C6.861 14.75 6.749 14.862 6.75 15C6.75 15.138 6.862 15.25 7 15.25C7.138 15.25 7.25 15.138 7.25 15C7.25 14.862 7.138 14.75 6.999 14.75"
      :stroke="isActive ? '#7CC1B5' : '#A4ABAA'"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.75 11.001C10.75 11.139 10.862 11.251 11 11.25C11.138 11.25 11.25 11.138 11.25 11C11.25 10.862 11.138 10.75 11 10.75C10.862 10.75 10.75 10.862 10.75 11.001"
      :stroke="isActive ? '#7CC1B5' : '#A4ABAA'"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13 13.6006V20.4034C13.0011 21.2872 14.7916 22.0041 17.0017 22.0041C19.2117 22.0041 21.0022 21.2872 21.0033 20.4034V13.6006"
      :stroke="isActive ? '#7CC1B5' : '#A4ABAA'"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.0022 13.6007C21.0022 14.4845 19.2106 15.2013 17.0005 15.2013C14.7905 15.2013 13 14.4845 13 13.6007C13 12.7157 14.7927 12 17.0017 12C19.2106 12 21.0022 12.7169 21.0033 13.6007"
      :stroke="isActive ? '#7CC1B5' : '#A4ABAA'"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.0005 17.002C13.0005 17.8858 14.791 18.6026 17.0011 18.6026C19.2111 18.6026 21.0027 17.8858 21.0027 17.002"
      :stroke="isActive ? '#7CC1B5' : '#A4ABAA'"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
