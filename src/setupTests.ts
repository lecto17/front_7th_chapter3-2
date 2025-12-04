import "@testing-library/jest-dom";
import { beforeEach } from "vitest";
import { useCartStore } from "./advanced/domains/cart/store/cartStore";
import { useProductStore } from "./advanced/domains/product/store/productStore";
import { useNotificationStore } from "./advanced/shared/stores/notificationStore";
import { INITIAL_PRODUCTS } from "./advanced/lib/constants";

beforeEach(() => {
  // Store 초기화
  useCartStore.getState().clearCart();
  useProductStore.setState({ products: INITIAL_PRODUCTS });
  useNotificationStore.getState().clearNotifications();
});
