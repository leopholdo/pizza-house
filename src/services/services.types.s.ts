type Category = {
  id: number,
  name: string,
  value: string
}

type Size = {
  name: string,
  additionalInfo: string,
  price: number
}

type Product = {
  id: number,
  name: string,
  image: string,
  description: string,
  category_id: number,
  sizes: Size[]
}

type AdditionalItem = {
  id: number,
  name: string,
  price: number,
  type: string[]
}

type Order = {
  product: Product,
  additionalItems: AdditionalItem[] | [],
  size: Size,
  quantity: number,
  subTotal: number
  total: number
}