import "./App.css";
import Main from "./pages/main";
import Header from "./pages/header";
import Footer from "./pages/footer";

function App() {
  return (
    <div className="App">
      <Main>
        <Header></Header>

        <Footer></Footer>
      </Main>
    </div>
  );
}

export default App;
