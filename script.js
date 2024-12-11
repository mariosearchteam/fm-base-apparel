const validate = new JustValidate("#form");

validate.addField("#email", [
  {
    rule: "required",
    errorMessage: "Please enter your email",
  },
  {
    rule: "email",
    errorMessage: "Please provide a valid email",
  },
]);
