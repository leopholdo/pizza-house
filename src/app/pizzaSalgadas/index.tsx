import { Text, ScrollView, Image, View } from "react-native"
import { styles } from "./styles"

import ProductCardAlt from "@/components/ProductCardAlt"

export default function PizzaSalgadas() {
  const products: {image: string, title: string, subtitle: string, text: string}[] = [
    {
      image: "https://i.ibb.co/hXPXvhZ/pizza-gourmet-recem-assada-em-mesa-de-madeira-rustica-gerada-por-ia.jpg",
      title: "Calabresa",
      subtitle: "A partir de R$ 23,90",
      text: "Molho de tomate de casa, calabresa artesanal, mozzarella, orégano."
    },
    {
      image: "https://i.ibb.co/ypmNXKV/close-up-em-uma-deliciosa-pizza-23-2150852069.jpg",
      title: "Margherita",
      subtitle: "A partir de R$ 23,90",
      text: "Molho de tomate de casa, mozzarella, tomate cereja, manjericão, orégano."
    },
    {
      image: "https://i.ibb.co/tsJJDBX/pizza-deliciosa-dentro-de-casa-23-2150873922.jpg",
      title: "Di Casa",
      subtitle: "A partir de R$ 23,90",
      text: "Molho de tomate de casa, mozzarella, tomate cereja, manjericão, orégano."
    },
    {
      image: "https://i.ibb.co/hXPXvhZ/pizza-gourmet-recem-assada-em-mesa-de-madeira-rustica-gerada-por-ia.jpg",
      title: "Pizza de calabresa",
      subtitle: "A partir de R$ 23,90",
      text: "Molho de tomate de casa, calabresa artesanal, mozzarella, orégano."
    },
    {
      image: "https://i.ibb.co/hXPXvhZ/pizza-gourmet-recem-assada-em-mesa-de-madeira-rustica-gerada-por-ia.jpg",
      title: "Pizza de calabresa",
      subtitle: "A partir de R$ 23,90",
      text: "Molho de tomate de casa, calabresa artesanal, mozzarella, orégano."
    },
  ]

  return (
    <View style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
      > 
        {products.map((product, index) => (
          <ProductCardAlt
            key={index}
            product={product}
          ></ProductCardAlt>
        ))}
      </ScrollView>
    </View>
  )
}