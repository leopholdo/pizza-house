import products from '@/data/products';

const getProducts = (category: number) => {
  return products.filter(p => p.category_id === category) || []
}

const getFeaturedProducts = () => {
  return products.filter(p => p.featured) || []
}

export {
  getProducts,
  getFeaturedProducts
}