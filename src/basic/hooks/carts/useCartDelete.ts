import { useCallback } from "react";
import { useCarts } from "./useCarts";

export const useCartDelete = () => {
  const { setCart } = useCarts();

  const removeFromCart = useCallback((productId: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product.id !== productId)
    );
  }, []);

  return { removeFromCart };
};
