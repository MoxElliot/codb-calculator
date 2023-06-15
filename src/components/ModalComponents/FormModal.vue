<template>
  <div class="modal-container">
    <div class="flex flex-col bg-primary-white p-12">
      <header class="modal-header">
        <slot name="header"> This is the default title! </slot>
      </header>

      <section class="modal-body ">
        <slot name="body"> This is the default body! </slot>
      </section>
    </div>
  </div>
</template>

