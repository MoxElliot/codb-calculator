import type CostObj from '../../types/CostObj'

const handleDeleteCost = (   //destructure as object
  id: string,
  addSelectedIdAction: Function,
  closeOptionsMenu: Function,
  closeConfirmModal: Function,
  deleteAction: Function,
  totalAction: Function,
  costObj: CostObj[]
) => {
  addSelectedIdAction(id)
  closeOptionsMenu()
  closeConfirmModal()
  deleteAction(id)
  totalAction(costObj)
  costObj
}

export default handleDeleteCost
