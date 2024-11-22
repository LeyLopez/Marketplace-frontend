import { createContext, useReducer } from "react";

export const ShoppingCartContext = createContext();


const initialState = [];

const orderReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "[CARRITO] Agregar compra":
        return [...state, action.payload];
      case "[CARRITO] eliminar compra":
        return state.filter((compra) => compra.id !== action.payload);

      case "[CARRITO] Disminuir cantidad":
        return state.map((item)=>{
            const cant = item.cantidad-1
            if(item.id === action.payload && item.cantidad > 1){
                return {...item, cantidad: cant}
            }
            return item
        })
        
      case "[CARRITO] Aumentar cantidad":
        return state.map((item)=>{
            const cant = item.cantidad+1
            if(item.id === action.payload){
                return {...item, cantidad: cant}
            }
            return item
        })
      default:
        return state
    }
  }

export const ShoppingCartProvider = ({ children }) => {

    const [orderItem, dispatch] = useReducer(orderReducer, initialState);

  const addItem = (product) => {
    product.cantidad = 1
    const accion = {
      type: "[CARRITO] Agregar compra",
      payload: product,
    };
    dispatch(accion);
  };

  const deleteItem = (id) => {
    const accion = {
      type: "[CARRITO] eliminar compra",
      payload: id,
    };
    dispatch(accion);
  };

  const decrease = (id) => {
    const accion = {
      type: "[CARRITO] Disminuir cantidad",
      payload: id,
    };
    dispatch(accion);
  };

  const increase = (id) => {
    const accion = {
      type: "[CARRITO] Aumentar cantidad",
      payload: id,
    };
    dispatch(accion);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        orderItem,
        addItem,
        deleteItem,
        increase,
        decrease
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );

}