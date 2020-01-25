import { store } from "react-notifications-component";

export const validateForm = (name, email, text, cb, args) => {
  const errors = [];
  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    errors.push("You've entered invalid e-mail adress!");
  (name.length < 3 || !/^[A-Za-z]+$/.test(name)) &&
    errors.push("Name must contain min. 3 characters and include letters only!");
  text.length < 2 && errors.push("Text must contain min. 2 characters!");
  errors.length > 0
    ? errors.forEach(error => {
        store.addNotification({
          title: "Error!",
          message: error,
          type: "danger",
          insert: "top",
          container: "top-right",
          dismiss: {
            duration: 3000,
            onScreen: false
          }
        });
      })
    : store.addNotification({
        title: "Success",
        message: "Comment has been added",
        type: "success",
        insert: "top",
        container: "top-right",
        dismiss: {
          duration: 3000,
          onScreen: false
        }
      }) && cb(args);
  return errors;
};
