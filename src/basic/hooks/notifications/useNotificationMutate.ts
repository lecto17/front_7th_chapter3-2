import { useCallback } from "react";
import { useNotification } from "./useNotification";

export const useNotificationMutate = () => {
  const { setNotifications } = useNotification();

  const addNotification = useCallback(
    (message: string, type: "error" | "success" | "warning" = "success") => {
      const id = Date.now().toString();
      setNotifications((prev) => [...prev, { id, message, type }]);

      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
      }, 3000);
    },
    []
  );

  return { addNotification };
};
