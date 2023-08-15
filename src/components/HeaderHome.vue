<script setup lang="ts">
  import logo from '@/assets/images/logo_black.svg'
</script>
<template>
  <header class="w-[280px] flex flex-col px-6 py-6 border-r border-input h-screen">
    <figure class="mb-8">
      <img :src="logo" alt="">
    </figure>
    <nav>
      <ul>
        <li>
          <a href="" class="py-4 block text-sm">
            Empleados
          </a>
        </li>
        <li>
          <a href="" class="py-4 block text-sm">
            Reclutamiento
          </a>
        </li>
      </ul>
    </nav>
    <button class="mt-auto py-3 border-solid rounded-lg border-2 border-blue">
      Salir
    </button>
  </header>
</template>