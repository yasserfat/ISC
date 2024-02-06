// import WedLogo from '../Assets/LogoWed.png';
import { IxWdata } from '../data'
import Header from '../Header/Header';
import Counter from '../CountDown/Counter';
import DiscPicSec from '../DescPicSection/RDiscPicSec';
import OurSponsors from '../OurSponsors/OurSponsors';
import Agenda from '../Agenda/Agenda';
import Carousel from '../Carousel/Carousel';
import Footer from '../Footer/Footer'


function WEDxINETECH() {


  return (

    <div className='wrapppper'>
      <style>
        {
          `.textwrapper_header_link,.testim h4,.counter h4,h2 {
          color:rgb(25, 98, 115) !important;
        }
        #countdown span {
          color:rgb(167, 191, 115) !important;
        }
        .textwrapper_header::before{
          background-color:rgb(167, 191, 115) !important;
        }
        .indicator{
          background-color:rgb(167, 191, 115) !important;

        }
        .arrows span {
          color:rgb(25, 98, 115) !important;

        }
        .testim .dots .dot {
          border: 1px solid rgb(25, 98, 115);
        }
        .testim .dots .dot.active,
        .testim .dots .dot:hover {
          background: rgb(25, 98, 115);
          border-color: rgb(25, 98, 115);
        }
        .IxWheader-sec button {
          background:rgb(25, 98, 115);
        }
        #btn-l {
          color:rgb(25, 98, 115) !important;
        }
        footer {
          background: linear-gradient(19deg, rgba(27,83,98,1) 7%, rgba(165,191,113,1) 17%, rgba(5,7,32,1) 51%) !important;
          ;
        }
        .copyright{
          background:#050720 !important;
        }
        .RoadMap {
          margin-bottom:20px;
        }
        `
        }
      </style>
      <Header ClassName={IxWdata.Header.ClassName} class={IxWdata.Header.Logo.class} src={IxWdata.Header.Logo.src} alt={IxWdata.Header.Logo.alt} BTitle={IxWdata.Header.BTitle} Slogan={IxWdata.Header.Slogan} Button={IxWdata.Header.button} />
      {/* <Counter /> */}
      <div class="shiftTop">
        <DiscPicSec src={IxWdata.AboutUsSec.Img.src} alt={IxWdata.AboutUsSec.Img.alt} order={IxWdata.AboutUsSec.Img.order} title={IxWdata.AboutUsSec.Title} prg={IxWdata.AboutUsSec.paragraph} id={IxWdata.AboutUsSec.id} />
        {/* <DiscPicSec src={IxWdata.AboutIxW.Img.src} alt={IxWdata.AboutIxW.Img.alt} order={IxWdata.AboutIxW.Img.order} title={IxWdata.AboutIxW.Title} prg={IxWdata.AboutIxW.paragraph} id={IxWdata.AboutIxW.id} /> */}
        {/* <OurSponsors Title={IxWdata.OurSponsors.Title} Sponsors={IxWdata.OurSponsors.Sponsors} />
      <OurSponsors Title={IxWdata.OurPartners.Title} Sponsors={IxWdata.OurPartners.Partners} /> */}
        {/* <Agenda Title={IxWdata.Agenda.Title} Entries1={IxWdata.Agenda.Day1.entries} Entries2={IxWdata.Agenda.Day2.entries} Entries3={IxWdata.Agenda.Day3.entries} Entries4={IxWdata.Agenda.Day4.entries} /> */}
        {/* <Carousel Testimonials={IxWdata.Testimonials} /> */}
      </div>
    </div>
  );
}



export default WEDxINETECH;