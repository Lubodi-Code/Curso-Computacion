<!-- src/components/TopicAdditionalInfo.vue -->
<template>
    <div class="mt-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Información Adicional</h3>
      <div
        v-for="(info, idx) in additionalInfo"
        :key="idx"
        class="mb-4 p-4 bg-gray-100 rounded"
      >
        <h4 class="text-lg font-bold text-gray-700">{{ info.label }}</h4>
        <p class="text-gray-600">{{ info.content }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    additionalInfo: {
      type: Array,
      default: () => [],
    },
  })
  </script>
  
  <style scoped>
  /* Estilos adicionales */
  </style>
  