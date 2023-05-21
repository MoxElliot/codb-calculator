import stepsArray from '@/assets/stepsArray'

const getIndex = () => {
    let index = stepsArray.findIndex((step) => {
      return step.path === window.location.pathname
    })
    return index
  }
  
export default getIndex
