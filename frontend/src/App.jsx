import Header from "./components/Header";
import GlobalStyle from "./GlobalStyle";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}

export default App;
