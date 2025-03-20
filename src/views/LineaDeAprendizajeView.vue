<template>
    <div class="min-h-screen bg-gradient-to-r from-indigo-100 to-indigo-300 p-8 flex flex-col items-center">
      <!-- Botón Volver -->
      <div class="w-full max-w-4xl mb-4">
        <Link to="/" variant="primary">Volver</Link>
      </div>
  
      <!-- Título principal -->
      <h1 class="text-3xl font-bold text-center mb-8 text-indigo-900">Línea de Aprendizaje</h1>
  
      <!-- Contenedor principal para la línea central -->
      <div class="relative w-full max-w-4xl pb-16">
        <!-- Línea vertical central con degradado -->
        <div
          class="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500"
        ></div>
  
        <!-- Iteración de los temas -->
        <div
          v-for="(tema, index) in topics"
          :key="index"
          class="mb-16 flex items-center w-full"
        >
          <!-- Bloque condicional -->
          <div v-if="index % 2 === 0" class="flex items-center w-full">
            <!-- Izquierda -->
            <div class="w-1/2 flex justify-end pr-8">
              <!-- Tarjeta con gradiente y hover -->
              <div
                class="bg-gradient-to-br from-indigo-500 to-purple-500 text-white p-5 rounded-lg shadow-lg max-w-xs
                       transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <h2 class="text-lg font-bold">{{ tema.title }}</h2>
                <!-- Mostrar descripción corta o larga según showFull -->
                <p class="mt-1">
                  {{ tema.showFull ? tema.longDescription : tema.shortDescription }}
                </p>
  
                <!-- Botón Leer más / Ver menos -->
                <button
                  @click="toggleDescription(index)"
                  class="mt-2 text-sm underline text-white focus:outline-none"
                >
                  {{ tema.showFull ? 'Ver menos' : 'Leer más' }}
                </button>
              </div>
            </div>
  
            <!-- Círculo numerado en el centro -->
            <div
              class="rounded-full bg-indigo-600 w-12 h-12 text-white flex items-center justify-center font-semibold z-10
                     border-4 border-white shadow-md transform transition duration-300 hover:scale-110 hover:shadow-lg"
            >
              {{ index + 1 }}
            </div>
  
            <!-- Espacio vacío a la derecha -->
            <div class="w-1/2"></div>
          </div>
  
          <div v-else class="flex items-center w-full">
            <!-- Espacio vacío a la izquierda -->
            <div class="w-1/2"></div>
  
            <!-- Círculo numerado en el centro -->
            <div
              class="rounded-full bg-indigo-600 w-12 h-12 text-white flex items-center justify-center font-semibold z-10
                     border-4 border-white shadow-md transform transition duration-300 hover:scale-110 hover:shadow-lg"
            >
              {{ index + 1 }}
            </div>
  
            <!-- Derecha -->
            <div class="w-1/2 flex justify-start pl-8">
              <!-- Tarjeta con gradiente y hover -->
              <div
                class="bg-gradient-to-br from-indigo-500 to-purple-500 text-white p-5 rounded-lg shadow-lg max-w-xs
                       transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <h2 class="text-lg font-bold">{{ tema.title }}</h2>
                <!-- Mostrar descripción corta o larga según showFull -->
                <p class="mt-1">
                  {{ tema.showFull ? tema.longDescription : tema.shortDescription }}
                </p>
  
                <!-- Botón Leer más / Ver menos -->
                <button
                  @click="toggleDescription(index)"
                  class="mt-2 text-sm underline text-white focus:outline-none"
                >
                  {{ tema.showFull ? 'Ver menos' : 'Leer más' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref, onMounted } from 'vue'
import Link from '@/components/Link.vue'
import { temas as temasData } from '@/data/temas.js'

// Array reactivo que guardará los temas con estado "showFull"
const topics = ref([])

// Al montar el componente, añadimos "showFull = false" a cada tema
onMounted(() => {
  topics.value = temasData.map(t => ({ ...t, showFull: false }))
})

// Función para alternar entre descripción corta/larga
function toggleDescription(index) {
  topics.value[index].showFull = !topics.value[index].showFull
}
</script>

  
  <style scoped>
  /* Ajusta la separación, márgenes o colores si lo requieres */
  </style>
  