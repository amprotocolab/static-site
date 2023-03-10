import { createContext, useState , useEffect } from "react";

export const WhyUsContext = createContext({
    isFirstSliderOpen: false,
    setIsFirstSliderOpen: () => {},
    
    isSecondSliderOpen: false,
    setIsSecondSliderOpen: () => {},
    
    isThirdSliderOpen: false,
    setIsThirdSliderOpen: () => {},
})

export const WhyUsProvider = ({children}) => {
    const [isFirstSliderOpen, setIsFirstSliderOpen] = useState(true);
    const [isSecondSliderOpen, setIsSecondSliderOpen] = useState(false);
    const [isThirdSliderOpen, setIsThirdSliderOpen] = useState(false);

const value={
    isFirstSliderOpen,
    setIsFirstSliderOpen,

    isSecondSliderOpen,
    setIsSecondSliderOpen,

    isThirdSliderOpen,
    setIsThirdSliderOpen,

};

    return(
        <WhyUsContext.Provider  value = {value}>{children}</WhyUsContext.Provider>
    );
}