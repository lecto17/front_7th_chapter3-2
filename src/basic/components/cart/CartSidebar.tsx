import { useCarts } from "../../hooks/carts/useCarts";
import CouponSection from "../coupon/CouponSection";
import CartItemList from "./CartItemList";
import PaymentSummary from "./PaymentSummary";

export default function CartSidebar() {
  const { cart } = useCarts();

  return (
    <div className="lg:col-span-1">
      <div className="sticky top-24 space-y-4">
        <CartItemList cart={cart} />

        {cart.length > 0 && (
          <>
            <CouponSection />
            <PaymentSummary />
          </>
        )}
      </div>
    </div>
  );
}
