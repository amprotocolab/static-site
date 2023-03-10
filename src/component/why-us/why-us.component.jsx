import WhyUsText from "./why-us-textList/whyUsText.component";
import "./why-us.styles.scss"
import whyus from "F:/AMProtocol/project/my-app/src/brand/assets/img/why-us.png";
import { useContext } from "react";
import { WhyUsContext } from "../../context/whyus.context";

const WhyUs = () => {


    const {isFirstSliderOpen , setIsFirstSliderOpen} = useContext(WhyUsContext);
    const {isSecondSliderOpen , setIsSecondSliderOpen} = useContext(WhyUsContext);
    const {isThirdSliderOpen , setIsThirdSliderOpen} = useContext(WhyUsContext);

    const toggleIsFirstSliderOpen = () => {
        setIsFirstSliderOpen(!isFirstSliderOpen); 
        setIsSecondSliderOpen(false);
        setIsThirdSliderOpen(false);
    }
    const toggleIsSecondSliderOpen = () => {
        setIsFirstSliderOpen(false); 
        setIsSecondSliderOpen(!isSecondSliderOpen);
        setIsThirdSliderOpen(false);
    }
    const toggleIsThirdSliderOpen = () => {
        setIsFirstSliderOpen(false);
        setIsSecondSliderOpen(false);
        setIsThirdSliderOpen(!isThirdSliderOpen);
    }

return(
    <>
    <section id="why-us" className="why-us section-bg">
        <div className="container-fluid" data-aos="fade-up">            
            <div className="row-container">                
                <div className="why-us-text">
                    <div className="content">
                        <h3>Eum ipsam laborum deleniti <strong>velit pariatur architecto aut nihil</strong></h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                        </p>
                    </div>
                {/* <div className="accordion-list"> */}
                <div>
                    <ul className="whyUsTextBlock"> 
                        <WhyUsText count = "01" onClick={toggleIsFirstSliderOpen}
                         textOutside="  Non consectetur a erat nam at lectus urna duis?" 
                         textInside=" Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non." />

                        <WhyUsText count = "02" onClick={toggleIsSecondSliderOpen}
                         textOutside ="  Feugiat scelerisque varius morbi enim nunc ?"
                         textInside=" Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui." />

                        <WhyUsText count = "03" onClick={toggleIsThirdSliderOpen}
                         textOutside="  Dolor sit amet consectetur adipiscing elit? " 
                         textInside="Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis" />
                    </ul>
                 </div>
                </div>
                <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img"  >
                        <img src = {whyus} className="why-us-img" alt = "WHY_US" />
                </div>                
            </div>
        </div>
    </section>
    </>
);
}
export default WhyUs;