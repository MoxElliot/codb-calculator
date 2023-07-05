
const scrollToNewCost = (costId: string) => {
  let cost = document.getElementById(costId) as HTMLElement | null
  cost?.scrollIntoView({ block: 'start', inline: 'start' })
  console.log('in scroll', cost)
}

export default scrollToNewCost
