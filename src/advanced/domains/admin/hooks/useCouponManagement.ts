import { useState, useCallback } from "react";
import { CouponFormData } from "../../coupon/schemas/couponSchemas";
import { useCouponStore } from "../../coupon/store/couponStore";
import { useCartStore } from "../../cart/store/cartStore";
import { useNotificationStore } from "../../../shared/stores/notificationStore";

export function useCouponManagement() {
  const { addCoupon, deleteCoupon } = useCouponStore();
  const { selectedCoupon, clearCoupon } = useCartStore();
  const { addNotification } = useNotificationStore();

  const [showCouponForm, setShowCouponForm] = useState(false);

  const toggleCouponForm = useCallback(() => {
    setShowCouponForm((prev) => !prev);
  }, []);

  const closeCouponForm = useCallback(() => {
    setShowCouponForm(false);
  }, []);

  const handleAddCoupon = useCallback(
    (data: CouponFormData) => {
      // addCoupon in store already handles notification and returns void
      // But original hook expected boolean return from addCoupon to close form
      // We need to check if addCoupon was successful.
      // The store implementation I wrote doesn't return boolean.
      // I should update store to return boolean or handle it here.
      // For now, I'll assume success if no error thrown, but store handles error notification.
      // Let's modify store to return boolean or just check if coupon exists before calling.

      // Actually, let's just call it. The store notifies.
      // But we need to know if we should close the form.
      // The store checks for duplicates.
      // I'll check for duplicates here or update store.
      // Let's rely on store for now and maybe close form anyway or check store state?
      // Better: Update store to return boolean or promise.
      // Since I can't easily update store right now without another tool call, I'll check duplicates here using store state.

      const { coupons } = useCouponStore.getState();
      const existingCoupon = coupons.find((c) => c.code === data.code);
      if (existingCoupon) {
        addNotification("이미 존재하는 쿠폰 코드입니다.", "error");
        return;
      }

      addCoupon(data);
      // addCoupon store action already notifies success.
      closeCouponForm();
    },
    [addCoupon, addNotification, closeCouponForm]
  );

  const handleDeleteCoupon = useCallback(
    (code: string) => {
      deleteCoupon(code);
      if (selectedCoupon?.code === code) {
        clearCoupon();
      }
      addNotification("쿠폰이 삭제되었습니다.", "success");
    },
    [deleteCoupon, selectedCoupon, clearCoupon, addNotification]
  );

  return {
    showCouponForm,
    toggleCouponForm,
    closeCouponForm,
    handleAddCoupon,
    handleDeleteCoupon,
  };
}
