// import WedLogo from '../Assets/LogoWed.png';
import Wdata from '../data'
import { IxWdata } from '../data';
import Header from '../Header/Header';
import Counter from '../CountDown/Counter';
import DiscPicSec from '../DescPicSection/RDiscPicSec';
import OurSponsors from '../OurSponsors/OurSponsors';
import Agenda from '../Agenda/Agenda';
import Carousel from '../Carousel/Carousel';
import Events from '../our events/Events';


function Wed() {


  return (
    <div className='wrapppper'>
      <Header ClassName={Wdata.Header.ClassName} class={Wdata.Header.Logo.class} src={Wdata.Header.Logo.src} alt={Wdata.Header.Logo.alt} BTitle={Wdata.Header.BTitle} Slogan={Wdata.Header.Slogan} Button={Wdata.Header.button} />
      <Counter />
      <div class="shiftTop">

        <DiscPicSec src={Wdata.AboutUsSec.Img.src} alt={Wdata.AboutUsSec.Img.alt} order={Wdata.AboutUsSec.Img.order} title={IxWdata.AboutUsSec.Title} prg={IxWdata.AboutUsSec.paragraph} id={Wdata.AboutUsSec.id} />
        {/* <OurSponsors Title={Wdata.OurSponsors.Title} Sponsors={Wdata.OurSponsors.Sponsors} /> */}
        {/* <Agenda Title={Wdata.Agenda.Title} Entries1={Wdata.Agenda.Day1.entries} Entries2={Wdata.Agenda.Day2.entries} Entries3={Wdata.Agenda.Day3.entries} /> */}
        {/* <Carousel Testimonials={Wdata.Testimonials} /> */}
      </div>
      <div className='shiftTop'>

        <Events />
      </div>

    </div>
  );
}



export default Wed;