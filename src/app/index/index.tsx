import { View, Text, ScrollView, Alert, Image, ImageBackground, Dimensions } from "react-native"
import { styles } from "./styles"

import { Tab, TabView } from '@rneui/themed';

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import { LinearGradient } from "expo-linear-gradient"

import Destaques from "../destaques";
import PizzaSalgadas from "../pizzaSalgadas";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Home() {
  const [index, setIndex] = useState(0);

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
            <Tab.Item>Pizzas Salgadas</Tab.Item>
            {/* <Tab.Item>Pizzas Doces</Tab.Item> */}
          </Tab>
        </LinearGradient>
      </ImageBackground>

      <View style={styles.body}>
        <SafeAreaProvider>
          <TabView value={index} onChange={setIndex} animationType="spring">
            <TabView.Item style={styles.tabItem}>
              <Destaques/>
            </TabView.Item>
            <TabView.Item style={styles.tabItem}>
              <PizzaSalgadas/>
            </TabView.Item>
            <TabView.Item style={styles.tabItem}>
              {/* <PizzaD/> */}
            </TabView.Item>
          </TabView>
        </SafeAreaProvider>
      </View>
    </View>
  )
}