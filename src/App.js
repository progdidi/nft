import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import CreateAccPage from "./pages/CreateAccPage/CreateAccPage";
import ArtistPage from "./pages/ArtistPage/ArtistPage";
import NFTPage from "./pages/NFTPage/NFTPage";
import MarketPlacePage from "./pages/MarketPlacePage/MarketPlacePage";
import RankingsPage from "./pages/RankingsPage/RankingsPage";

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <MainPage/>
      <CreateAccPage/> */}
      {/* <ArtistPage/> */}
      <NFTPage/>
      <MarketPlacePage/>
      <RankingsPage/>
      <Footer/>
    </div>
  );
}

export default App;
