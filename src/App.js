import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import CreateAccPage from "./pages/CreateAccPage/CreateAccPage";
import ArtistPage from "./pages/ArtistPage/ArtistPage";
import NFTPage from "./pages/NFTPage/NFTPage";

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <MainPage/>
      <CreateAccPage/> */}
      {/* <ArtistPage/> */}
      <NFTPage/>
      <Footer/>
    </div>
  );
}

export default App;
