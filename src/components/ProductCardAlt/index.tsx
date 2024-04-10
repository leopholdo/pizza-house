import { 
  View, 
  Text, 
  Image,   
  TouchableOpacity,
  TouchableOpacityProps
} from "react-native";
import { useStyles } from "./style";

type Props = TouchableOpacityProps & {
  product: Product
}

export default function ProductCardAlt({
  product,
  ...rest
}: Props) {
  const styles = useStyles();

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} {...rest}>
      <Image 
        resizeMode="cover"
        source={{ uri: product.image }}
        style={styles.image}/>

      <View style={styles.description}>
        <Text style={styles.descriptionTitle}>
          { product.name }
        </Text>
        <Text style={styles.descriptionSubtitle}>
          { 'A partir de ' + 
            product.sizes[0].price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }) 
          }
        </Text>
      </View>
    </TouchableOpacity>
  )
}