<!-- src/views/Tema2View.vue -->
<template>
    <div class="min-h-screen bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 p-6 flex items-center justify-center">
      <div class="bg-white bg-opacity-90 backdrop-blur-lg rounded-lg shadow-2xl p-8 max-w-3xl w-full">
        <!-- Encabezado del Tema -->
        <TopicHeader :data="temaData">
          <template #backButton>
            <Link to="/" variant="primary" class="mb-4 inline-block">Volver</Link>
          </template>
        </TopicHeader>
        
        <!-- Sección de Progreso -->
        <div class="mb-8">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold text-gray-700">Progreso general:</h3>
            <span class="text-sm font-medium text-gray-500">
              {{ totalProgress.toFixed(0) }}% completado
            </span>
          </div>
          <ProgressBar :progress="totalProgress" color="green" />
        </div>
        
        <!-- Lista de subtemas -->
        <TopicSubtopics :subtopics="subtopics" />
        
        <!-- Información Adicional -->
        <TopicAdditionalInfo v-if="temaData.additionalInfo" :additionalInfo="temaData.additionalInfo" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, watch } from 'vue'
  import Link from '@/components/Link.vue'
  import ProgressBar from '@/components/ProgressBar.vue'
  import TopicHeader from '@/components/TopicHeader.vue'
  import TopicSubtopics from '@/components/TopicSubtopics.vue'
  import TopicAdditionalInfo from '@/components/TopicAdditionalInfo.vue'
  import { tema2Data } from '@/datos/tema2.js'
  
  // Define la clave para este tema en localStorage
  const storageKey = 'tema2Progress'
  
  const temaData = tema2Data
  
  // Array reactivo para los subtemas
  const subtopics = ref([])
  
  // Al montar, intenta cargar el progreso guardado en localStorage
  onMounted(() => {
    const savedProgress = localStorage.getItem(storageKey)
    if (savedProgress) {
      subtopics.value = JSON.parse(savedProgress)
    } else {
      subtopics.value = temaData.subtopics.map(s => ({ ...s }))
    }
  })
  
  // Observa cambios en subtopics y actualiza localStorage
  watch(
    subtopics,
    (newVal) => {
      localStorage.setItem(storageKey, JSON.stringify(newVal))
    },
    { deep: true }
  )
  
  // Calcula el progreso total basado en los subtemas completados
  const totalProgress = computed(() => {
    const completedCount = subtopics.value.filter(item => item.completed).length
    return (completedCount / subtopics.value.length) * 100
  })
  
  // Función para alternar la descripción (puedes incluirla en TopicSubtopics o en este componente)
  function toggleDescription(index) {
    subtopics.value[index].showFull = !subtopics.value[index].showFull
  }
  </script>
  
  <style scoped>
  /* Estilos adicionales opcionales */
  </style>
  