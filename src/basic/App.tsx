import { useState } from "react";
import AdminPage from "./pages/AdminPage";
import { useProducts } from "./hooks/products/useProducts";
import HomePage from "./pages/HomePage";
import Header from "./components/header/Header";
import Notification from "./components/notifcation/Notification";
import { useNotification } from "./hooks/notifications/useNotification";
import { useCarts } from "./hooks/carts/useCarts";
import { useCoupons } from "./hooks/coupons/useCoupons";

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const { products, setProducts } = useProducts();
  const { notifications, setNotifications } = useNotification();
  const { cart, totalItemCount } = useCarts();
  const { coupons } = useCoupons();

  return (
    <div className="min-h-screen bg-gray-50">
      <Notification
        notifications={notifications}
        setNotifications={setNotifications}
      />

      <Header
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
        cart={cart}
        totalItemCount={totalItemCount}
      />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {isAdmin ? (
          <AdminPage
            coupons={coupons}
            products={products}
            setProducts={setProducts}
          />
        ) : (
          <HomePage products={products} />
        )}
      </main>
    </div>
  );
};

export default App;
