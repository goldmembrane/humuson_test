import Container from "./Container";
import Header from "./Header";
import Menu from "./Menu";
import SemiHeader from "./SemiHeader";

function App() {
  return (
    <div>
      <Header />
      <SemiHeader />
      <div className="flex">
        <Menu />
        <Container />
      </div>
    </div>
  );
}

export default App;
