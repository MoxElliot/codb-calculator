import { defineStore, storeToRefs } from 'pinia'
import { useReportStore } from './reportStore'
import type CostItem from '@/types/CostItem'
import type ModalState from '@/types/ModalState'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export const useModalStore = defineStore('modalStore', {
  state: (): ModalState => ({
    formModalIsOpen: false,
    formModalType: '',
    optionsMenuIsOpen: false,
    confirmModalIsOpen: false,
    confirmDelete: '',
    confirmCostName: '',
    costNotification: ''
  }),
  actions: {
    openFormModal(formModalType: string) {
      this.formModalIsOpen = true
      this.formModalType = formModalType
    },
    openEditFormModal(id: string, type:string) {
      const reportStore = useReportStore()
      const { addSelectedIdAction, selectCostAction } = reportStore

      this.formModalType = 'edit'
      this.formModalIsOpen = true

      addSelectedIdAction(id as string)
      selectCostAction(id as string, type as string)
      this.closeOptionsMenu()
    },
    closeFormModal() {
      this.formModalIsOpen = false
    },
    openOptionsMenu(id: string) {
      try {
        const reportStore = useReportStore()
        const { addSelectedIdAction } = reportStore
        addSelectedIdAction(id)
        this.optionsMenuIsOpen = true
        console.log("hello")
      } catch {
        console.error('error in openOptionsMenu')
      }
    },
    closeOptionsMenu() {
      this.optionsMenuIsOpen = false
    },
    openConfirmModal(id: string, costType: string) {
      try {
        const reportStore = useReportStore()
        const { addSelectedIdAction } = reportStore

        this.closeOptionsMenu()
        addSelectedIdAction(id)

        if (costType === 'fixed') {
          const selectedCost = reportStore.fixedCosts.find((item) => item.id === id) as CostItem
          this.confirmCostName = selectedCost.name
        } else if (costType === 'variable') {
          const selectedCost = reportStore.variableCosts.find((item) => item.id === id) as CostItem
          this.confirmCostName = selectedCost.name
        }
        this.costNotification = 'Delete Cost Successful!'
        this.confirmModalIsOpen = true
      } catch {
        this.costNotification = 'Error occured while deleting cost'
        console.error('error in openConfirmModal')
      }
    },
    closeConfirmModal() {
      this.confirmDelete = ''
      this.confirmModalIsOpen = false
    },
    notify() {
      toast(this.costNotification, {
        autoClose: 1000
      })
    }
  }
})

export default useModalStore
