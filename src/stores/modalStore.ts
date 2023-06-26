import { defineStore } from 'pinia'

export type Modal = {
  formModalIsOpen: boolean
  menuId: string
  ellipsisModalisOpen: boolean
}

export const useModalStore = defineStore('modalStore', {
  state: (): Modal => ({
    formModalIsOpen: false,
    menuId: ' ',
    ellipsisModalisOpen: false
  }),
  actions: {
    openFormModal() {
      this.formModalIsOpen = true
    },
    closeFormModal() {
      this.formModalIsOpen = false
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
