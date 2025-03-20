<!-- src/components/TopicSubtopics.vue -->
<template>
    <div class="space-y-6">
      <div
        v-for="(subtopic, index) in subtopics"
        :key="index"
        class="bg-white border border-gray-300 rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
      >
        <div class="flex items-center justify-between">
          <h4 class="text-xl font-semibold text-gray-800">
            {{ subtopic.title }}
          </h4>
          <label class="inline-flex items-center">
            <input
              type="checkbox"
              class="form-checkbox h-6 w-6 text-green-600"
              v-model="subtopic.completed"
            />
          </label>
        </div>
        <p class="mt-2 text-gray-600">{{ subtopic.description }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    subtopics: {
      type: Array,
      default: () => [],
    },
  })
  </script>
  
  <style scoped>
  /* Estilos adicionales */
  </style>
  