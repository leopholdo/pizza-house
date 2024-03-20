import { 
  View, 
  Text, 
  Image,   
  TouchableOpacity,
  TouchableOpacityProps
} from "react-native";
import { styles } from "./style";

type Props = TouchableOpacityProps & {
  product: {
    image: string,
    title: string,
    subtitle: string,
    text: string,
  }
}

export default function ProductCard({product, ...rest}: Props) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} {...rest}>
      <View style={styles.description}>
        <Text style={styles.descriptionTitle}>
          { product.title }
        </Text>
        <Text style={styles.descriptionSubtitle}>
          { product.subtitle }
        </Text>
        <Text style={styles.descriptionText}>
          { product.text }
        </Text>
      </View>

      <Image 
        resizeMode="cover"
        source={{ uri: product.image }}
        style={styles.image}/>
    </TouchableOpacity>
  )
}