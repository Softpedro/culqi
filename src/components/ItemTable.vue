<script setup lang="ts">
  import IconDelete from './icons/IconDelete.vue';
  import IconEdit from './icons/IconEdit.vue';
  import IconView from './icons/IconView.vue';
  const props = defineProps({
    employees: Array as () => Employee[],
  });

  interface Employee {
    id: number;
    cargo: string;
    correo: string;
    departamento: string;
    estadoCuenta: string;
    nombre: string;
    oficina: string
  }
</script>

<template>
  <tbody>
    <tr
      v-for="emp in props.employees"
      :key="emp.id"
      class="border-b border-solid border-b-input"
    >
      <td class="px-4 py-4">
        <p class="pl-4text-blue text-xs text-blue">{{ emp.nombre }}</p>
        <span class="text-[10px] block text-lightblue">{{ emp.correo }}</span>
      </td>
      <td class="px-4 py-4">
        <p class="pl-4text-blue text-xs text-blue">{{ emp.cargo }}</p>
      </td>
      <td class="px-4 py-4">
        <p class="pl-4text-blue text-xs text-blue">{{ emp.departamento }}</p>
      </td>
      <td class="px-4 py-4">
        <p class="pl-4text-blue text-xs text-blue">{{ emp.oficina }}</p>
      </td>
      <td class="px-4 py-4">
        <p class="pl-4text-blue text-xs text-blue">{{ emp.estadoCuenta }}</p>
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
</template>

<style scoped>
  .button-action {
    @apply w-8 h-8 flex items-center justify-center rounded-[10px]
  }
</style>