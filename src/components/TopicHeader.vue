<!-- src/components/TopicHeader.vue -->
<template>
    <div class="mb-8 text-left">
      <!-- Slot opcional para un botón de volver u otros controles -->
      <slot name="backButton" />
  
      <h2 class="text-3xl font-bold text-gray-800">{{ data.title }}</h2>
      <p class="mt-2 text-gray-600">{{ data.shortDescription }}</p>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
  })
  </script>
  
  <style scoped>
  /* Estilos adicionales si lo deseas */
  </style>
  