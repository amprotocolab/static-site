import "./container.styles.scss";
import hero from "F:/AMProtocol/project/my-app/src/brand/assets/img/hero.png";
import GetStartedButton from "../get-started-button/getStartedbutton";

const Container = () => {
return(
    <div className="contain">
        <div class="col-12 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
            <div>
                <h1>Building Cutting Edge SaaS Solutions</h1>
                <h2>We are team of talented technology enthusiasts helping business with digital automation</h2>
                <div class="d-flex justify-content-center justify-content-lg-start">
                            < GetStartedButton buttonType = "inverted" href="#about" />
                            <div>
                                <img href="https://www.youtube.com/watch?v=jDDaplaOz7Q" src="https://img.icons8.com/ios/50/null/play--v1.png"/>
                                <a  class="glightbox btn-watch-video"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
                            </div>
                        </div>
                <div>
                    

                </div>
                
            </div>
        </div>
        <div class="col-lg-12 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
            < img src ={hero} class = "img-hero animate" id = "hero" alt = ""/>
        </div>
    </div>
);
}
export default Container;