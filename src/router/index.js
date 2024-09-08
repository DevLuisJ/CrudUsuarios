import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CrearUsuario from '@/components/CrearUsuario.vue'
import EditarUsuario from '@/components/EditarUsuario.vue'
import ListarUsuario from '@/components/ListarUsuario.vue'
import EliminarUsuario from '@/components/EliminarUsuario.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/crear-usuario',
    name: 'CrearUsuario',
    component: CrearUsuario
  },
  {
    path: '/editar-usuario/:id',
    name: 'EditarUsuario',
    component: EditarUsuario
  },
  {
    path: '/listar-usuario',
    name: 'ListarUsuario',
    component: ListarUsuario
  },
  {
    path: '/eliminar-usuario',
    name: 'EliminarUsuario',
    component: EliminarUsuario
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
