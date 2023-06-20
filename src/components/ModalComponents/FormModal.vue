<template>
  <div class="fixed top-0 bottom-0 left-0 right-0 bg-transparent-100 flex justify-center items-center">
    <div class="flex flex-col bg-primary-white p-12">
      <header class="modal-header">
        <slot name="header"> This is the default title! </slot>
      </header>

      <section class="min-h-[450px]">
        <slot name="body"> This is the default body! </slot>
      </section>
    </div>
  </div>
</template>

