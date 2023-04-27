export const Validations = (val) => {
  const errors = {};
  if (!val.firstName) {
    console.log("First Name is required");
    errors.firstName = "Required";
  }
  if (!val.lastName) {
    console.log("Last Name is required");
    errors.lastName = "Required";
  }
  if (!val.email) {
    console.log("email is required");
    errors.email = "Required";
  } else if (!/^.+@.+$/i.test(val.email)) {
    console.log("email is invalid");
    errors.email = "Invalid email address";
  }
  if (!val.age) {
    errors.age = "Required";
  } else if (isNaN(Number(val.age))) {
    errors.age = "Must be a number";
  } else if (Number(val.age) < 18) {
    errors.age = "Sorry, you must be at least 18 years old";
  }
  return errors;
};
