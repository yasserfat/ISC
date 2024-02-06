import logoGlow from '../Assets/logoGlow.gif';
function Agenda(props) {
    let Entries1 = props.Entries1;
    let Entries2 = props.Entries2;
    let Entries3 = props.Entries3;
    let Entries4 = props.Entries4


    return (
        <div class="RoadMap" id="roadmap">
            <h2 class="textwrapper_header sponsors_header">
                <a href="#" class="textwrapper_header_link">
                    Agenda
                </a>
            </h2>
            <div class="Rcontainer col-12">
                <div class="Day1">
                    <img src={logoGlow} id="logoanim2" />
                    {Entries1.map(({ title, Class, bigTitle, bigTitleClass }) => (
                        <>

                            <div class="entry">
                                <div>
                                    <div class="indicator">
                                        <span></span>
                                    </div>
                                    <p class="content">
                                        <span className={Class}>{title}</span>
                                    </p>

                                    <div className={bigTitleClass}>{bigTitle} </div>
                                </div>

                            </div>
                        </>

                    ))}

                </div>
                <div class="Day2">
                    <img src={logoGlow} id="logoanim" />
                    {Entries2.map(({ title, Class, bigTitle, bigTitleClass }) => (
                        <>

                            <div class="entry">
                                <div>
                                    <div class="indicator">
                                        <span></span>
                                    </div>
                                    <p class="content">
                                        <span className={Class}>{title}</span>
                                    </p>

                                    <div className={bigTitleClass}>{bigTitle} </div>
                                </div>

                            </div>
                        </>

                    ))}
                </div>
                <div class="Day1">
                    <img src={logoGlow} id="logoanim2" />
                    {Entries3.map(({ title, Class, bigTitle, bigTitleClass }) => (
                        <>

                            <div class="entry">
                                <div>
                                    <div class="indicator">
                                        <span></span>
                                    </div>
                                    <p class="content">
                                        <span className={Class}>{title}</span>
                                    </p>

                                    <div className={bigTitleClass}>{bigTitle} </div>
                                </div>

                            </div>
                        </>

                    ))}

                </div>
                <div class="Day2">
                    <img src={logoGlow} id="logoanim" />
                    {Entries4.map(({ title, Class, bigTitle, bigTitleClass }) => (
                        <>

                            <div class="entry">
                                <div>
                                    <div class="indicator">
                                        <span></span>
                                    </div>
                                    <p class="content">
                                        <span className={Class}>{title}</span>
                                    </p>

                                    <div className={bigTitleClass}>{bigTitle} </div>
                                </div>

                            </div>
                        </>

                    ))}
                </div>

            </div>

        </div>
    )

}

export default Agenda;