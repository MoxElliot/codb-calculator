import { defineStore } from 'pinia'
import { useReportStore } from './reportStore'

export type Modal = {
  formModalIsOpen: boolean
  formModalType: string
  ellipsisModalIsOpen: boolean
  confirmModalIsOpen: boolean
  confirmDelete: string
  confirmCostName:string
}

export const useModalStore = defineStore('modalStore', {
  state: (): Modal => ({
    formModalIsOpen: false,
    formModalType: '',
    ellipsisModalIsOpen: false,
    confirmModalIsOpen: false,
    confirmDelete: '',
    confirmCostName:'',
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
    openConfirmModal(id: string, confirmCostName:string) {
      const reportStore = useReportStore()
      const { addSelectedIdAction } = reportStore
      
      addSelectedIdAction(id)
      this.confirmCostName = confirmCostName
      this.confirmModalIsOpen = true
    },
    closeConfirmModal() {
      this.confirmDelete = ''
      this.confirmModalIsOpen = false
    }
  }
})

export default useModalStore
