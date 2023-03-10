import GetStartedButton from "../get-started-button/getStartedbutton";
import InfoBox from "./InfoBox/infoBox.component";
import "./contact.styles.scss";
import {GoLocation} from "react-icons/go";
import {AiOutlineMail} from "react-icons/ai";
import {BsPhone} from "react-icons/bs";


const Contact = () =>{
    return(
        <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row" id = "detail">

                        <div className="aboutUs col-lg-5 d-flex align-items-stretch">
                            <div className="info">

                                <InfoBox title ="Location :" icon = {<GoLocation /> }
                                    info = "A108 Adam Street, New York, NY 535022"/>

                                <InfoBox title ="Email :" icon = {<AiOutlineMail />} info = "info@example.com"/>

                                <InfoBox title ="Call :" icon = {<BsPhone />} info = "+1 5589 55488 555"/>
                                

                            

                                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                                     frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe> */}
                            </div>

                        </div>

                        <div className="aboutUser col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="yourInfo">
                                    <div className="form-group col-md-6">
                                        <label for="name">Your Name</label>
                                        <input type="text" name="name" className="form-control" id="name" required />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="name">Your Email</label>
                                        <input type="email" className="form-control" name="email" id="email" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="name">Subject</label>
                                    <input type="text" className="form-control" name="subject" id="subject" required />
                                </div>
                                <div className="form-group">
                                    <label for="name">Message</label>
                                    <textarea className="form-control" name="message" rows="10" required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                {/* <div className="text-center"><button type="submit">Send Message</button></div> */}
                                <div className="text-center"><GetStartedButton buttonType="inverted" altText="Send Message" /></div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>
    )
}
export default Contact;