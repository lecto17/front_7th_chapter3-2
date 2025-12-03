import { Coupon } from "../../types";
import Admin from "../components/admin/Admin";
import { ProductWithUI } from "../types";

export default function AdminPage({
  coupons,
  products,
  setProducts,
}: {
  coupons: Coupon[];
  products: ProductWithUI[];
  setProducts: React.Dispatch<React.SetStateAction<ProductWithUI[]>>;
}) {
  return (
    <Admin coupons={coupons} products={products} setProducts={setProducts} />
  );
}
