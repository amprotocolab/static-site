import {useContext} from 'react';
import {BiChevronUp,BiChevronDown} from 'react-icons/bi';
import {WhyUsContext} from '../../../../context/whyus.context';

const SliderIcon = () => {

    const {isFirstSliderOpen,setIsFirstSliderOpen} = useContext(WhyUsContext);
    const {isSecondSliderOpen,setIsSecondSliderOpen} = useContext(WhyUsContext);
    const {isThirdSliderOpen,setIsThirdSliderOpen} = useContext(WhyUsContext);

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

    return ( 
        <div className = 'slider-icon' onClick = {toggleIsFirstSliderOpen}>
        {
            isFirstSliderOpen ? < BiChevronDown /> : < BiChevronUp />
        }
        {
            isSecondSliderOpen ? < BiChevronDown /> : < BiChevronUp />
        }
        {
            isThirdSliderOpen ? < BiChevronDown /> : < BiChevronUp />
        }

        </div>
    )
}
export default SliderIcon;