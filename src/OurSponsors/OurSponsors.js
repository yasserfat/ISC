function OurSponsors(props) {
    const Sponsors = props.Sponsors;
    return (
        <section class="sponsors_sec row" id="sponsors">
            <div class="sponsors_textwrapper col-xs-12">
                <h2 class="textwrapper_header sponsors_header">
                    <a href="#" class="textwrapper_header_link">
                        {props.Title}
                    </a>
                </h2>

            </div>
            <div class="sponsors_wrapper col-xs-12 col-md-12 row">
                <>
                    {Sponsors.map(({ src, alt }) => (
                        <div  class="sponsor techno col-xs-12 col-md-4 ">
                            <img src={src} alt={alt} />
                        </div>
                    ))}
                </>


            </div>
        </section>
    )

}

export default OurSponsors;