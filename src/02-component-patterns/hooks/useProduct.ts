import { onChangeArgs, Product } from "./../interfaces/interfaces";

import { useState, useEffect } from "react";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
}: useProductArgs) => {
  const [counter, setCounter] = useState(value);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);

    setCounter(newValue);
    onChange && onChange({ count: newValue, product }); // se verifica si la funcion fue enviada
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
  };
};
