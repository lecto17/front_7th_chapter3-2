import { useCallback } from "react";
import { Coupon } from "../../../../types";
import { MIN_COUPON_AMOUNT_FOR_PERCENTAGE } from "../../../lib/constants";
import { useCartStore } from "../../cart/store/cartStore";
import { useNotificationStore } from "../../../shared/stores/notificationStore";

export function useCouponApplication() {
  const {
    selectedCoupon,
    applyCoupon: storeApplyCoupon,
    clearCoupon,
  } = useCartStore();
  const { addNotification } = useNotificationStore();

  const applyCoupon = useCallback(
    (coupon: Coupon, currentTotal: number) => {
      if (
        currentTotal < MIN_COUPON_AMOUNT_FOR_PERCENTAGE &&
        coupon.discountType === "percentage"
      ) {
        addNotification(
          "percentage 쿠폰은 10,000원 이상 구매 시 사용 가능합니다.",
          "error"
        );
        return false;
      }

      storeApplyCoupon(coupon);
      addNotification("쿠폰이 적용되었습니다.", "success");
      return true;
    },
    [storeApplyCoupon, addNotification]
  );

  const handleApplyCoupon = useCallback(
    (coupon: Coupon | null, currentTotal: number) => {
      if (coupon) {
        applyCoupon(coupon, currentTotal);
      }
    },
    [applyCoupon]
  );

  return {
    selectedCoupon,
    applyCoupon,
    clearCoupon,
    handleApplyCoupon,
    // setSelectedCoupon is no longer needed directly as we have applyCoupon/clearCoupon
    // but if needed for compatibility we can expose a wrapper or just remove it if not used elsewhere
    setSelectedCoupon: (coupon: Coupon | null) => {
      if (coupon) {
        storeApplyCoupon(coupon);
      } else {
        clearCoupon();
      }
    },
  };
}
