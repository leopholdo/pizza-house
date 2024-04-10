import { 
  View, 
  Text, 
  Image,   
  TouchableOpacity,
  TouchableOpacityProps
} from "react-native";

import { 
  useStyles,
  useActiveStyles 
} from "./style";

type Props = TouchableOpacityProps & {
  sizeOption: Size,
  selected?: boolean
}

export default function ProductCard({
  sizeOption,
  selected = false,
  ...rest
}: Props) {

  const styles = selected ? useActiveStyles() : useStyles();

  return (
    <TouchableOpacity 
      style={styles.sizeOption} 
      activeOpacity={0.8}
      { ...rest }>
      <Text style={styles.sizeTitle}>
        {sizeOption.name}
      </Text>
      <Text style={styles.sizeSubtitle}>
        {sizeOption.additionalInfo}
      </Text>
      <Text style={[styles.sizeTitle, {marginTop: 5}]}>
        {sizeOption.price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </Text>
    </TouchableOpacity>
  )
}