import { Props as ProductButtonsProps } from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element;
  Title: ({ title, className }: ProductTitleProps) => JSX.Element;
  Image: ({ img, className }: ProductImageProps) => JSX.Element;
  Buttons: ({ className }: ProductButtonsProps) => JSX.Element;
}

export interface onChangeArgs {
  count: number;
  product: Product;
}

export interface ProductInCart extends Product {
  count: number;
}
