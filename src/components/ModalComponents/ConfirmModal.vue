<template>
    <div class="fixed top-0 bottom-0 left-0 right-0 bg-primary-white/60 flex justify-center items-center z-40">
      <div class="flex flex-col justify-center p-8 rounded-2xl bg-primary-white drop-shadow-xl w-80">
        <header class="flex flex-row justify-center items-center text-body2 text-grey-300 text-center">
          <slot name="header"> This is the default title! </slot>
        </header>
  
        <section class=" min-h-[100px]">
          <slot name="body"> This is the default body! </slot>
        </section>
      </div>
    </div>
  </template>
  