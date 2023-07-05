import type CostObj from '../../types/CostObj'

const handleDeleteCost = (id: string, addSelectedIdAction: Function, closeOptionsMenu: Function, closeConfirmModal:Function, deleteAction: Function, totalAction: Function, costObj: CostObj[]) => {
    console.log("in HandleDeleteCosts id", id)
    addSelectedIdAction(id)
    closeOptionsMenu()
    closeConfirmModal()
    deleteAction(id)
    totalAction(costObj),
    costObj
  }

  export default handleDeleteCost