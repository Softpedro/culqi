<script setup lang="ts">
import IconSearch from '@/components/icons/IconSearch.vue'

</script>

<template>
  <div class="flex mt-6 ">
    <div class="flex-1 relative">
      <input type="text" placeholder="Buscar empleado" class="border-input py-4 px-5 border-solid border-2 w-full rounded-lg">
      <IconSearch class="w-7 absolute right-4 top-4" />
    </div>
    <div class="w-[315px] ml-4">
      <select name="" id="" class="border-input py-4 color-blue px-5 border-solid border-2 w-full appearance-none rounded-lg bg-transparent">
        <option value="0">Cargo1</option>
        <option value="1">Cargo2</option>
        <option value="2">Cargo3</option>
        <option value="3">Cargo4</option>
      </select>
    </div>
  </div>
</template>