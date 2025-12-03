import { ProductWithUI } from "../types";
import ProductList from "../components/product/ProductList";
import CartSidebar from "../components/cart/CartSidebar";

const HomePage = ({ products }: { products: ProductWithUI[] }) => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* 상품 목록 */}
        <ProductList products={products} />
        <CartSidebar />
      </div>
    </>
  );
};

export default HomePage;
