
function RDiscPicSec(Props) {




  return (

    <section id="About" class="abboutus_sec row" >
      <div className={Props.order}>
        <img src={Props.src} alt={Props.alt} />
      </div>
      <div class="aboutus_textwrapper  col-md-6">
        <h2 class="textwrapper_header">
          <h2 class="textwrapper_header_link">

            {Props.title}
          </h2>
        </h2>
        <p class="textwrapper_text" dangerouslySetInnerHTML={{ __html: Props.prg }}>

        </p>
      </div>
    </section>



  )
}

export default RDiscPicSec;