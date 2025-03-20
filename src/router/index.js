// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Tema1View from '@/views/Tema1View.vue'
import Tema2View from '@/views/Tema2View.vue'
import Tema3View from '@/views/Tema3View.vue'
import Tema4View from '@/views/Tema4View.vue'
import Tema5View from '@/views/Tema5View.vue'
import Tema6View from '@/views/Tema6View.vue'
import Tema7View from '@/views/Tema7View.vue'
import Tema8View from '@/views/Tema8View.vue'
import LineaDeAprendizajeView from '@/views/LineaDeAprendizajeView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/tema1', name: 'Tema1', component: Tema1View },
  { path: '/tema2', name: 'Tema2', component: Tema2View },
  { path: '/tema3', name: 'Tema3', component: Tema3View },
  { path: '/tema4', name: 'Tema4', component: Tema4View },
  { path: '/tema5', name: 'Tema5', component: Tema5View },
  { path: '/tema6', name: 'Tema6', component: Tema6View },
  { path: '/tema7', name: 'Tema7', component: Tema7View },
  { path: '/tema8', name: 'Tema8', component: Tema8View },
  { path: '/linea-aprendizaje', name: 'LineaAprendizaje', component: LineaDeAprendizajeView },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
