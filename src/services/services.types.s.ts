type Category = {
  id: number,
  name: string
}

type Sizes = {
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
  sizes: Sizes[]
}