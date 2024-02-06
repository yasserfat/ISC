import LOGO from './LOGO';
import { useState } from 'react';
import React from 'react'

function NavBar(props) {
    const Navs = ["Home", "About", "Event X Workshop"]
    // const Navs = props.Navs;
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




    return (
        <nav class="navbar">
            <a href="#" class="toggle-button" onClick={handleClick}>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </a>
            <LOGO src={props.Logo.src} alt={props.Logo.alt} />

            <div className={isActive ? 'active navbar-links' : 'navbar-links'} >
                <ul id="navlist">
                    <>
                        {Navs.map((content, i) => (
                            <li key={i}><a href={`#${content}`}>{content}</a></li>
                        ))}
                    </>



                </ul>
            </div>
            {dimensions.width > 800 ? (
                <div id="btn-container">
                    <a  id="btn-l" className="btn-area btn-area2" >join us</a>
                </div>
            ) : (
                <div></div>
            )}
        </nav>

    )
}

export default NavBar;