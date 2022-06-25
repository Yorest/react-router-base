import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext, ReactElement } from "react";
import { InitialValues, onChangeArgs, Product, ProductContextProps, ProductHandlers } from "../interfaces/interfaces";


export interface Props {
  product: Product;
  //children?: ReactElement | ReactElement[];
  children: ( args: ProductHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args : onChangeArgs ) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children,className, style, onChange, value, initialValues }: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({product,onChange, value, initialValues});

  return (
    <Provider value={{ counter, increaseBy, product, maxCount }}>
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset
        })}
      </div>
    </Provider>
  );
};


