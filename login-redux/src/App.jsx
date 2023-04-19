import { Container } from "react-bootstrap";
import { Login } from "./Components/Login";
import { Logout } from "./Components/Logout";
import { User } from "./Components/User";

export const App = () => {
  return (
    <div className="App">
      <Container>
        <Login />
        <br />
        <User />
        <br />
        <Logout />
      </Container>
    </div>
  );
};

export default App;
