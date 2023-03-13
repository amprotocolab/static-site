import {WhyUsBlock,Slider,Count,TextOutside,ChevronIcon} from "./whyUsText.styles";
import { useContext } from "react";
import { WhyUsContext } from "../../../context/whyus.context";
import SliderIcon from "./sliderIcon/sliderIcon.component";


const WhyUsText = ({count ,textInside, textOutside}) =>{

    const {isFirstSliderOpen,setIsFirstSliderOpen} = useContext(WhyUsContext);
    const {isSecondSliderOpen,setIsSecondSliderOpen} = useContext(WhyUsContext);
    const {isThirdSliderOpen,setIsThirdSliderOpen} = useContext(WhyUsContext);

    const toggleIsFirstSliderOpen = () => {
        setIsFirstSliderOpen();
        // setIsSecondSliderOpen(false);
        // setIsThirdSliderOpen(false);
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
        <WhyUsBlock>
            <Slider  >
                <TextOutside> 
                    <Count>
                        {count}
                    </Count>

                    {textOutside}
                </TextOutside>
                

                 <ChevronIcon>  
                    <SliderIcon onClick={toggleIsFirstSliderOpen}/>
                </ChevronIcon>

            </Slider>
            <>
                {
                    isFirstSliderOpen ? <p>{textInside}</p> : null
                } 

            </>
        </WhyUsBlock>
        </>              

    )
}
export default WhyUsText;