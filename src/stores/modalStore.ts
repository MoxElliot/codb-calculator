import { defineStore, storeToRefs } from 'pinia'
import { useReportStore } from './reportStore'
import type CostItem from '@/types/CostItem'

export type Modal = {
  formModalIsOpen: boolean
  formModalType: string
  optionsMenuIsOpen: boolean
  confirmModalIsOpen: boolean
  confirmDelete: string
  confirmCostName: string
}

export const useModalStore = defineStore('modalStore', {
  state: (): Modal => ({
    formModalIsOpen: false,
    formModalType: '',
    optionsMenuIsOpen: false,
    confirmModalIsOpen: false,
    confirmDelete: '',
    confirmCostName: ''
  }),
  actions: {
    openFormModal(formModalType: string) {
      this.formModalIsOpen = true
      this.formModalType = formModalType
    },
    closeFormModal() {
      this.formModalIsOpen = false
    },
    openOptionsMenu(id: string) {
      const reportStore = useReportStore()
      const { addSelectedIdAction } = reportStore
      addSelectedIdAction(id)

      this.optionsMenuIsOpen = true
    },
    closeOptionsMenu() {
      this.optionsMenuIsOpen = false
    },
    openConfirmModal(id: string, costType: string) {
      const reportStore = useReportStore()
      const { addSelectedIdAction } = reportStore
      // const { fixedCosts } = storeToRefs(reportStore)
      this.closeOptionsMenu()
      addSelectedIdAction(id)

      if (costType === 'fixed') {
        const selectedCost = reportStore.fixedCosts.find((item) => item.id === id) as CostItem
        this.confirmCostName = selectedCost.name
      } else if (costType === 'variable') {
        const selectedCost = reportStore.variableCosts.find((item) => item.id === id) as CostItem
        this.confirmCostName = selectedCost.name
      }

      this.confirmModalIsOpen = true
    },
    closeConfirmModal() {
      this.confirmDelete = ''
      this.confirmModalIsOpen = false
    }
  }
})

export default useModalStore
