<template>
  <uni-nav-bar dark :fixed="true" shadow background-color="#007AFF" status-bar left-icon="left" left-text="返回" title="detail" @click-left="back" />
  <div class="title">欢迎来到详情页</div>
  <div class="btns">
    <button type="primary" @click="counter.increment">count is: {{ counter.count }}</button>
    <button type="primary" @click="onHandler">请求数据</button>
  </div>
  <div v-for="s in students" :key="s?.id" class="list">
    {{ s?.name }}
  </div>
</template>

<script setup lang="ts">
import { ref, defineComponent } from 'vue'

import request from '@/config/request'
import useStore from '@/store'

const counter = useStore()
let students = ref<Partial<Student[]>>([])
defineProps({
  msg: {
    default: '学uniapp的走起',
    type: String,
    required: false
  }
})
const onHandler = async () => {
  students.value = await request.get('/students')
}
defineComponent({
  name: 'HelloWorld'
})
function back() {
  uni.navigateBack()
}
</script>
<style lang="scss">
.title {
  text-align: center;
  margin: 20px;
}

.btns {
  display: flex;
  justify-content: center;
}

.list {
  display: flex;
  justify-content: center;
}
</style>
