import { Text, ScrollView, Image, View } from "react-native"
import { styles } from "./styles"

import ProductCard from "@/components/ProductCard"

export default function Destaques() {
  const products: {image: string, title: string, subtitle: string}[] = [
    {
      image: "https://i.ibb.co/hXPXvhZ/pizza-gourmet-recem-assada-em-mesa-de-madeira-rustica-gerada-por-ia.jpg",
      title: "Pizza de calabresa",
      subtitle: "A partir de R$ 23,90"
    },
    {
      image: "https://i.ibb.co/hXPXvhZ/pizza-gourmet-recem-assada-em-mesa-de-madeira-rustica-gerada-por-ia.jpg",
      title: "Pizza de calabresa",
      subtitle: "A partir de R$ 23,90"
    },
    {
      image: "https://i.ibb.co/hXPXvhZ/pizza-gourmet-recem-assada-em-mesa-de-madeira-rustica-gerada-por-ia.jpg",
      title: "Pizza de calabresa",
      subtitle: "A partir de R$ 23,90"
    },
    {
      image: "https://i.ibb.co/hXPXvhZ/pizza-gourmet-recem-assada-em-mesa-de-madeira-rustica-gerada-por-ia.jpg",
      title: "Pizza de calabresa",
      subtitle: "A partir de R$ 23,90"
    },
    {
      image: "https://i.ibb.co/hXPXvhZ/pizza-gourmet-recem-assada-em-mesa-de-madeira-rustica-gerada-por-ia.jpg",
      title: "Pizza de calabresa",
      subtitle: "A partir de R$ 23,90"
    },
  ]

  return (
    <View style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
      > 
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
          ></ProductCard>
        ))}
      </ScrollView>
    </View>
  )
}