<template>
  <img alt="Vue logo" src="../../assets/logo.png" />
  <h1>{{ msg }}</h1>
  <p>
    Recommended setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank">Vetur</a>
    +
    <a href="https://marketplace.visualstudio.com/items?itemName=znck.vue-language-features-insiders" target="_blank"> Vue LaVue Language Features (Insiders) </a>
  </p>
  <p>
    Make sure to use workspace version of TypeScript to get improved support via
    <a href="https://github.com/znck/vue-developer-experience" target="_blank">@vuedx</a>. Note @vuedx is still experimental and this setup is provided for early feedback.
  </p>
  <button @click="count++">count is: {{ count }}</button>
  <button @click="onHandler">请求数据</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script setup lang="ts">
import { ref, defineComponent } from 'vue'

import request from '@/config/request'
defineProps({
  msg: {
    default: '学vue3的走起1',
    type: String,
    required: true
  }
})
const onHandler = () => {
  request.get('/students').then((data) => {
    console.log('EEEE', data)
  })
}
defineComponent({
  name: 'HelloWorld'
})
const count = ref(1)
</script>
