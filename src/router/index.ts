import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export const routePaths = {
  HOME: '/',
  BUTTON: '/button',
  ICON: '/icon',
  TYPOGRAPHY: '/typography',
  DIVIDER: '/divider',
  FLEX: '/flex',
  GRID: '/grid',
  LAYOUT: '/layout',
  SPACE: '/space',
  BREADCRUMB: '/breadcrumb',
  DROPDOWN: '/dropdown',
  PAGINATION: '/pagination',
  FORM: '/form',
  INPUT: '/input',
  INPUT_NUMBER: '/inputNumber',
  INPUT_PHONE: '/inputPhone',
  INPUT_PASSWORD: '/inputPassword',
  TEXTAREA: '/textarea',
  SELECT: '/select',
  SELECT_TAG: '/selectTag',
  TREE_SELECT: '/treeSelect',
  DATEPICKER: '/datepicker',
  CHECKBOX: '/checkbox',
  RADIO: '/radio',
  UPLOAD: '/upload',
  AVATAR: '/avatar',
  BADGE: '/badge',
  CARD: '/card',
  CAROUSEL: '/carousel',
  IMAGE: '/image',
  LIST: '/list',
  TABLE: '/table',
  TOOLTIP: '/tooltip',
  TABS: '/tabs',
  ACCORDION: '/accordion',
  ALERT: '/alert',
  MESSAGE: '/message',
  DRAWER: '/drawer',
  MODAL: '/modal',
  LOADING: '/loading'
}

export const routeNames = {
  HOME: 'home',
  BUTTON: 'button',
  ICON: 'icon',
  TYPOGRAPHY: 'typography',
  DIVIDER: 'divider',
  FLEX: 'flex',
  GRID: 'grid',
  LAYOUT: 'layout',
  SPACE: 'space',
  BREADCRUMB: 'breadcrumb',
  DROPDOWN: 'dropdown',
  PAGINATION: 'pagination',
  FORM: 'form',
  INPUT: 'input',
  INPUT_NUMBER: 'inputNumber',
  INPUT_PHONE: 'inputPhone',
  INPUT_PASSWORD: 'inputPassword',
  TEXTAREA: 'textarea',
  SELECT: 'select',
  SELECT_TAG: 'selectTag',
  TREE_SELECT: 'treeSelect',
  DATEPICKER: 'datepicker',
  CHECKBOX: 'checkbox',
  RADIO: 'radio',
  UPLOAD: 'upload',
  AVATAR: 'avatar',
  BADGE: 'badge',
  CARD: 'card',
  CAROUSEL: 'carousel',
  IMAGE: 'image',
  LIST: 'list',
  TABLE: 'table',
  TOOLTIP: 'tooltip',
  TABS: 'tabs',
  ACCORDION: 'accordion',
  ALERT: 'alert',
  MESSAGE: 'message',
  DRAWER: 'drawer',
  MODAL: 'modal',
  LOADING: 'loading'
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: routePaths.HOME,
      name: routeNames.HOME,
      component: HomeView
    },
    {
      path: routePaths.TABLE,
      name: routeNames.TABLE,
      component: () => import('../views/TableView.vue')
    }
  ]
})

export default router
