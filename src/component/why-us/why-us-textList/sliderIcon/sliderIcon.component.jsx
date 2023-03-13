import {useContext} from 'react';
import {BiChevronUp,BiChevronDown} from 'react-icons/bi';
import {WhyUsContext} from '../../../../context/whyus.context';

const SliderIcon = () => {

    const {isFirstSliderOpen,setIsFirstSliderOpen} = useContext(WhyUsContext);
    const {isSecondSliderOpen,setIsSecondSliderOpen} = useContext(WhyUsContext);
    const {isThirdSliderOpen,setIsThirdSliderOpen} = useContext(WhyUsContext);

    

    return ( 
        <div className = 'slider-icon'>
        {
            isFirstSliderOpen ? < BiChevronDown /> : < BiChevronUp />
        }
        {/* {
            isSecondSliderOpen ? < BiChevronDown /> : < BiChevronUp />
        }
        {
            isThirdSliderOpen ? < BiChevronDown /> : < BiChevronUp />
        } */}

        </div>
    )
}
export default SliderIcon;