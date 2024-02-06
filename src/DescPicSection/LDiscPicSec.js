
function LDiscPicSec(Props) {




    return (

        <section class="aboutwed_sec row">
            <div class="aboutus_textwrapper col-xs-12 col-md-6">
                <h2 class="textwrapper_header">
                    <a href="#" class="textwrapper_header_link">
                        {Props.title}
                    </a>
                </h2>
                <p class="textwrapper_text">
                    {Props.prg}
                </p>
            </div>
            <div class="aboutwed_textwrapped col-md-6 col-xs-12">
                <img src={Props.src} alt={Props.alt} />
            </div>
        </section>



    )
}

export default LDiscPicSec;