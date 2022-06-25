import {
  InitialValues,
  onChangeArgs,
  Product,
} from "./../interfaces/interfaces";

import { useState, useEffect, useRef } from "react";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);


  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    setCounter(newValue);
    onChange && onChange({ count: newValue, product }); // se verifica si la funcion fue enviada
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  }

  useEffect(() => {
    isMounted.current = true;
  }, []);

  useEffect(() => {    
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  return {
    counter,
    maxCount: initialValues?.maxCount,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    increaseBy,
    reset,
  };
};
