import {configureStore} from '@reduxjs/toolkit'
import { ProductsReducer } from '../reducer/ProductsReducer'
import { UserReducer } from '../reducer/UserReducer'
export const MainStore = configureStore({
    reducer: UserReducer,
    Products:ProductsReducer
})