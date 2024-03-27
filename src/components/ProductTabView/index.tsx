import { 
  View, 
  TouchableOpacityProps,
  ScrollView
} from "react-native";
import { useEffect, useState } from "react";
import { router } from "expo-router"

import { styles } from "./style";

import { services } from "@/services";

import ProductCard from "../ProductCard";

type Props = TouchableOpacityProps & {
  category_id: number
}

export default function ProductTabView({category_id, ...rest}: Props) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const products = services.products.getProducts(category_id);
    console.log(products);

    setProducts(products);
  },[])

  return (
    <View style={styles.tabView}>
      <ScrollView showsVerticalScrollIndicator={false}> 
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onPress={() => router.navigate("/product/" + product.id)}
          ></ProductCard>
        ))}
      </ScrollView>
    </View>
  )
}