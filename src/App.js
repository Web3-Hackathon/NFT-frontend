import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Landing from './pages/landing/landing';
import Contact from './pages/landing/contact';
import About from './pages/landing/about';
import Main from './pages/main/main';
import Home from './pages/main/home';
import WhiteList from './pages/main/whiteList';
import MainAbout from './pages/main/mainAbout';
import Prizes from './pages/main/prizes';
import Game from './pages/main/game';
import Token from './pages/main/token/token';
import Document from './pages/main/document';
import Terms from './pages/main/terms';
import Privacy from './pages/main/privacy';
import Cookie from './pages/main/cookie';
import MainContact from './pages/main/mainCotact';
import ArcadianPrice from './pages/main/token/arcadianPrice';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/home" element={<Main sitePage={<Home />} footerState={1} navState={1} navSelect={"home"} homeMultiState={1} /> } /> 
        <Route path="/whiteList" element={<Main sitePage={<WhiteList />} navState={1} menuSelect={"whiteList"}/>} />
        <Route path="/main/about" element={<Main sitePage={<MainAbout />} navState={1} navSelect={"about"} />} />
        <Route path="/prizes" element={<Main sitePage={<Prizes />} navState={1} menuSelect={"prizes"} footerState={1} />} /> 
        <Route path="/games" element={<Main sitePage={<Game />} navState={1} menuSelect={"games"} footerState={1} />} /> 
        <Route path="/token" element={<Main sitePage={<Token />} navState={1} menuSelect={"token"} footerState={1} tokenAboutState={1} />} /> 
        <Route path="/documentation" element={<Main sitePage={<Document />} navSelect={"documentation"} menuSelect={"token"} footerState={1} />} /> 
        <Route path="/terms_conditions" element={<Main sitePage={<Terms />} footerState={1}/>} />
        <Route path="/privacy_policy" element={<Main sitePage={<Privacy />} footerState={1}/>} />
        <Route path="/cookie_use" element={<Main sitePage={<Cookie />} footerState={1}/>} />
        <Route path="/main/contact" element={<Main sitePage={<MainContact />} navSelect={"contact"} footerState={1}/>} />
        <Route path="/acadian_price_monitor" element={<Main sitePage={<ArcadianPrice />} navState={1} footerState={1} menuState={1} />}  />
        <Route path="/support" element={<Main  supportState={1}/>}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
