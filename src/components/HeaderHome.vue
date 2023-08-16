<script setup lang="ts">
  import logo from '@/assets/images/logo_black.svg'
  import IconPerson from './icons/IconPerson.vue'
  import IconBag from './icons/IconBag.vue'
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '@/stores/store';

  const authStore = useAuthStore();
  const router = useRouter();
  const logout = () => {
    authStore.logout()
    router.push('/');
  }
</script>
<template>
  <header class="w-[280px] flex flex-col px-6 py-6 border-r border-input h-screen">
    <figure class="mb-8 flex justify-center">
      <img :src="logo" :alt="logo" :title="logo">
    </figure>
    <nav>
      <ul>
        <li>
          <a href="" class="py-4 text-sm flex text-green">
            <IconPerson class="w-5 mr-2"/>
            Empleados
          </a>
        </li>
        <li>
          <a href="" class="py-4 text-sm flex">
            <IconBag class=" mr-2"/>
            Reclutamiento
          </a>
        </li>
      </ul>
    </nav>
    <button
      class="mt-auto py-3 border-solid rounded-lg border-2 border-blue hover:bg-blue hover:text-white"
      :onclick="logout"
    >
      Salir
    </button>
  </header>
</template>