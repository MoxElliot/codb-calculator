const handleEditCost = (id: string, addSelectedIdAction: Function, editCostAction: Function,openFormModal: Function,  closeOptionsMenu: Function, closeConfirmModal:Function, totalAction: Function ) => {
    addSelectedIdAction(id)
    editCostAction(id)
    openFormModal('edit')
    closeOptionsMenu()
    closeConfirmModal()
    totalAction()
  }

  export default handleEditCost