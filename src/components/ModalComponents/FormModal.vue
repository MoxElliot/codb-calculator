<template>
  <div class="fixed top-0 bottom-0 left-0 right-0 bg-primary-white/60  flex justify-center items-center z-40">
    <div class="flex flex-col p-12 rounded-2xl  bg-primary-white drop-shadow-xl h-full md:h-fit  overflow-visible">
      <header class="modal-header">
        <slot name="header"> This is the default title! </slot>
      </header>

      <section class=" min-h-[450px]">
        <slot name="body"> This is the default body! </slot>
      </section>
    </div>
  </div>
</template>

