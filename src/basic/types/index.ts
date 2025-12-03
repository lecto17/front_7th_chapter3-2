import { Product } from "../../types";

export interface ProductWithUI extends Product {
  description?: string;
  isRecommended?: boolean;
}

export interface NotificationItem {
  id: string;
  message: string;
  type: "error" | "success" | "warning";
}
