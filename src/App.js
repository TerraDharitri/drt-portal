import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import NotFound from "./components/ui/NotFound";

// Import your components
import Started from "./components/pages/Individuals/Started";
import Rewa from "./components/pages/Individuals/Rewa";
import Chain from "./components/pages/Individuals/Chain";
import Staking from "./components/pages/Individuals/Staking";
import Sustainability from "./components/pages/Individuals/Sustainability";

import BuildersHub from "./components/pages/Developers/Builders";
import Dapp from "./components/pages/Developers/Dapp";
import Tutorials from "./components/pages/Developers/Tutorials";
import Tools from "./components/pages/Developers/Tools";
import Releases from "./components/pages/Developers/Releases";
import Roadmap from "./components/pages/Developers/Roadmap";

import Resources from "./components/pages/Farmer/Resources";
import Programs from "./components/pages/Farmer/Programs";
import Training from "./components/pages/Farmer/Training";
import Community from "./components/pages/Farmer/Community";

import Sustainabilitys from "./components/pages/Motherearth/Sustainabilitys";
import Initiatives from "./components/pages/Motherearth/Initiatives";
import Impact from "./components/pages/Motherearth/Impact";
import Project from "./components/pages/Motherearth/Project";

import Wallet from "./components/pages/products/Wallet";
import DExchange from "./components/pages/products/DExchange";
import Bridge from "./components/pages/products/Bridge";
import Explorer from "./components/pages/products/Explorer";

import Discover from "./components/pages/Ecosystem/Discover";
import Grants from "./components/pages/Ecosystem/Grants";
import Projects from "./components/pages/Ecosystem/Projects";
import Partners from "./components/pages/Ecosystem/Partners";
import Validators from "./components/pages/Ecosystem/Validators";
import Service from "./components/pages/Ecosystem/Service";

import Events from "./components/pages/Community/Events";
import Governance from "./components/pages/Community/Governance";
import Faq from "./components/pages/Community/Faq";
// import Blog from "./components/pages/Community/Blog";
// import Program from "./components/pages/Community/Program";

import Transformation from "./components/pages/About/Transformation";
// import Media from "./components/pages/About/Media";
import Careers from "./components/pages/About/Careers";
import Whitepaper from './components/pages/About/WhitePaper';


const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drt-website" element={<Home />} />
        <Route path="/Individuals/Started" element={<Started />} />
        <Route path="/Individuals/Rewa" element={<Rewa />} />
        <Route path="/Individuals/Chain" element={<Chain />} />
        <Route path="/Individuals/Staking" element={<Staking />} />
        <Route path="/Individuals/Sustainability" element={<Sustainability />} />

        <Route path="/Developers/BuildersHub" element={<BuildersHub />} />
        <Route path="/Developers/Dapp" element={<Dapp />} />
        <Route path="/Developers/Tutorials" element={<Tutorials />} />
        <Route path="/Developers/Tools" element={<Tools />} />
        <Route path="/Developers/Releases" element={<Releases />} />
        <Route path="/Developers/Roadmap" element={<Roadmap />} />

        <Route path="/Farmer/Resources" element={<Resources />} />
        <Route path="/Farmer/Programs" element={<Programs />} />
        <Route path="/Farmer/Training" element={<Training />} />
        <Route path="/Farmer/Community" element={<Community />} />

        <Route path="/Motherearth/Sustainabilitys" element={<Sustainabilitys />} />
        <Route path="/Motherearth/Initiatives" element={<Initiatives />} />
        <Route path="/Motherearth/Impact" element={<Impact />} />
        <Route path="/Motherearth/Project" element={<Project />} />

        <Route path="/products/Wallet" element={<Wallet />} />
        <Route path="/products/DExchange" element={<DExchange />} />
        <Route path="/products/Bridge" element={<Bridge />} />
        <Route path="/products/Explorer" element={<Explorer />} />

        <Route path="/ecosystem/Discover" element={<Discover />} />
        <Route path="/ecosystem/Grants" element={<Grants />} />
        <Route path="/ecosystem/Projects" element={<Projects />} />
        <Route path="/ecosystem/Partners" element={<Partners />} />
        <Route path="/ecosystem/Validators" element={<Validators />} />
        <Route path="/ecosystem/Service" element={<Service />} />

        <Route path="/community/Events" element={<Events />} />
        <Route path="/community/Governance" element={<Governance />} />
        <Route path="/community/Faq" element={<Faq />} />
        {/* <Route path="/community/Blog" element={<Blog />} />
        <Route path="/community/Program" element={<Program />} /> */}

        <Route path="/about/Transformation" element={<Transformation />} />
        {/* <Route path="/about/Media" element={<Media />} /> */}
        <Route path="/about/Careers" element={<Careers />} />
        <Route path="/about/whitepaper" element={<Whitepaper />} />

        {/* Fallback Not Found Page */}
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default App;
