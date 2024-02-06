import LOGO from '../NavBar/LOGO';
import { useState } from 'react';
import React from 'react';

import logo from '../Assets/logoGlow.gif'
function Header(props) {
    const Navs = props.Navs;
    const [isActive, setIsActive] = useState(false);
    const handleClick = event => {
        setIsActive(current => !current);
    };

    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    React.useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })

        }

        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)

        }
    })



    console.log(props.ClassName,"props.ClassName}")
    return (
        <section id='Home' className={props.ClassName} >
            <div class="content">
                <div class="header">
                    <div class="header-text" align="center" >
                        <div class="brand-title">
                            <img className={props.class} src={logo} alt={props.alt} />
                        </div>
                        <h1 dangerouslySetInnerHTML={{ __html: "Inelectronic Scientific Club" }} />
                        <p>Experience develop share!</p>
                    </div>
                    <button class="button-34" role="button"> Contact Us</button>
                </div>
            </div>
        </section>




    )
}

export default Header;