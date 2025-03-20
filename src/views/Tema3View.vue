<!-- src/views/Tema3View.vue -->
<template>
    <div class="min-h-screen bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 p-6 flex items-center justify-center">
      <div class="bg-white bg-opacity-90 backdrop-blur-lg rounded-lg shadow-2xl p-8 max-w-3xl w-full">
        <!-- Encabezado del Tema -->
        <TopicHeader :data="temaData">
          <!-- Botón "Volver" inyectado mediante slot -->
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
  
        <!-- Lista de Subtemas -->
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
import { tema3Data } from '@/datos/tema3.js'

// Clave para almacenar el progreso de Tema 3 en localStorage
const storageKey = 'tema3Progress'

// Data del tema
const temaData = tema3Data

// Subtemas reactivos para poder marcar como completado
const subtopics = ref([])

// Al montar, se intenta cargar el progreso guardado; si no existe, se inicializa con los datos por defecto
onMounted(() => {
  const savedProgress = localStorage.getItem(storageKey)
  if (savedProgress) {
    subtopics.value = JSON.parse(savedProgress)
  } else {
    subtopics.value = temaData.subtopics.map(s => ({ ...s }))
  }
})

// Observa cambios en 'subtopics' y guarda el progreso en localStorage
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

// Función para alternar la descripción (si está implementado en este componente o en el subcomponente)
function toggleDescription(index) {
  subtopics.value[index].showFull = !subtopics.value[index].showFull
}
</script>

<style scoped>
/* Estilos adicionales opcionales */
</style>
