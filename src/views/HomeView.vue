<!-- src/views/HomeView.vue -->
<template>
  <div class="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
    <div class="max-w-4xl mx-auto space-y-12">
      <!-- Sección: Listado de Temas -->
      <div class="bg-white bg-opacity-80 backdrop-blur-lg rounded-lg shadow-lg p-8">
        <h1 class="text-4xl font-extrabold text-center mb-8 text-gray-800">Listado de Temas</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            to="/tema1"
            variant="default"
            class="block p-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl shadow transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h2 class="text-2xl font-bold text-white">Tema 1</h2>
            <p class="mt-2 text-white">Conceptos básicos de la computadora</p>
          </Link>
          <Link
            to="/tema2"
            variant="default"
            class="block p-6 bg-gradient-to-br from-pink-400 to-red-500 rounded-xl shadow transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h2 class="text-2xl font-bold text-white">Tema 2</h2>
            <p class="mt-2 text-white">Funciones básicas del computador</p>
          </Link>
          <Link
            to="/tema3"
            variant="default"
            class="block p-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h2 class="text-2xl font-bold text-white">Tema 3</h2>
            <p class="mt-2 text-white">Hardware vs Software y gestión de archivos</p>
          </Link>
          <Link
            to="/tema4"
            variant="default"
            class="block p-6 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-xl shadow transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h2 class="text-2xl font-bold text-white">Tema 4</h2>
            <p class="mt-2 text-white">Uso de Word</p>
          </Link>
          <Link
            to="/tema5"
            variant="default"
            class="block p-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl shadow transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h2 class="text-2xl font-bold text-white">Tema 5</h2>
            <p class="mt-2 text-white">Uso de PowerPoint</p>
          </Link>
          <Link
            to="/tema6"
            variant="default"
            class="block p-6 bg-gradient-to-br from-teal-400 to-green-500 rounded-xl shadow transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h2 class="text-2xl font-bold text-white">Tema 6</h2>
            <p class="mt-2 text-white">Uso de Excel</p>
          </Link>
          <Link
            to="/tema7"
            variant="default"
            class="block p-6 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl shadow transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h2 class="text-2xl font-bold text-white">Tema 7</h2>
            <p class="mt-2 text-white">Navegación en Internet y repaso general</p>
          </Link>
          <Link
            to="/tema8"
            variant="default"
            class="block p-6 bg-gradient-to-br from-red-400 to-red-600 rounded-xl shadow transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h2 class="text-2xl font-bold text-white">Tema 8</h2>
            <p class="mt-2 text-white">Examen Diagnóstico Final</p>
          </Link>
        </div>
      </div>

      <!-- Sección: Recorrido de Temas -->
      <div class="bg-white bg-opacity-80 backdrop-blur-lg rounded-lg shadow-lg p-8">
        <h1 class="text-4xl font-extrabold text-center mb-8 text-gray-800">Recorrido de Temas</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            to="/linea-aprendizaje"
            variant="default"
            class="block p-6 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl shadow transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h2 class="text-2xl font-bold text-white">Línea de Aprendizaje</h2>
            <p class="mt-2 text-white">Visualiza tu recorrido completo</p>
          </Link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Link from '@/components/Link.vue'
</script>

<style scoped>
/* Puedes ajustar márgenes o estilos adicionales si lo deseas */
</style>
