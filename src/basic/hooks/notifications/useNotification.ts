import { useState } from "react";
import { NotificationItem } from "../../types";

export const useNotification = () => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  return { notifications, setNotifications };
};
