<script setup lang="ts">
import banner from '@/assets/images/banner_culqi.png'
import logo from '@/assets/images/logo_white.svg'
</script>

<template>
  <section class="flex flex-col h-screen">
    <figure class="flex-1 relative">
      <img 
        :src="banner"
        :alt="banner"
        class="h-full object-cover object-center w-full absolute inset-0"
      />
    </figure>
    <div class="bg-blue pb-[80px] px-12 pt-12 border-t-[5px] border-solid border-green">
      <figure>
        <img :src="logo" :alt="logo">
      </figure>
      <h2 class="text-white text-5xl my-6 leading-tight font-bold">Dale más power ⚡ a tus empleados hoy 💪</h2>
      <p class="text-white">Te ayudamos a gestionarlos de manera más sencilla</p>
    </div>
  </section>
</template>