import {WhyUsBlock,Slider,Count,TextOutside,ChevronIcon} from "./whyUsText.styles";

import SliderIcon from "./sliderIcon/sliderIcon.component";


const WhyUsText = ({count ,textInside, textOutside,isFirstSliderOpen}) =>{


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
                
                <ChevronIcon> <SliderIcon /></ChevronIcon>

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