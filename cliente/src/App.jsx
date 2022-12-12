import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";

function App() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
