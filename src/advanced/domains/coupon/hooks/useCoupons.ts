import { useCouponStore } from "../store/couponStore";

export function useCoupons() {
  const { coupons, addCoupon, deleteCoupon } = useCouponStore();

  return {
    coupons,
    addCoupon,
    deleteCoupon,
  };
}
