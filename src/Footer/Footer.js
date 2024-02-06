function Footer(props) {
    return (
        <div>
            <footer className="footer text-center" id="contact">
                <div className="container">
                    <div className="row">
                        {/* <!-- Footer Location--> */}
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Contact</h4>
                            <p className="lead mb-0">
                                <span className="fa fa-envelope fa-lg"> </span> inelectronics.club1@gmail.com
                                <br />

                            </p>
                        </div>
                        {/* <!-- Footer Social Icons--> */}
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 id="fooh4" className="text-uppercase mb-4">Around the Web</h4>
                            <a className="btn btn-outline-light btn-social mx-1" href="https://web.facebook.com/InelectronicsStudentClub"
                                target="_blank"><i className="fa fa-fw fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="https://twitter.com/InelectronicsC" target="_blank"><i
                                className="fa fa-fw fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social mx-1"
                                href="https://dz.linkedin.com/company/inelectronics-student-club" target="_blank"><i
                                    className="fa fa-fw fa-linkedin"></i></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/inelectronics.student.club/"
                                target="_blank"><i className="fa fa-fw fa-instagram"></i></a>
                        </div>
                        {/* <!-- Footer About Text--> */}
                        <div className="col-lg-4">
                            <h4 id="fooh42" className="text-uppercase mb-4">Inelectronics</h4>
                            <p id="foop" className="lead mb-0">
                                Experience,develop and share!
                            </p>
                        </div>
                    </div>

                </div>
                <p className="smalP">Copyright © Inelectronics student club 2024</p>
            </footer>
           
        </div>
    )

}

export default Footer;