import { defineStore } from 'pinia'

export type Modal = {
  isOpen: boolean
}

export const useModalStore = defineStore('modalStore', {
  state: (): Modal => ({
    isOpen: false
  }),
  actions: {
    openModal() {
      this.isOpen = true
    },
    closeModal() {
      this.isOpen = false
      console.log('in Modal Store', this.isOpen)
    }
  }
})

export default useModalStore
