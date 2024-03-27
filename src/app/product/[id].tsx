import { View, Text, ImageBackground, TouchableOpacity } from "react-native"
import { ListItem } from "@rneui/base"
import { Button } from '@rneui/themed';
import SizeOption from "@/components/SizeOption";
import { router } from "expo-router"

import { styles } from "./styles"
import { useState } from "react";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import Feather from "@expo/vector-icons/Feather"
import { LinearGradient } from "expo-linear-gradient"
import { theme } from '@/theme'

import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset
} from 'react-native-reanimated';

type SizeOption = {
  type: string,
  slices: number,
  price: number
}

type Product = {
  id: number,
  image: string,
  title: string,
  subtitle: string,
  text: string,
  sizeOptions?: SizeOption[],
  additionalOptionsIDs?: number[]
  additionalOptions?: AdditionalOption[]
}

type AdditionalOption = {
  id: number,
  name: string,
  price: number
}

const additionalOptions: AdditionalOption[] = [
  {
    id: 0,
    name: 'Bacon',
    price: 17.9
  },
  {
    id: 1,
    name: 'Catupiry',
    price: 17.9
  },
  {
    id: 2,
    name: 'Milho',
    price: 8.5
  },
  {
    id: 3,
    name: 'Cebola',
    price: 6.9
  },
  {
    id: 4,
    name: 'Palmito',
    price: 14.9
  },
  {
    id: 5,
    name: 'Cheddar',
    price: 17.9
  },
  {
    id: 6,
    name: 'Provolone',
    price: 17.9
  },
]

const product: Product = {
  id: 0,
  image: "https://i.ibb.co/hXPXvhZ/pizza-gourmet-recem-assada-em-mesa-de-madeira-rustica-gerada-por-ia.jpg",
  title: "Pizza de calabresa",
  subtitle: "A partir de R$ 23,90",
  text: "Molho de tomate de casa, calabresa artesanal, mozzarella, orégano.",
  additionalOptionsIDs: [0, 1, 2],
  sizeOptions: [
    {
      type: 'Pequena',
      slices: 4,
      price: 23.9,
    },
    {
      type: 'Média',
      slices: 8,
      price: 43.9,
    },
    {
      type: 'Grande',
      slices: 12,
      price: 51.9,
    },
  ]
};

export default function Home() {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedAdditional, setSelectedAdditional] = useState<AdditionalOption[]>([])
  const [quantity, setQuantity] = useState(1)

  const [totalPrice, setTotalPrice] = useState(0)

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-200, 0, 200],
            [-200 / 2, 0, 200 * 0.75]
          )
        },
        {
          scale: interpolate(scrollOffset.value, [-200, 0, 200], [2, 1, 1])
        }
      ]
    };
  });

  function handleToggleSize(index: number) {
    if (!product.sizeOptions) return;

    if (selectedSize != null) {
      let lastSize = product.sizeOptions[selectedSize];
      setTotalPrice((price) => price - lastSize.price);
    }

    let actualSize = product.sizeOptions[index];
    setTotalPrice((price) => price + actualSize.price);

    setSelectedSize(index)
  }

  function handleToggleAdditional(option: AdditionalOption) {
    if (selectedAdditional.includes(option)) {
      setSelectedAdditional((state) => state.filter((item) => item !== option))
      setTotalPrice((price) => price - option.price)

      return
    }

    setSelectedAdditional((state) => [...state, option])
    setTotalPrice((price) => price + option.price)
  }

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ref={scrollRef}>
        <Animated.View style={imageAnimatedStyle}>
          <ImageBackground
            resizeMode="cover"
            source={{ uri: product.image }}
            style={styles.image}>
            <LinearGradient
              colors={["rgba(0,0,0,0)", "#000"]}
              style={styles.linear}>
              <View style={styles.header}>
                <MaterialCommunityIcons
                  size={25}
                  color="#fff"
                  name="basket-outline"
                  onPress={() => { }}
                />
              </View>
            </LinearGradient>
          </ImageBackground>
        </Animated.View>

        <View
          style={styles.body}>
          <View style={styles.productTitleWrapper}>
            <Feather
              size={35}
              color="#FF8F28"
              name="chevron-left"
              onPress={() => { router.back() }}
            />
            <Text style={styles.title}>
              {product.title}
            </Text>
          </View>

          <Text style={styles.descriptionText}>
            {product.text}
          </Text>

          {
            product.sizeOptions?.length &&
            <View>
              <Text style={styles.sectionTitle}>
                Tamanho *
              </Text>

              <View style={styles.sizeWrapper}>
                {product.sizeOptions.map((option, index) => (
                  <SizeOption
                    key={index}
                    type={option.type}
                    slices={option.slices}
                    price={option.price}
                    selected={index == selectedSize}
                    onPress={() => handleToggleSize(index)}
                  ></SizeOption>
                ))}
              </View>
            </View>
          }

          {
            additionalOptions.length &&
            <View>
              <Text style={styles.sectionTitle}>
                Adicionais
              </Text>

              {additionalOptions.map((option) => (
                <ListItem
                  bottomDivider
                  containerStyle={{ paddingHorizontal: 5, paddingVertical: 5 }}
                  key={option.id}
                  onPress={() => handleToggleAdditional(option)}>
                  <ListItem.Content>
                    <ListItem.Title style={styles.listOptionTitle}>
                      {option.name}
                    </ListItem.Title>

                    <ListItem.Subtitle style={styles.listOptionSubtitle}>
                      {
                        option.price.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                    </ListItem.Subtitle>
                  </ListItem.Content>

                  <ListItem.CheckBox
                    checkedColor="#FF8B00"
                    iconType="material-icon"
                    checkedIcon="radio-button-on"
                    uncheckedIcon="radio-button-off"
                    checked={selectedAdditional.includes(option)}
                    onPress={() => handleToggleAdditional(option)}
                  />
                </ListItem>
              ))}
            </View>
          }
        </View>
      </Animated.ScrollView>

      <View style={styles.bottomContainer}>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            disabled={quantity == 1}
            onPress={() => { setQuantity(quantity - 1) }}>
            <Feather
              size={25}
              color={quantity == 1 ? theme.colors.gray_300 : "#FF8F28"}
              name="minus"
            />
          </TouchableOpacity>

          <Text style={styles.quantity}>
            {quantity}
          </Text>

          <TouchableOpacity
            disabled={quantity == 99}
            onPress={() => { setQuantity(quantity + 1) }}>
            <Feather
              size={25}
              color={quantity == 99 ? theme.colors.gray_300 : "#FF8F28"}
              name="plus"
            />
          </TouchableOpacity>
        </View>

        <Button
          size="md"
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ["#FF9800", "#ff5834"],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.9 },
          }}
          buttonStyle={styles.btnAdd}
          containerStyle={{ flex: 1, maxWidth: 250 }}>
          <View style={styles.btnAddContainer}>
            <Text style={styles.btnAddText}>
              Adicionar
            </Text>
            <Text style={styles.btnAddText}>
              {
                Math.abs(totalPrice * quantity).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            </Text>
          </View>
        </Button>
      </View>
    </View>
  )
}