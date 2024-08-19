import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import CreateAccPage from "./pages/CreateAccPage/CreateAccPage";

function App() {
  return (
    <div className="App">
      <Header/>
      <MainPage/>
      <CreateAccPage/>
      <Footer/>
    </div>
  );
}

export default App;
