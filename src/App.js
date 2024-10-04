import { BrowserRouter, Route, Routes } from "react-router-dom";

import Container from "./Container";
import Header from "./Header";
import Menu from "./Menu";
import SemiHeader from "./SemiHeader";
import EmptyContainer from "./Container/empty";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <SemiHeader />
        <div className="flex">
          <Menu />
          <Routes>
            <Route path="/article" element={<EmptyContainer />} />
            <Route index element={<Container />} path="/article/notice" />
            <Route path="/article/q&a" element={<EmptyContainer />} />
            <Route path="/message" element={<EmptyContainer />} />
            <Route path="/message/send" element={<EmptyContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
