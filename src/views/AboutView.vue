<script setup lang="ts">
  import HeaderHome from '@/components/HeaderHome.vue';
  import TheEmployees from '@/components/TheEmployees.vue'
  import { useAuthStore } from '@/stores/store';
  import { useRouter } from 'vue-router';

  const authStore = useAuthStore();
  const router = useRouter();

  const logout = () => {
    authStore.logout();
    router.push('/');
  };
</script>

<template>
  <div class="flex w-full">
    <HeaderHome />
    <TheEmployees class="bg-graylight flex-1"/>
  </div>
</template>

<style>

</style>
