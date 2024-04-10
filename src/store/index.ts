import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cart'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
  persistReducer, 
  persistStore, 
  FLUSH,
  REHYDRATE, 
  PAUSE, 
  PERSIST, 
  PURGE, 
  REGISTER
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const reducers = combineReducers({
  cart: persistReducer(persistConfig, cartReducer),
});

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)