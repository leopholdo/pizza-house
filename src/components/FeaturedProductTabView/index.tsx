import { 
  View, 
  TouchableOpacityProps,
  ScrollView
} from "react-native";
import { styles } from "./style";
import { router } from "expo-router"

import ProductCardAlt from "../ProductCardAlt";

type Props = TouchableOpacityProps & {
  products: Product[]
}

export default function ProductTabView({products, ...rest}: Props) {
  return (
    <View style={styles.tabView}>
      <ScrollView showsVerticalScrollIndicator={false}> 
        {products.map((product, index) => (
          <ProductCardAlt
            key={index}
            product={product}
            onPress={() => router.navigate("/product/" + product.id)}
          ></ProductCardAlt>
        ))}
      </ScrollView>
    </View>
  )
}