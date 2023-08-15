<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col w-full justify-center items-center">
    <div class="max-w-[480px] w-full">
      <h4 class="text-2xl mb-8 text-center">Inicia sesión</h4>
      <form action="" class="mb-8">
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
          >
        </div>
        <div class="mb-8">
          <label for="lbl_password" class="text-sm block mb-2">
            Contraseña
            <span>*</span>
          </label>
          <input
            type="text"
            placeholder="Ingresa la contraseña"
            class="form-input"
            id="lbl_password"
          >
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
  </div>
</template>

<style scoped>
  .form-input { 
    @apply block w-full border-solid border-input border px-5 py-3 text-[14px] rounded-lg;
  }
  .form-button {
    @apply bg-blue block text-white w-full py-4 rounded-lg
  }
</style>