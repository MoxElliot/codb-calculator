import { defineStore, storeToRefs } from 'pinia'
import { useReportStore } from './reportStore'
import type CostItem from '@/types/CostItem'
import type ModalState from '@/types/ModalState'


export const useModalStore = defineStore('modalStore', {
  state: (): ModalState => ({
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
      try {
      const reportStore = useReportStore()
      const { addSelectedIdAction } = reportStore
      addSelectedIdAction(id)

      this.optionsMenuIsOpen = true}
      catch {
        console.error('error in openOptionsMenu')
      }
    },
    closeOptionsMenu() {
      this.optionsMenuIsOpen = false
    },
    openConfirmModal(id: string, costType: string) {
      //the edit method select costs to remove if
      try {
        const reportStore = useReportStore()
        const { addSelectedIdAction } = reportStore

        this.closeOptionsMenu()
        addSelectedIdAction(id)
        console.log('in openConfirmModal')

        if (costType === 'fixed') {
          const selectedCost = reportStore.fixedCosts.find((item) => item.id === id) as CostItem
          this.confirmCostName = selectedCost.name
        } else if (costType === 'variable') {
          const selectedCost = reportStore.variableCosts.find((item) => item.id === id) as CostItem
          this.confirmCostName = selectedCost.name
        }
        
        this.confirmModalIsOpen = true
      } catch {
        console.error('erro in openConfirmModal')
      }
    },
    closeConfirmModal() {
      this.confirmDelete = ''
      this.confirmModalIsOpen = false
    }
  }
})

export default useModalStore
