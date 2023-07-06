import type CostObj from '@/types/CostObj'

const handleEditCost = (
  id: string,
  costArr: CostObj[],
  addSelectedIdAction: Function,
  editCostAction: Function,
  openFormModal: Function,
  closeOptionsMenu: Function,
  closeConfirmModal: Function,
  totalAction: Function
) => {
  addSelectedIdAction(id)
  editCostAction(id)
  openFormModal('edit')
  closeOptionsMenu()
  closeConfirmModal()
  totalAction(costArr)
  console.log("in handle edit cost", id)
}

export default handleEditCost
