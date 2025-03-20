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
  import { tema1Data } from '@/datos/tema1.js'
  
  // Clave de localStorage para el progreso del Tema 1
  const storageKey = 'tema1Progress'
  
  // Datos del tema
  const temaData = tema1Data
  
  // Subtemas reactivos para poder marcar como completado
  const subtopics = ref([])
  
  // Al montar, intentamos cargar el progreso guardado en localStorage
  onMounted(() => {
    const savedProgress = localStorage.getItem(storageKey)
    if (savedProgress) {
      // Si hay datos guardados, se parsean y se asignan a subtopics
      subtopics.value = JSON.parse(savedProgress)
    } else {
      // Si no, se inicializa con los datos por defecto
      subtopics.value = temaData.subtopics.map(s => ({ ...s }))
    }
  })
  
  // Observa los cambios en subtopics y actualiza localStorage cada vez que se modifique
  watch(
    subtopics,
    (newVal) => {
      localStorage.setItem(storageKey, JSON.stringify(newVal))
    },
    { deep: true }
  )
  
  // Cálculo del progreso total en función de los subtemas completados
  const totalProgress = computed(() => {
    const completedCount = subtopics.value.filter(item => item.completed).length
    return (completedCount / subtopics.value.length) * 100
  })
  
  // Función para alternar la descripción (este toggle podría estar en el componente TopicSubtopics o aquí según tu diseño)
  function toggleDescription(index) {
    subtopics.value[index].showFull = !subtopics.value[index].showFull
  }
  </script>
  
  <style scoped>
  /* Estilos adicionales opcionales */
  </style>
  