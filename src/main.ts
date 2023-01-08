import { createSSRApp } from 'vue'

import { pinia } from '@/store'

import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App).use(pinia)
  return {
    app
  }
}
