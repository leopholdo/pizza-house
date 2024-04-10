import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type OrderState = {
  countOrders: number,
  orders: Order[],
}

const initialState: OrderState = {
  countOrders: 0,
  orders: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.orders.push(action.payload);

      state.countOrders = state.orders.length;
    },
    removeOrder: (state, action: PayloadAction<number>) => {
      state.orders.splice(action.payload, 1);

      state.countOrders = state.orders.length;
    },
    incrementOrderQuantity: (state, action: PayloadAction<number>) => {
      const order = state.orders[action.payload];

      order.quantity++;

      order.total = order.quantity * order.subTotal;
    },
    decrementOrderQuantity: (state, action: PayloadAction<number>) => {
      const order = state.orders[action.payload];
      
      order.quantity--;

      order.total = order.quantity * order.subTotal;
    }
  }
})

// Action creators are generated for each case reducer function
export const { 
  addOrder, 
  removeOrder, 
  incrementOrderQuantity, 
  decrementOrderQuantity 
} = cartSlice.actions

export default cartSlice.reducer