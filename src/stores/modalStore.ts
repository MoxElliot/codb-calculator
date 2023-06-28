import { defineStore } from 'pinia'

export type Modal = {
  formModalIsOpen: boolean
  formModalType: string
  menuId: string
  ellipsisModalIsOpen: boolean
  confirmModalIsOpen: boolean
  confirmDelete: string
}

export const useModalStore = defineStore('modalStore', {
  state: (): Modal => ({
    formModalIsOpen: false,
    formModalType: '',
    menuId: ' ',
    ellipsisModalIsOpen: false,
    confirmModalIsOpen: false,
    confirmDelete: ''
  }),
  actions: {
    openFormModal(formModalType: string) {
      this.formModalIsOpen = true
      this.formModalType = formModalType
    },
    closeFormModal() {
      this.formModalIsOpen = false
    },
    openEllipsisModal(menuId: string) {
      this.menuId = menuId
      this.ellipsisModalIsOpen = true
    },
    closeEllipsisModal() {
      this.menuId = ''
      this.ellipsisModalIsOpen = false
    },
    openConfirmModal(cost:any) {
      this.confirmModalIsOpen = true
    },
    closeConfirmModal() {
      this.confirmDelete = ''
      this.confirmModalIsOpen = false
    }
  }
})

export default useModalStore
