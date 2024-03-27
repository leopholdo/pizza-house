import { 
  View, 
  Text, 
  Image,   
  TouchableOpacity,
  TouchableOpacityProps
} from "react-native";

import { 
  sizeStyles,
  sizeActiveStyles 
} from "./style";

type Props = TouchableOpacityProps & {
  type: string,
  slices: number,
  price: number,
  selected?: boolean
}

export default function ProductCard({
  type, 
  slices,
  price,
  selected = false,
  ...rest
}: Props) {

  const styles = selected ? sizeActiveStyles : sizeStyles;

  return (
    <TouchableOpacity 
      style={styles.sizeOption} 
      activeOpacity={0.8}
      { ...rest }>
      <Text style={styles.sizeTitle}>
        {type}
      </Text>
      <Text style={styles.sizeSubtitle}>
        {slices} fatias
      </Text>
      <Text style={[styles.sizeTitle, {marginTop: 5}]}>
        {price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </Text>
    </TouchableOpacity>
  )
}