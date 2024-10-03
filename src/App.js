import { BrowserRouter, Route, Routes } from "react-router-dom";

import Container from "./Container";
import Header from "./Header";
import Menu from "./Menu";
import SemiHeader from "./SemiHeader";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <SemiHeader />
        <div className="flex">
          <Menu />
          <Routes>
            <Route index element={<Container />} path="/" />
            <Route path="/article" />
            <Route element={<Container />} path="/article/notice" />
            <Route path="/article/q&a" />
            <Route path="/message" />
            <Route path="/message/send" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
