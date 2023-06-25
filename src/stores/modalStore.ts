import { defineStore } from 'pinia'

export type Modal = {
  isOpen: boolean
  menuId: string
  ellipsisModalisOpen: boolean
}

export const useModalStore = defineStore('modalStore', {
  state: (): Modal => ({
    isOpen: false,
    menuId: ' ',
    ellipsisModalisOpen: false
  }),
  actions: {
    openModal() {
      this.isOpen = true
    },
    closeModal() {
      this.isOpen = false
    },
    openEllipsisModal(menuId: string) {
      this.menuId = menuId
      this.ellipsisModalisOpen = true
      console.log("in open")
    },
    closeEllipsisModal(menuId: string) {
      this.menuId = menuId
      this.ellipsisModalisOpen = false
      console.log("in close")
    }
  }
})

export default useModalStore
