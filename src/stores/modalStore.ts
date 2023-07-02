import { defineStore } from 'pinia'
import { useReportStore } from './reportStore'

export type Modal = {
  formModalIsOpen: boolean
  formModalType: string
  ellipsisModalIsOpen: boolean
  confirmModalIsOpen: boolean
  confirmDelete: string
}

export const useModalStore = defineStore('modalStore', {
  state: (): Modal => ({
    formModalIsOpen: false,
    formModalType: '',
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
    openEllipsisModal(id: string) {
      const reportStore = useReportStore()
      const { addSelectedIdAction } = reportStore
      addSelectedIdAction(id)

      this.ellipsisModalIsOpen = true
    },
    closeEllipsisModal() {
      this.ellipsisModalIsOpen = false
    },
    openConfirmModal(id: string) {
      const reportStore = useReportStore()
      const { addSelectedIdAction } = reportStore
      console.log("in Open confirm Modal id", id)
      addSelectedIdAction(id)
      console.log("in Open confirm Modal selectedID", reportStore.selectedId)
      this.confirmModalIsOpen = true
    },
    closeConfirmModal() {
      this.confirmDelete = ''
      this.confirmModalIsOpen = false
    }
  }
})

export default useModalStore
