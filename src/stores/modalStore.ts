import { defineStore } from 'pinia'

export type Modal = {
  formModalIsOpen: boolean
  formModalType: string
  costId: string
  ellipsisModalIsOpen: boolean
  confirmModalIsOpen: boolean
  confirmDelete: string
}

export const useModalStore = defineStore('modalStore', {
  state: (): Modal => ({
    formModalIsOpen: false,
    formModalType: '',
    costId: ' ',
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
    openEllipsisModal(costId: string) {
      this.costId = costId
      this.ellipsisModalIsOpen = true
      console.log("in openEllisps Modal", this.costId)
    },
    closeEllipsisModal() {
      this.costId = ''
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
