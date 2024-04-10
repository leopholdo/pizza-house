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

export default function ProductCard({
  product,
  ...rest
}: Props) {
  
  const styles = useStyles();

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} {...rest}>
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

        <Text style={styles.descriptionText}>
          { product.description }
        </Text>
      </View>
      {
        product.image != '' &&
        <Image 
          resizeMode="cover"
          source={{ uri: product.image }}
          style={styles.image}/>
      }
    </TouchableOpacity>
  )
}