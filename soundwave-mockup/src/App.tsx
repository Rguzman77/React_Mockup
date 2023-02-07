import "./App.css";
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import {Feelthemusic, Discover, Footer, Navbar, Join} from "./components/Customs";
import Layout from "./components/Layout";

function App() {
  return (
  <> 
  <Navbar/>
        <Routes>
        <Route element={<Layout/>}/>
        <Route path="/soundwave" element={<Feelthemusic/>}/>
        <Route path="/discover" element={<Discover/>}/>
        <Route path="/join" element={<Join/>}/>
      </Routes>
    <Footer/>
  </>
  );
}

export default App;
