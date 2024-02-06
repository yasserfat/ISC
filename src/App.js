// import WedLogo from '../Assets/LogoWed.png';
import './CSS/style.css';
import {IxWdata}from './data'
import Wdata from './data'

import NavBar from './NavBar/NavBar';
// import Header from './Header/Header';
// import Counter from './CountDown/Counter';
// import DiscPicSec from './DescPicSection/RDiscPicSec';
// import OurSponsors from './OurSponsors/OurSponsors';
// import Agenda from './Agenda/Agenda';
// import Carousel from './Carousel/Carousel';
import WEDxINETECH from './Pages/WEDxINETECH';
import Wed from './Pages/WED';
import INETECH from './Pages/INETECH';
import Footer from'./Footer/Footer'
import {Routes, Route, Router} from'react-router-dom'




function App() {

  return (
    <div className="App">
      <>
      <NavBar Logo={IxWdata.Header.ISCLogo} Navs={Wdata.Header.Navs}/>
      <Routes>
          <Route path="/wed" element={<WEDxINETECH/>}/>
        <Route path="/" element={<Wed/>}/>
        <Route path="/inetech" element={<INETECH/>}/>
      </Routes>
      {/* <Header BTitle={Wdata.Header.BTitle} Slogan={Wdata.Header.Slogan} Button={Wdata.Header.button}/>       
      <Counter/>
      <DiscPicSec src={Wdata.AboutUsSec.Img.src} alt={Wdata.AboutUsSec.Img.alt} order={Wdata.AboutUsSec.Img.order} title={Wdata.AboutUsSec.Title} prg={Wdata.AboutUsSec.paragraph} id={Wdata.AboutUsSec.id} />
      <OurSponsors Title={Wdata.OurSponsors.Title} Sponsors={Wdata.OurSponsors.Sponsors} />
      <Agenda Title={Wdata.Agenda.Title} Entries1={Wdata.Agenda.Day1.entries} Entries2={Wdata.Agenda.Day2.entries} Entries3={Wdata.Agenda.Day3.entries} />
      <Carousel Testimonials={Wdata.Testimonials}/> */}
      <Footer/>
      </>
    </div>
    
  );
}



export default App;