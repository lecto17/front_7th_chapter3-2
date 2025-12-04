import { useProductStore } from "../store/productStore";

export function useProducts() {
  const { products, setProducts } = useProductStore();

  return {
    products,
    setProducts,
  };
}
