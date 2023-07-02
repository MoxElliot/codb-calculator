import { defineStore } from 'pinia'
import { useReportStore } from './reportStore'

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
    },
    closeEllipsisModal() {
      this.costId = ''
      this.ellipsisModalIsOpen = false
    },
    openConfirmModal(id: string) {
      const reportStore = useReportStore()
      const { addSelectedIdAction } = reportStore

      addSelectedIdAction(id)
      this.confirmModalIsOpen = true
    },
    closeConfirmModal() {
      this.confirmDelete = ''
      this.confirmModalIsOpen = false
    }
  }
})

export default useModalStore
