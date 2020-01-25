import { store } from "react-notifications-component";

// to make code more readable I've created separate function for creating notifications
export const addNotification = (
  type = "success",
  message,
  title,
  params = {}
) => {
  store.addNotification({
    title,
    message,
    type,
    insert: "top",
    container: "top-right",
    dismiss: {
      duration: 3000,
      onScreen: false
    },
    ...params
  });
  return true;
};
