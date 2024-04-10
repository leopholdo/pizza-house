import { View, ImageBackground, TouchableOpacity } from "react-native"
import Modal from "react-native-modal";

import { useStyles } from "./styles"

import { Badge, Tab, TabView, Text } from '@rneui/themed';

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import { LinearGradient } from "expo-linear-gradient"

import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect } from 'react';
import { services } from "@/services"

import CartView from "@/components/CartView";
import ProductView from '@/components/ProductView';
import FeaturedProductTabView from '@/components/FeaturedProductTabView'
import ProductTabView from "@/components/ProductTabView";

import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useTheme } from '@rneui/themed';

export default function Index() {
  const [showCardModal, setShowCardModal] = useState(false);

  const [tabIndex, setTabIndex] = useState(0);
  const [categories, setCategories] = useState<Category[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedProductCategory, setSelectedProductCategory] = useState<Category | undefined>(undefined);

  const countOrders = useSelector((state: RootState) => state.cart.countOrders);

  const { theme } = useTheme();
  const styles = useStyles();
  
  useEffect(() => {
    const categories = services.categories.getCategories();
    setCategories(categories);

    const featuredProducts = services.products.getFeaturedProducts();
    setFeaturedProducts(featuredProducts);
  }, [])

  function handleSelectProduct(product: Product) {
    const category = categories.find((category: Category) => category.id == product.category_id); 
    setSelectedProductCategory(category);

    setSelectedProduct(product);
  }

  return (
    <View style={styles.container}>      
      <ImageBackground
        resizeMode="cover"
        source={{ uri: 'https://i.ibb.co/4gy7yMc/pizza-recem-assada-em-uma-mesa-de-madeira-rustica-gerada-pela-ia.jpg' }}
        style={styles.image}>
        <LinearGradient
          colors={["rgba(0,0,0,0)", "#000"]}
          style={styles.linear}>
          <View style={styles.header}>
            <Text style={styles.title}>
              Pizza House
            </Text>

            <TouchableOpacity onPress={() => setShowCardModal(true)}>
              <MaterialCommunityIcons
                size={25}
                color="#fff"
                name="basket-outline"
              />

              { countOrders > 0 &&
                <Badge
                  value={countOrders}
                  badgeStyle={{backgroundColor: theme.colors.primary}}
                  containerStyle={{ position: 'absolute', top: 15, left: 15 }}
                />
              }
            </TouchableOpacity>
          </View>

          <Tab
            scrollable dense
            value={tabIndex}
            onChange={setTabIndex}
            indicatorStyle={styles.tabIndicatorStyle}
            titleStyle={styles.tabTitleStyle}
            style={styles.tab}>
            <Tab.Item>Destaques</Tab.Item>

            {categories.map(cat => (
              <Tab.Item key={cat.id}>{cat.name}</Tab.Item>
            ))}
          </Tab>
        </LinearGradient>
      </ImageBackground>

      <View style={styles.body}>
        <SafeAreaProvider>
          <TabView
            value={tabIndex}
            onChange={setTabIndex}
            animationType="spring">
            <TabView.Item style={styles.tabItem}>
              <FeaturedProductTabView
                products={featuredProducts}
                onSelectProduct={handleSelectProduct}
              ></FeaturedProductTabView>
            </TabView.Item>

            {categories.map(cat => (
              <TabView.Item key={cat.id} style={styles.tabItem}>
                <ProductTabView
                  category_id={cat.id}
                  onSelectProduct={handleSelectProduct}
                ></ProductTabView>
              </TabView.Item>
            ))}
          </TabView>
        </SafeAreaProvider>
      </View>

      <Modal 
        style={{ margin: 0 }}
        animationOut="slideOutDown"
        isVisible={selectedProduct != null}
        onBackButtonPress={() => setSelectedProduct(null)}>
        {selectedProduct != null && (
          <ProductView
            product={selectedProduct}
            category={selectedProductCategory}
            onBack={() => setSelectedProduct(null)}
          ></ProductView>
        )}
      </Modal>

      <Modal 
        style={{ margin: 0 }}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        isVisible={showCardModal}
        onBackButtonPress={() => setShowCardModal(false)}>
          <CartView
            onBack={() => setShowCardModal(false)}
          ></CartView>
      </Modal>
    </View>
  )
}