import { useCallback } from "react";
import { useCartStore } from "../store/cartStore";
import { useNotificationStore } from "../../../shared/stores/notificationStore";

export function useCheckout() {
  const { clearCart, clearCoupon } = useCartStore();
  const { addNotification } = useNotificationStore();

  const handleCheckout = useCallback(() => {
    const orderNumber = `ORD-${Date.now()}`;
    addNotification(
      `주문이 완료되었습니다. 주문번호: ${orderNumber}`,
      "success"
    );
    clearCart();
    clearCoupon();
  }, [clearCart, clearCoupon, addNotification]);

  return { handleCheckout };
}
