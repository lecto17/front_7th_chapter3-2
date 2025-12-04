import { useCartStore } from "../store/cartStore";

export function useCart() {
  const { cart, addToCart, removeFromCart, updateQuantity, clearCart } =
    useCartStore();

  const totalItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return {
    cart,
    totalItemCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };
}
