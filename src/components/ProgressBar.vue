<!-- src/components/ProgressBar.vue -->
<template>
    <div class="w-full bg-gray-200 rounded-full h-4">
      <div
        class="h-4 rounded-full transition-all duration-300"
        :style="{ width: progress + '%', backgroundColor: computedColor }"
      ></div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    progress: {
      type: Number,
      default: 0,
    }
  })
  
  // Calcula el color en función del progreso usando HSL.
  // Progreso 0 → Hue 0 (rojo), 50 → Hue 60 (amarillo), 100 → Hue 120 (verde)
  const computedColor = computed(() => {
    const hue = (props.progress / 100) * 120
    return `hsl(${hue}, 100%, 50%)`
  })
  </script>
  