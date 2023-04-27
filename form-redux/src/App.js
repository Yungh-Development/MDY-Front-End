/* eslint-disable no-undef */
import { SignInForm } from "./Components/SignInForm";

import "./App.css";

function App() {
  const SignInHandler = (data) => {
    console.log(data);
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
