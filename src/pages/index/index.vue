<template>
  <view class="content">
    <uni-nav-bar dark :fixed="true" shadow background-color="#007AFF" status-bar title="home" />
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">
        {{ title + '12' }}
      </text>
    </view>
    <button type="primary" @click="tap">点击跳转到详情页</button>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Hello')
function tap() {
  uni.navigateTo({ url: '/pages/home/index' })
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
