const handleEditCost = (id: string, addSelectedIdAction: Function, editCostAction: Function,openFormModal: Function,  closeEllipsisModal: Function, closeConfirmModal:Function, totalAction: Function ) => {
    addSelectedIdAction(id)
    editCostAction()
    openFormModal('edit')
    closeEllipsisModal()
    closeConfirmModal()
    totalAction()
  }

  export default handleEditCost