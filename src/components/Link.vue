<!-- src/components/Link.vue -->
<template>
    <div>
      <router-link v-if="to" :to="to" :class="computedClasses">
        <slot />
      </router-link>
      <a
        v-else-if="href"
        :href="href"
        :class="computedClasses"
        target="_blank"
        rel="noopener noreferrer"
      >
        <slot />
      </a>
      <button v-else :class="computedClasses" @click="handleClick">
        <slot />
      </button>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    to: {
      type: [String, Object],
      default: null
    },
    href: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: 'primary'
    }
  })
  
  const emit = defineEmits(['click'])
  
  const handleClick = (event) => {
    emit('click', event)
  }
  
  // Clases base y variantes
  const computedClasses = computed(() => {
    return `
      inline-block
      px-4
      py-2
      rounded
      transition
      duration-300
      font-semibold
      text-center
      focus:outline-none   /* Quita el contorno de foco */
      focus:ring-0         /* Quita el "ring" de foco */
      ${variantClasses(props.variant)}
    `
  })
  
  // Función para determinar el color según la variante
  function variantClasses(variant) {
    switch (variant) {
      case 'primary':
        return 'bg-blue-500 text-white hover:bg-blue-600'
      case 'secondary':
        return 'bg-gray-500 text-white hover:bg-gray-600'
      case 'success':
        return 'bg-green-500 text-white hover:bg-green-600'
      case 'danger':
        return 'bg-red-500 text-white hover:bg-red-600'
      default:
        return ''
    }
  }
  </script>
  
  <style scoped>
  /* Estilos adicionales si lo requieres */
  </style>
  