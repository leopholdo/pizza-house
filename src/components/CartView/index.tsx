import { View, Text, TouchableOpacity, Image, Modal, Pressable, BackHandler } from "react-native"
import { ListItem } from "@rneui/base"
import { Button, Dialog, useTheme } from '@rneui/themed';

import { useStyles } from "./styles"
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { RootState } from "@/store";
import { removeOrder, incrementOrderQuantity, decrementOrderQuantity } from "@/store/reducers/cart";

import { useSelector } from "react-redux";

import { Feather } from "@expo/vector-icons";

import Animated from 'react-native-reanimated';

type Props = {
  onBack: () => void
}

export default function CartView({onBack, ...rest}: Props) {    
  
  const [modalConfirmation, setModalConfirmation] = useState<boolean>(false);
  const [selectedOrderIndex, setSelectedOrderIndex] = useState<number | null>(null);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const orders = useSelector((state: RootState) => state.cart.orders);

  const dispatch = useDispatch();

  const { theme } = useTheme();
  const styles = useStyles();

  useEffect(() => {
    console.log(orders);

    setTotalPrice(
      orders.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.total
      },0)
    )
  }, [orders])

  function decrementQuantity(orderIndex: number) {
    if(orders[orderIndex].quantity == 1) {
      setSelectedOrderIndex(orderIndex);
      setModalConfirmation(true);

      return;
    }
    else {
      dispatch(decrementOrderQuantity(orderIndex))
    }
  }

  function incrementQuantity(orderIndex: number) {
    dispatch(incrementOrderQuantity(orderIndex))
  }

  function confirmRemoveOrder(confirm: boolean) {
    if(confirm && selectedOrderIndex != null) {
      console.log(selectedOrderIndex);
      dispatch(removeOrder(selectedOrderIndex))
    }

    setSelectedOrderIndex(null)
    setModalConfirmation(false)
  }

  return (
    <Animated.View 
      style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Feather 
            name="chevron-down" 
            size={28} 
            color={theme.colors.primary} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Minha sacola
        </Text>

        <View></View>
      </View>

      {
        orders.length == 0 && 
        <View style={styles.emptyCartWrapper}>
          <Feather 
            name="shopping-cart" 
            size={35} 
            color={theme.colors.primary} />
          <Text style={styles.emptyCartText}>
            Sua sacola está vazia
          </Text>
        </View>
      }

      <Animated.ScrollView
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.body}>
          {
            orders.map((order, index) => (
              <View style={styles.orderWrapper} key={index}>
                <Image 
                  style={styles.image}
                  source={{
                    uri: order.product.image
                  }}>
                </Image>

                <View style={{flex: 1}}>
                  <Text style={styles.bodyTitle}>
                    {order.product.name}
                  </Text>

                  {
                    order.size.name &&
                    <Text style={styles.bodyText}>
                      {order.size.name}
                    </Text>
                  }

                  <Text style={styles.bodySubtitle}>
                    {
                      order.subTotal?.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })
                    }
                  </Text>

                  {
                    order.additionalItems.length > 0 &&
                    <View style={styles.bodySection}>
                      <Text style={styles.bodySubtitle}>
                        Adicionais:
                      </Text>

                      {
                        order.additionalItems.map((additional, index) => (
                          <Text style={styles.bodyText} key={index}>
                            { additional.name }
                          </Text>
                        ))
                      }
                    </View>
                  }

                  <View style={styles.quantityContainer}>
                    <TouchableOpacity
                      onPress={() => decrementQuantity(index) }>
                      <Feather
                        size={25}
                        color={order.quantity == 1 ? theme.colors.grey3 : "#FF8F28"}
                        name={order.quantity == 1 ? "trash" : "minus"}
                      />
                    </TouchableOpacity>

                    <Text style={styles.quantity}>
                      {order.quantity}
                    </Text>

                    <TouchableOpacity
                      disabled={order.quantity == 99}
                      onPress={() => incrementQuantity(index)}>
                      <Feather
                        size={25}
                        color={order.quantity == 99 ? theme.colors.grey3 : "#FF8F28"}
                        name="plus"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))
          }
        </View>
      </Animated.ScrollView>

      <View style={styles.footerWrapper}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.bodySubtitle}>
            Total:
          </Text>
          <Text style={styles.totalPrice}>
            { 
              totalPrice.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })
            } 
          </Text>
        </View>

        <Button
          style={{marginTop: 10}}
          title="Checkout"
          radius="sm"
          onPress={() => confirmRemoveOrder(true)}
        />
      </View>

      <Dialog
        isVisible={modalConfirmation}
        onBackdropPress={() => setModalConfirmation(!modalConfirmation)}>
        <Dialog.Title 
          title="Deseja realmente excluir o pedido?"
          titleStyle={[styles.bodyTitle, styles.modalTitle]}
        />
        
        <View style={{flexDirection: 'row', justifyContent: 'center', gap: 10}}>
          <Button 
            type="clear"
            title="Não" 
            titleStyle={{ fontWeight: '500' }}
            onPress={() => confirmRemoveOrder(false)} 
          />

          <Button
            type="clear"
            title="Sim"
            onPress={() => confirmRemoveOrder(true)}
          />
        </View>
      </Dialog>
    </Animated.View>
  )
}