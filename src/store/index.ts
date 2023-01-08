import { defineStore, createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

type StateType = {
  user?: Student
  count: number
}
export default defineStore('global', {
  persist: {
    key: 'global',
    paths: ['user', 'count']
  },
  state: (): StateType => ({
    user: undefined,
    count: 0
  }),
  actions: {
    setData<T extends keyof StateType>({ key, value }: { key: T; value: any }) {
      this[key] = value
    },
    increment() {
      this.count++
    }
  }
})

export const pinia = createPinia().use(
  createPersistedState({
    storage: {
      getItem(key: string): string | null {
        return uni.getStorageSync(key)
      },
      setItem(key: string, value: string) {
        uni.setStorageSync(key, value)
      }
    }
  })
)
