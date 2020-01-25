import { addNotification } from "./addNotification";

export const validateForm = (name, email, text, cb, args) => {
  const errors = [];

  // validate email field
  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    errors.push("You've entered invalid e-mail adress!");

  // validate name field
  (name.length < 3 || !/^[A-Za-z]+$/.test(name)) &&
    errors.push(
      "Name must contain min. 3 characters and include letters only!"
    );

  // validate text field
  text.length < 2 && errors.push("Text must contain min. 2 characters!");

  // add notifications and call callback if there is no errors
  errors.length > 0
    ? errors.forEach(error => {
        addNotification("danger", error, "Error!");
      })
    : addNotification("success", "Comment has been added", "Success!") &&
      cb(args);

  return errors;
};
