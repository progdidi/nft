import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import CreateAccPage from "./pages/CreateAccPage/CreateAccPage";
import ArtistPage from "./pages/ArtistPage/ArtistPage";

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <MainPage/>
      <CreateAccPage/> */}
      <ArtistPage/>
      <Footer/>
    </div>
  );
}

export default App;
