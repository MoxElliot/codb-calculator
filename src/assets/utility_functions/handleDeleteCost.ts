const handleDeleteCost = (id: string, addSelectedIdAction: Function, closeEllipsisModal: Function, closeConfirmModal:Function, deleteAction: Function, totalAction: Function ) => {
    console.log("in HandleDeleteCosts id", id)
    addSelectedIdAction(id)
    closeEllipsisModal()
    closeConfirmModal()
    deleteAction(id)
    totalAction()
  }

  export default handleDeleteCost