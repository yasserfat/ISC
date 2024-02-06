// //////////////// WED DATA /////////////////////////////
import WedLogo from './Assets/inetech x wed-03.png'
import Sec1Pic from './Assets/wed x inetech.png'
import logo_techno from './Assets/logo_techno.png'
import Chaima from './Assets/IMG_0027.JPG'
import Mounia from './Assets/Capture.PNG'
import AkramLouifi from './Assets/Akram Louifi.jpg'
import Ghano from './Assets/Ghano.jfif'
import INETECHLogo from './Assets/inetech logo-02.png'
import IxWLogo from './Assets/inetech x wed-03 (1).png'
import ISCLOGO from './Assets/isc-logo ai-01.png'
import WEDxINETECH from './Assets/bubbles ^-^ (1).png'
import WED from './Assets/wed.png'
import INETECH from './Assets/inetech.png'




const Wdata = {

    Header: {

        Logo: {
            class: "WLogo",
            src: WedLogo,
            alt: "wedLogo"
        },
        ClassName: 'header-sec',
        Navs: [
            {
                href: "/",
                content: "INETECHxWED"
            },
            {
                href: "/wed",
                content: "About WED"
            },
            {
                href: "/inetech",
                content: "About INETECH"
            },
            // {
            //     href: "#",
            //     content: "Agenda"
            // }, {
            //     href: "#",
            //     content: "Testemonials"
            // }

        ],
        BTitle: "World engineering Day",
        Slogan: '"Connecting the World to Algeria and Algeria to the world"',
        button: {
            href: "#register",
            content: "Get Your Ticket !"
        }

    },

    AboutUsSec: {
        Title: "About WED",
        id: "aboutus",
        Img: {
            src: WED,
            alt: "Grup Picture",
            order: "aboutus_teampic col-xs-12 col-md-6 order-first"
        },
        paragraph: "The World Engineering Day for Sustainable Development (WED) is an official International day proclaimed in 2019 by the United Nations Education, Scientific and Cultural Organization (UNESCO). This was based on a proposal from the World Federation of Engineering Organizations (WFEO). Since 2021, when Inelectronics Student Club was the first to mark this day in Algeria, the ISC community and Algeria have celebrated this day every year, always with one goal which is to celebrate engineering and the contribution of the world’s engineers for a better, sustainable world. Within the framework of WED, the Inelectronics Student Club is planning a series of conferences this year to discuss various Engineering topics. In addition to several workshops covering various engineering skills and basics as an introduction for everyone interested in the engineering field. This workshops are aimed mostly to non-university students with no prior knowledge of the engineering field."
    },
    OurSponsors: {
        Title: "Our Sponsors",
        Sponsors: [
            {
                src: logo_techno,
                alt: "Techno"
            },
            {
                src: logo_techno,
                alt: "Techno"
            },
            {
                src: logo_techno,
                alt: "Techno"
            },
            {
                src: logo_techno,
                alt: "Techno"
            }
        ],
    },
    OurPartners: {
        Title: "Our Partners",
        Partners: [
            {
                src: logo_techno,
                alt: "Techno"
            },
            {
                src: logo_techno,
                alt: "Techno"
            },
            {
                src: logo_techno,
                alt: "Techno"
            },
            {
                src: logo_techno,
                alt: "Techno"
            }
        ],
    },
    Agenda: {
        Title: "Agenda",
        Day1: {
            entries: [
                {
                    title: "Prothothon",
                    Class: "bigger",
                    bigTitle: "Day 01",
                    bigTitleClass: "time"
                },
                {
                    title: "Prothothon",
                    Class: "bigger",
                    bigTitle: "Day 01",
                    bigTitleClass: "none"
                },
                {
                    title: "Prothothon",
                    Class: "bigger",
                    bigTitle: "Day 01",
                    bigTitleClass: "none"
                }
            ]


        },
        Day2: {
            entries: [
                {
                    title: "Prothothon",
                    Class: "bigger",
                    bigTitle: "Day 02",
                    bigTitleClass: "time",
                },
                {
                    title: "Prothothon",
                    Class: "opacity",
                    bigTitle: "Day 02",
                    bigTitleClass: "none"
                },
                {
                    title: "Prothothon",
                    Class: "opacity",
                    bigTitle: "Day 02",
                    bigTitleClass: "none"
                }
            ]
        },
        Day3: {
            entries: [
                {
                    title: "Prothothon",
                    Class: "bigger",
                    bigTitle: "Day 03",
                    bigTitleClass: "time",
                },
                {
                    title: "Prothothon",
                    Class: "opacity",
                    bigTitle: "Day 03",
                    bigTitleClass: "none"
                },
                {
                    title: "Prothothon",
                    Class: "opacity",
                    bigTitle: "Day 03",
                    bigTitleClass: "none"
                }
            ]
        },
    },
    Testimonials: [
        {
            person: "Chaima Chalouche",
            Comment: "It was one of the most enriching experiences for me, the fact that students were presenting their projects and what they have been learning through these years to other professional engineers and interacting with them on a professional level. Thank you ISC Family for the amazing experience. Keep up the bright work !",
            Position: "(Co Event Manager 2021)",
            src: Chaima,
            alt: "Chaima Chalouche",
            index: 0,
        },
        {
            person: "Abdelghani Bekkouche ",
            Comment: "I had the utmost privilege and honor to be part of the organizing committees for the two last editions of World Engineering Day as moderator, and event manager, and I have to say that the experience I’ve lived with the greatest team a team lead can ever have had shaped the way I approach challenges in my life and taught me not to react to problems but to merge with them. It feels so great that we were the first organization in the country and the region to respond to the United Nations call to make the fourth of March of every year a day to celebrate engineers and engineering achievements in making the world a better place. ISC for once , ISC always!",
            Position: "(Vice President, WED Event Manager 2022)",
            src: Ghano,
            index: 1,
        },
        {
            person: "Abdelghani Bekkouche ",
            Comment: "As the president of ISC at that time, I had the chance to work with my team step by step preparing for the big event with much enthusiasm and positivity. I had the honor to meet great engineers with different backgrounds working in different big companies where they shared with us their experiences and insights.",
            Position: "(President 2021)",
            src: Mounia,
            index: 2,
        },
    ]



}

//://////////// INETECH DATA  //////////////////////////////////////


const Idata = {

    Header: {
        Logo: {
            class: "ILogo",
            src: INETECHLogo,
            alt: "INETECH Logo"
        },
        ClassName: 'Iheader-sec',

        BTitle: "INETECH",
        Slogan: '"Think, Prototype, Build"',
        button: {
            href: "#register",
            content: "Get Your Ticket !"
        }

    },
    AboutINETECH: {
        Title: "About INETECH",
        id: "aboutus",
        Img: {
            src: INETECH,
            alt: "Grup Picture",
            order: "aboutus_teampic col-xs-12 col-md-6 order-first"

        },
        paragraph: '"INETECH" is a National Hardware Hackathon, with the goal of reviving and embedding the spirit of innovation in the hearts of Algerian students, and also orienting them towards scientific research and master technologies for a better contribution to the country\'s development.INETECH is a three-day (72-hour) Non-Stop challenge. Starting from 9th to 12th March 2023.Participants in this marathon will be divided into groups, to solve a global challenge developing a project solution with different components that will be provided.A scientific club at the Institute of Electrical and Electronic engineering,IEEE ex INELEC, founded in 2005, dedicated to students and built by students.The club envisions building a bridge between university and industry, with the different events and workshops our community provides,At ISC we experience, develop and share!'
    },
    OurSponsors: {
        Title: "Our Sponsors",
        Sponsors: [
            {
                src: logo_techno,
                alt: "Techno"
            },
            {
                src: logo_techno,
                alt: "Techno"
            },
            {
                src: logo_techno,
                alt: "Techno"
            },
            {
                src: logo_techno,
                alt: "Techno"
            }
        ],
    },
    OurPartners: {
        Title: "Our Partners",
        Partners: [
            {
                src: logo_techno,
                alt: "Techno"
            },
            {
                src: logo_techno,
                alt: "Techno"
            },
            {
                src: logo_techno,
                alt: "Techno"
            },
            {
                src: logo_techno,
                alt: "Techno"
            }
        ],
    },
    Agenda: {
        Title: "Agenda",
        Day1: {
            entries: [
                {
                    title: "Prothothon",
                    Class: "bigger",
                    bigTitle: "Day 01",
                    bigTitleClass: "time"
                },
                {
                    title: "Prothothon",
                    Class: "bigger",
                    bigTitle: "Day 01",
                    bigTitleClass: "none"
                },
                {
                    title: "Prothothon",
                    Class: "bigger",
                    bigTitle: "Day 01",
                    bigTitleClass: "none"
                }
            ]


        },
        Day2: {
            entries: [
                {
                    title: "Prothothon",
                    Class: "bigger",
                    bigTitle: "Day 02",
                    bigTitleClass: "time",
                },
                {
                    title: "Prothothon",
                    Class: "opacity",
                    bigTitle: "Day 02",
                    bigTitleClass: "none"
                },
                {
                    title: "Prothothon",
                    Class: "opacity",
                    bigTitle: "Day 02",
                    bigTitleClass: "none"
                }
            ]
        },
        Day3: {
            entries: [
                {
                    title: "Prothothon",
                    Class: "bigger",
                    bigTitle: "Day 03",
                    bigTitleClass: "time",
                },
                {
                    title: "Prothothon",
                    Class: "opacity",
                    bigTitle: "Day 03",
                    bigTitleClass: "none"
                },
                {
                    title: "Prothothon",
                    Class: "opacity",
                    bigTitle: "Day 03",
                    bigTitleClass: "none"
                }
            ]
        },
    },
    Testimonials: [
        {
            person: "Akram Louifi",
            Comment: "Inetech is one of my most precious memories and greatest achievement as an Inelec student and an ISC member, it wasn't just an event, it was the first step for many youths toward the professional world and successful careers and innovative projects.Inetech was and will always be an inspiration for everyone who has an idea.",
            Position: "(Organizer , Inetech 1 & 2)",
            src: AkramLouifi,
            alt: "Akram Louifi",
            index: 0,
        },

    ]



}
//://////////// INETECHxWED DATA  //////////////////////////////////////


const IxWdata = {

    Header: {
        Logo: {
            class: "IxWLogo",
            src: IxWLogo,
            alt: "INETECHxWES Logo"
        },
        ISCLogo: {
            src: ISCLOGO,
            alt: "ISCLogo",
        },
        ClassName: 'IxWheader-sec',
        BTitle: "\"INETECH\" <br /> in the celeberation of <br /> \"World Engineering Day\"",
        Slogan: '"INETECH in the celeberation of World Engineering Day"',
        button: {
            href: "#register",
            content: "Get Your Ticket !"
        }

    },
    AboutIxW: {
        Title: "About INETECH in the celeberation of World Engineering Day",
        id: "aboutus",
        Img: {
            src: WEDxINETECH,
            alt: "Grup Picture",
            order: "aboutus_teampic col-xs-12 col-md-6 order-last"

        },
        paragraph: '"INETECH" in celebration of "World Engineering Day" is a national event that was developed by merging the World Engineering Day-Algeria Event with the National Hardware Hackathon "INETECH".<br />  It is a four-day event that will take place from 9th to 12th March 2023, in Boumerdes. A series of conferences and workshops will be presented in conjunction with the INETECH hackathon process, where our audience will learn about the engineering sector and hackathon participants will build a variety of key skills along the way.'
    },
    AboutUsSec: {
        Title: "About Us",
        id: "aboutus",
        Img: {
            src: Sec1Pic,
            alt: "Grup Picture",
            order: "aboutus_teampic col-xs-12 col-md-6 order-first"

        },
        paragraph: "A scientific club at the Institute of Electrical and Electronic engineering,IEEE ex INELEC, founded in 2005, dedicated to students and built by students.The club envisions building a bridge between university and industry, with the different events and workshops our community provides,At ISC we experience, develop and share!"
    },
    OurSponsors: {
        Title: "Our Sponsors",
        Sponsors: [
            {
                src: logo_techno,
                alt: "Techno"
            },
            {
                src: logo_techno,
                alt: "Techno"
            },
            {
                src: logo_techno,
                alt: "Techno"
            },
            {
                src: logo_techno,
                alt: "Techno"
            }
        ],
    },
    OurPartners: {
        Title: "Our Partners",
        Partners: [
            {
                src: logo_techno,
                alt: "Techno"
            },
            {
                src: logo_techno,
                alt: "Techno"
            },
            {
                src: logo_techno,
                alt: "Techno"
            },
            {
                src: logo_techno,
                alt: "Techno"
            }
        ],
    },
    Agenda: {
        Title: "Agenda",
        Day1: {
            entries: [
                {
                    title: "Opening Ceremony",
                    Class: "bigger",
                    bigTitle: "Day 01",
                    bigTitleClass: "time"
                },
                {
                    title: "Conference about Engineering",
                    Class: "opacity",
                    bigTitle: "Day 01",
                    bigTitleClass: "none"
                },
                {
                    title: "Hackathon Lunching, Juries Announcement & Teams Announcement",
                    Class: "opacity",
                    bigTitle: "Day 01",
                    bigTitleClass: "none"
                }
            ]


        },
        Day2: {
            entries: [
                {
                    title: "Hackathon in progress",
                    Class: "bigger",
                    bigTitle: "Day 02",
                    bigTitleClass: "time",
                },
                {
                    title: "Workshops",
                    Class: "opacity",
                    bigTitle: "Day 02",
                    bigTitleClass: "none"
                },
                {
                    title: "Prothothon",
                    Class: "opacity",
                    bigTitle: "Day 02",
                    bigTitleClass: "none"
                }
            ]
        },
        Day3: {
            entries: [
                {
                    title: "Hackathon in progress",
                    Class: "bigger",
                    bigTitle: "Day 03",
                    bigTitleClass: "time",
                },
                {
                    title: "Workshops",
                    Class: "opacity",
                    bigTitle: "Day 03",
                    bigTitleClass: "none"
                },
                {
                    title: "Public Speaking Training",
                    Class: "opacity",
                    bigTitle: "Day 03",
                    bigTitleClass: "none"
                }
            ]
        },
        Day4: {
            entries: [
                {
                    title: "Judging phase (Teams pitching X Juries grading)",
                    Class: "bigger",
                    bigTitle: "Day 04",
                    bigTitleClass: "time",
                },
                {
                    title: "Projects Exhibition",
                    Class: "opacity",
                    bigTitle: "Day 03",
                    bigTitleClass: "none"
                },
                {
                    title: "Closing Ceremony, Winners Announcement & Acknowledgement",
                    Class: "opacity",
                    bigTitle: "Day 03",
                    bigTitleClass: "none"
                }
            ]
        },
    },
    Testimonials: [
        {
            person: "Chaima Chalouche",
            Comment: "It was one of the most enriching experiences for me, the fact that students were presenting their projects and what they have been learning through these years to other professional engineers and interacting with them on a professional level. Thank you ISC Family for the amazing experience. Keep up the bright work !",
            Position: "(Co Event Manager 2021)",
            src: Chaima,
            alt: "Chaima Chalouche",
            index: 0,
        },
        {
            person: "Chaima Chalouche2 ",
            Comment: "It was one of the most enriching experiences for me, the fact that students were presenting their projects and what they have been learning through these years to other professional engineers and interacting with them on a professional level. Thank you ISC Family for the amazing experience. Keep up the bright work !",
            Position: "(Co Event Manager 2021)",
            src: Chaima,
            index: 1,
        }
    ]



}

export default Wdata;
export { Idata, IxWdata }

