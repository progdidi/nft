import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import CreateAccPage from "./pages/CreateAccPage/CreateAccPage";
import ArtistPage from "./pages/ArtistPage/ArtistPage";
import NFTPage from "./pages/NFTPage/NFTPage";
import MarketPlacePage from "./pages/MarketPlacePage/MarketPlacePage";
import RankingsPage from "./pages/RankingsPage/RankingsPage";
import WalletPage from "./pages/WalletPage/WalletPage";

function App() {
  
  return (
    <Router >
      <div className="App">
        <Header/>
        
        <main className="main">
            <Routes>
              <Route path="/" element={<MainPage/>} />
              <Route path="/create" element={<CreateAccPage/>} />
              <Route path="/artist" element={<ArtistPage/>} />
              <Route path="/nft" element={<NFTPage/>} />
              <Route path="/market" element={<MarketPlacePage/>} />
              <Route path="/rankings" element={<RankingsPage/>} />
              <Route path="/wallet" element={<WalletPage/>} />
            </Routes>
        </main>
          
        <Footer/>
      </div>
    </Router >
  );
}

export default App;
