<script setup lang="ts">
import IconDelete from './icons/IconDelete.vue';
import IconEdit from './icons/IconEdit.vue';
import IconView from './icons/IconView.vue';

</script>

<template>
  <div class="mt-6">
    <table class="w-full ">
      <thead>
        <tr class="bg-graylight">
          <th class="form-th">
            <p>Nombre</p>
          </th>
          <th class="form-th">
            <p>Nombre cargo</p>
          </th>
          <th class="form-th">
            <p>Departamento</p>
          </th>
          <th class="form-th">
            <p>Oficina</p>
          </th>
          <th class="form-th">
            <p>Cuenta</p>
          </th>
          <th class="form-th">
            <p>Acciones</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="px-4 py-4">
            <p class="pl-4text-blue text-xs">Pristia Candra</p>
            <span class="text-[10px]">Lincoln@unpixel.com</span>
          </td>
          <td class="px-4 py-4">
            <p class="pl-4text-blue text-xs">UI UX Dseigner</p>
          </td>
          <td class="px-4 py-4">
            <p class="pl-4text-blue text-xs">Team Product</p>
          </td>
          <td class="px-4 py-4">
            <p class="pl-4text-blue text-xs">Unpixel Office</p>
          </td>
          <td class="px-4 py-4">
            <p class="pl-4text-blue text-xs">Activa</p>
          </td>
          <td class="px-4 py-4">
            <div class="flex">
              <button class="button-action bg-view">
                <IconView class="w-4"/>
              </button>
              <button class="button-action bg-edit mx-[10px]">
                <IconEdit class="w-4"/>
              </button>
              <button class="button-action bg-delete">
                <IconDelete class="w-4"/>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.form-th{
  @apply px-4 py-4 bg-graylight text-left text-subtitle font-normal text-xs;
}
.button-action {
  @apply w-8 h-8 flex items-center justify-center rounded-[10px]
}
</style>