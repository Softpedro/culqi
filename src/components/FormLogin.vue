<script setup lang="ts">
  import { ref } from 'vue';
  import { useAuthStore } from '@/stores/store';
  import { useRouter } from 'vue-router';
  import axios from 'axios';
  import IconError from './icons/IconError.vue';

  const authStore = useAuthStore();
  const router = useRouter();
  const correo = ref<string>('');
  const password = ref<string>('');
  let validation = ref<boolean>(false)

  const login = async () => {
    try {
      const response = await axios.post('https://fepruebatecnicaculqi-backend-production.up.railway.app/auth/login', {
        correo: correo.value,
        password: password.value,
      });
      authStore.setAccessToken(response.data.data.token);
      router.push('/about');
    } catch (error) {
      console.error(error);
      validation.value = true
    }
  };
</script>

<template>
  <section class="flex flex-col w-full justify-center items-center">
    <div class="max-w-[480px] w-full">
      <h4 class="text-2xl mb-8 text-center font-bold">Inicia sesión</h4>
      <form action="" class="mb-8" @submit.prevent="login">
        <div class="mb-6">
          <label for="lbl_email" class="text-sm block mb-2">
            Correo electrónico
            <span>*</span>
          </label>
          <input
            type="text"
            placeholder="Ingresa el correo electrónico"
            class="form-input"
            id="lbl_email"
            v-model="correo"
          >
        </div>
        <div class="mb-8">
          <label for="lbl_password" class="text-sm block mb-2">
            Contraseña
            <span>*</span>
          </label>
          <input
            type="password"
            placeholder="Ingresa la contraseña"
            class="form-input"
            id="lbl_password"
            v-model="password"
          >
        </div>
        <div class="flex mb-8" v-if="validation">
          <IconError />
          <span class="text-[12px] text-error ml-1 block">Correo o contraseña incorrectos</span>
        </div>
        <button type="submit" class="form-button">Iniciar sesión</button>
      </form>
      <div class="text-center">
        <p class="lughtblue text-sm">
          ¿Eres nuevo aquí? 
          <a href="" class="text-green">
            Crea una cuenta
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .form-input { 
    @apply block w-full border-solid border-input border px-5 py-3 text-[14px] rounded-lg;
  }
  .form-button {
    @apply bg-blue block text-white w-full py-4 rounded-lg
  }
</style>