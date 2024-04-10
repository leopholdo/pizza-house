import { 
  View, 
  TouchableOpacityProps,
  ScrollView
} from "react-native";
import { useEffect, useState } from "react";

import { useStyles } from "./style";

import { services } from "@/services";

import ProductCard from "../ProductCard";

type Props = TouchableOpacityProps & {
  category_id: number,
  onSelectProduct: (product: Product) => void
}

export default function ProductTabView({category_id, onSelectProduct, ...rest}: Props) {
  const styles = useStyles();

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const products = services.products.getProducts(category_id);

    setProducts(products);
  },[])

  return (
    <View style={styles.tabView}>
      <ScrollView showsVerticalScrollIndicator={false}> 
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onPress={() => onSelectProduct(product)}
          ></ProductCard>
        ))}
      </ScrollView>
    </View>
  )
}