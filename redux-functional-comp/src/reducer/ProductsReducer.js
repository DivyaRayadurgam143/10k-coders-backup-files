import { DefaultState } from "./DefaultState";
export const ProductsReducer = (state=DefaultState,action) => {
    switch (action.type) {
        default:
          return state;
    }
}