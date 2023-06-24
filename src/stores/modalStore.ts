import { defineStore } from 'pinia'

export type Modal = {
  isOpen: boolean
  menuId: string
  isActive:boolean
}

export const useModalStore = defineStore('modalStore', {
  state: (): Modal => ({
    isOpen: false,
    menuId: '1',
    isActive: true
  }),
  actions: {
    openModal() {
      this.isOpen = true
    },
    closeModal() {
      this.isOpen = false
    },
    openMenuModal(menuId: string) {
      this.menuId = menuId
    },
    closeMenuModal(menuId: string) {
      this.menuId = menuId    }
  }
})

export default useModalStore
