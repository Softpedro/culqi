<script setup lang="ts">
import iconDonwload from './icons/iconDonwload.vue';
import IconPlus from './icons/IconPlus.vue';

</script>

<template>
  <div class="flex w-full justify-between">
    <div>
      <h4 class="text-2xl">Empleados</h4>
      <p class="text-sm text-subtitle">Gestiona tus empleados</p>
    </div>
    <div class="flex">
      <button class="button color-blue mr-5">
        <iconDonwload class="w-4 mr-1"/>
        Descargar
      </button>
      <button class="button bg-blue text-white">
        <IconPlus class="text-white mr-1 w-4"/>
        Nuevo
      </button>
    </div>
  </div>
</template>

<style>
  .button{
    @apply flex items-center px-6 py-3 border-solid border border-blue rounded-lg
  }
</style>