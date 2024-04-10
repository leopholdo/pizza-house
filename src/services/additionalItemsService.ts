import additionalItems from "@/data/additionalItems"

const getAdditionalItems = (type?: string) => {
  if(!type) {
    return additionalItems;
  } else {
    return additionalItems.filter(p => p.type.includes(type)) || [];
  }
}

export {
  getAdditionalItems,
}