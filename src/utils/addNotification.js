import { store } from "react-notifications-component";

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
};
