import { View, Text, ImageBackground, TouchableOpacity } from "react-native"
import { ListItem } from "@rneui/base"
import { Button, useTheme } from '@rneui/themed';
import SizeOption from "@/components/SizeOption";

import { useStyles } from "./styles"
import { useEffect, useState } from "react";

import Feather from "@expo/vector-icons/Feather"
import { LinearGradient } from "expo-linear-gradient"
import Toast from 'react-native-toast-message';

import { services } from "@/services";

import { useDispatch } from "react-redux";
import { addOrder } from "@/store/reducers/cart";

import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
  SlideOutDown, 
  SlideInDown
} from 'react-native-reanimated';

type Props = {
  product: Product,
  category: Category | undefined,
  onBack: () => void
}

export default function ProductView({product, category, onBack, ...rest}: Props) {    
  const { theme } = useTheme();
  const styles = useStyles();
  
  const [errors, setErrors] = useState({
    size: false
  }); 
  const [loading, setLoading] = useState({
    btnSubmit: false
  }); 
  const [isFormValid, setIsFormValid] = useState(false); 
  const [hasRendered, setHasRendered] = useState(false); 

  const [additionalItems, setAdditionalItems] = useState<AdditionalItem[]>()

  const [selectedAdditional, setSelectedAdditional] = useState<AdditionalItem[]>([])
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1)

  const [subTotalPrice, setSubTotalPrice] = useState(0)

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const dispatch = useDispatch();

  useEffect(() => {
    const additionalItems = services.additionalItems.getAdditionalItems(category?.value);

    setAdditionalItems(additionalItems);
  }, [])

  useEffect(() => {
    if(hasRendered){
      validate()
    }
    else {
      setHasRendered(true)
    }
  }, [selectedSize])

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

  async function validate() {
    let errors = {
      size: false
    };

    if(product.sizes.length && selectedSize == null) {
      errors.size = true

      Toast.show({
        type: 'error',
        text1: 'Atenção!',
        text2: 'Por favor, selecione um tamanho.',
        position: 'bottom'
      });
    }

    await setErrors(errors)
    await setIsFormValid(Object.keys(errors).length === 0); 
  }

  function handleToggleSize(index: number) {
    if (selectedSize != null) {
      let lastSize = product.sizes[selectedSize];
      setSubTotalPrice((price) => price - lastSize.price);
    }

    let actualSize = product.sizes[index];
    setSubTotalPrice((price) => price + actualSize.price);

    setSelectedSize(index)
  }

  function handleToggleAdditional(option: AdditionalItem) {
    if (selectedAdditional.includes(option)) {
      setSelectedAdditional((state) => state.filter((item) => item !== option))
      setSubTotalPrice((price) => price - option.price)

      return
    }

    setSelectedAdditional((state) => [...state, option])
    setSubTotalPrice((price) => price + option.price)
  }

  async function handlePressNext() {
    await validate()

    if(selectedSize === null || errors.size) {
      Toast.show({
        type: 'error',
        text1: 'Atenção!',
        text2: 'Por favor, selecione um tamanho.',
        position: 'bottom'
      });

      return;
    }

    if(isFormValid) return;

    setLoading((prev) => ({
      ...prev,
      btnSubmit: true
    }));

    const order = {
      product: product,
      additionalItems: selectedAdditional ?? [],
      size: product.sizes[selectedSize],
      quantity: quantity,
      subTotal: subTotalPrice, 
      total: subTotalPrice * quantity
    }

    dispatch(addOrder(order));

    setLoading((prev) => ({
      ...prev,
      btnSubmit: false
    }));

    Toast.show({
      type: 'success',
      text2: 'Produto adicionado ao carrinho.',
      position: 'bottom'
    });

    onBack();
  }

  return (
    <Animated.View 
      entering={SlideInDown.duration(200)}
      exiting={SlideOutDown.duration(200)}
      style={styles.container}>
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
              onPress={onBack}
            />
            <Text style={styles.title}>
              {product.name}
            </Text>
          </View>

          <Text style={styles.descriptionText}>
            {product.description}
          </Text>

          {
            product.sizes?.length &&
            <View>
              <Text style={[styles.sectionTitle, errors.size && styles.hasError]}>
                Tamanho *
              </Text>

              <View style={styles.sizeWrapper}>
                {product.sizes.map((option, index) => (
                  <SizeOption
                    key={index}
                    sizeOption={option}
                    selected={index == selectedSize}
                    onPress={() => handleToggleSize(index)}
                  ></SizeOption>
                ))}
              </View>
            </View>
          }

          {
            additionalItems?.length &&
            <View>
              <Text style={styles.sectionTitle}>
                Adicionais
              </Text>

              {additionalItems.map((option) => (
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
              color={quantity == 1 ? theme.colors.grey3 : "#FF8F28"}
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
              color={quantity == 99 ? theme.colors.grey3 : "#FF8F28"}
              name="plus"
            />
          </TouchableOpacity>
        </View>

        <Button
          loading={loading.btnSubmit}
          size="md"
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ["#FF9800", "#ff5834"],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.9 },
          }}
          buttonStyle={styles.btnAdd}
          containerStyle={{ flex: 1, maxWidth: 250 }}
          onPress={handlePressNext}>
          <View style={styles.btnAddContainer}>
            <Text style={styles.btnAddText}>
              Adicionar
            </Text>
            <Text style={styles.btnAddText}>
              {
                Math.abs(subTotalPrice * quantity).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            </Text>
          </View>
        </Button>
      </View>
      <Toast />

    </Animated.View>
  )
}