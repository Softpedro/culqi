<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from 'axios';
import ItemTable from './ItemTable.vue';

onMounted(() => {
  getEmployees()
});

const getEmployees = async () => {
  try {
    const response = await axios.get('https://fepruebatecnicaculqi-backend-production.up.railway.app/empleados?limit=10&page=1', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    });
    console.log(response.data.data, 'response.data.data.responseData')
    employees.value = response.data.data; 
  } catch (error) {
    console.error(error);
  }
}
const employees = ref([]);
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
      <ItemTable :employees="employees" />
    </table>
  </div>
</template>

<style scoped>
.form-th{
  @apply px-4 py-4 bg-graylight text-left text-subtitle font-normal text-xs;
}
</style>