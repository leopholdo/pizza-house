import { View, Text, ScrollView, Alert, Image, ImageBackground, Dimensions } from "react-native"
import { styles } from "./styles"

import { Tab, TabView } from '@rneui/themed';

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import { LinearGradient } from "expo-linear-gradient"

import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect } from 'react';
import { services } from "@/services"

import FeaturedProductTabView from '@/components/FeaturedProductTabView'
import ProductTabView from "@/components/ProductTabView";

export default function Index() {
  const [index, setIndex] = useState(0);
  const [categories, setCategories] = useState<Category[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const categories = services.categories.getCategories();
    setCategories(categories);

    const featuredProducts = services.products.getFeaturedProducts();
    setFeaturedProducts(featuredProducts);
  }, [])

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

            <MaterialCommunityIcons
              size={25}
              color="#fff"
              name="basket-outline"
              onPress={() => { }}
            />
          </View>

          <Tab 
            scrollable dense
            value={index} 
            onChange={setIndex}
            indicatorStyle={styles.tabIndicatorStyle}
            titleStyle={styles.tabTitleStyle}
            style={styles.tab}>
            <Tab.Item>Destaques</Tab.Item>

            { categories.map(cat => (
              <Tab.Item key={cat.id}>{ cat.name }</Tab.Item>
            ))}
          </Tab>
        </LinearGradient>
      </ImageBackground>

      <View style={styles.body}>
        <SafeAreaProvider>
          <TabView
            minSwipeSpeed={0.4}
            value={index} 
            onChange={setIndex} 
            animationType="spring">
            <TabView.Item style={styles.tabItem}>
              <FeaturedProductTabView
                products={featuredProducts}
              ></FeaturedProductTabView>
            </TabView.Item>

            { categories.map(cat => (
              <TabView.Item key={cat.id} style={styles.tabItem}>
                <ProductTabView
                  category_id={cat.id}
                ></ProductTabView>
              </TabView.Item>
            ))}            
          </TabView>
        </SafeAreaProvider>
      </View>
    </View>
  )
}