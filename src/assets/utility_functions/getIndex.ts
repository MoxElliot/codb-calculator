import steps from '@/assets/stepsArray'

const getIndex = () => {
    let index = steps.findIndex((step) => {
      return step.path === window.location.pathname
    })
    return index
  }
  
export default getIndex
