import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext, ReactElement } from "react";
import { onChangeArgs, Product, ProductContextProps } from "../interfaces/interfaces";


export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args : onChangeArgs ) => void;
  value?: number;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children,className, style, onChange, value }: Props) => {
  const { counter, increaseBy } = useProduct({product,onChange, value});

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children}
      </div>
    </Provider>
  );
};


