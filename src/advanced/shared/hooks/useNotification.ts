import { useNotificationStore } from "../../shared/stores/notificationStore";

export function useNotification() {
  const { notifications, addNotification, removeNotification } =
    useNotificationStore();

  return {
    notifications,
    addNotification,
    removeNotification,
  };
}
