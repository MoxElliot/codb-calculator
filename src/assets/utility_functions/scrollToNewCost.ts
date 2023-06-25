import { ref } from 'vue'

const scrollToNewCost = (array: { value: string | any[] }) => {
  let top = array.value.length.toString()
  const cost = ref<null | HTMLElement>(document.getElementById(top))
  cost.value?.scrollIntoView({ block: 'start', inline: 'start' })
}

export default scrollToNewCost
