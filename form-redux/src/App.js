/* eslint-disable no-undef */
import { SignInForm } from "./Components/SignInForm";

import "./App.css";

function App() {
  const SignInHandler = (val) => {
    const errors = {};
    if (!val.firstName) {
      alert("First Name is required");
      errors.firstName = "Required";
    }
    if (!val.lastName) {
      alert("Last Name is required");
      errors.lastName = "Required";
    }
    if (!val.email) {
      alert("email is required");
      errors.email = "Required";
    } else if (!/^.+@.+$/i.test(val.email)) {
      alert("email is invalid");
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
  return (
    <div className="App">
      <div className="">
        <SignInForm onSubmit={SignInHandler} />
      </div>
    </div>
  );
}

export default App;
