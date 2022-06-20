import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";



export const useShoppingCart = () => {

    // [key: string] -> significa que se van agregar x cantidad de llaves
    const [shoppingCart, setShoppingCart] = useState<{
      [key: string]: ProductInCart;
    }>({});

    const onProductCountChange = ({
      count,
      product,
    }: {
      count: number;
      product: Product;
    }) => {
      setShoppingCart((oldShoppingCartState) => {  
        if (count === 0) {
          // desestruturamos la propiedad computada y el resto
          //          ▼                      ▼
          const { [product.id]: toDelete, ...rest } = oldShoppingCartState;
          return {
            ...rest,
          };
        }
  
        return {
          ...oldShoppingCartState,
          [product.id]: { ...product, count },
        };
      });
    };

    return{
      shoppingCart,
      onProductCountChange
    }

}