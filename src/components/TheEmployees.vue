<script setup lang="ts">
import EmployeesButtons from './EmployeesButtons.vue';
import EmployeesFilter from './EmployeesFilter.vue';
import EmployeesTable from './EmployeesTable.vue';


</script>

<template>
  <div class="px-6 py-6">
    <div class="bg-white px-6 py-6">
      <EmployeesButtons />
      <EmployeesFilter />
      <EmployeesTable /> 
    </div>
  </div>
</template>