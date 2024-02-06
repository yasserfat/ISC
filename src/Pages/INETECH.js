// import WedLogo from '../Assets/LogoWed.png';
import { Idata } from '../data'
import Header from '../Header/Header';
import Counter from '../CountDown/Counter';
import DiscPicSec from '../DescPicSection/RDiscPicSec';
import OurSponsors from '../OurSponsors/OurSponsors';
import Agenda from '../Agenda/Agenda';
import Carousel from '../Carousel/Carousel';
import Footer from '../Footer/Footer'


function INETECH() {


  return (
    <div className='wrapppper'>
      <style>
        {
          `.textwrapper_header_link,.testim h4,.counter h4,h2 {
          color:rgb(242, 192, 41) !important;
        }
        #countdown span {
          color:rgb(242, 208, 34) !important;
        }
        .textwrapper_header::before{
          background-color:rgb(242, 208, 34) !important;
        }
        .indicator{
          background-color:rgb(242, 208, 34) !important;

        }
        .arrows span {
          color:rgb(242, 192, 41) !important;

        }
        .testim .dots .dot {
          border: 1px solid rgb(242, 192, 41);
        }
        .testim .dots .dot.active,
        .testim .dots .dot:hover {
          background: rgb(242, 192, 41);
          border-color: rgb(242, 192, 41);
        }
        .Iheader-sec button {
          background:rgb(242, 208, 34) !important;
        }
        #btn-l {
          color:rgb(242, 192, 41) !important;
        }
        footer {
          background:linear-gradient(45deg, rgba(242, 234, 126) 0%, rgba(242, 208, 34) 25%, rgb(242, 192, 41)40%, rgb(255, 240, 48) 100%)!important;
        }
        .copyright{
          background:rgb(242, 192, 41) !important;
        }
        `
        }
      </style>
      <Header ClassName={Idata.Header.ClassName} class={Idata.Header.Logo.class} src={Idata.Header.Logo.src} alt={Idata.Header.Logo.alt} BTitle={Idata.Header.BTitle} Slogan={Idata.Header.Slogan} Button={Idata.Header.button} />
      <Counter />
      <div class="shiftTop">

        <DiscPicSec src={Idata.AboutINETECH.Img.src} alt={Idata.AboutINETECH.Img.alt} order={Idata.AboutINETECH.Img.order} title={Idata.AboutINETECH.Title} prg={Idata.AboutINETECH.paragraph} id={Idata.AboutINETECH.id} />
        {/* <OurSponsors Title={Idata.OurSponsors.Title} Sponsors={Idata.OurSponsors.Sponsors} /> */}
        {/* <Agenda Title={Idata.Agenda.Title} Entries1={Idata.Agenda.Day1.entries} Entries2={Idata.Agenda.Day2.entries} Entries3={Idata.Agenda.Day3.entries} /> */}
        <Carousel Testimonials={Idata.Testimonials} />
      </div>
    </div>

  );
}



export default INETECH;