import { createContext, useState , useEffect,useReducer } from "react";
import createAction from "../utils/reducer/reducer.utils";
import {BiChevronUp,BiChevronDown} from 'react-icons/bi';

export const WhyUsContext = createContext({
    isFirstSliderOpen: true,
    setIsFirstSliderOpen: () => {},
    
    isSecondSliderOpen: false,
    setIsSecondSliderOpen: () => {},
    
    isThirdSliderOpen: false,
    setIsThirdSliderOpen: () => {},
})

const SLIDER_ACTION = {
    SET_IS_FIRST_SLIDER_OPEN: 'SET_IS_FIRST_SLIDER_OPEN',
}

const INITIAL_STATE = {
    isFirstSliderOpen: true,
    isSecondSliderOpen: false,
    isThirdSliderOpen: false,
}
const SliderReducer = (state, action) => {
    const {type,payload} = action;

    switch (type) {

            case SLIDER_ACTION.SET_IS_FIRST_SLIDER_OPEN:
                return {
                    ...state,
                    isFirstSliderOpen: payload,
                }
                default:
                    throw new Error(`Unhandled type of ${type} Error`);
    }
}

export const WhyUsProvider = ({children}) => {
    
    // const [isFirstSliderOpen, setIsFirstSliderOpen] = useState(true);
    // const [isSecondSliderOpen, setIsSecondSliderOpen] = useState(false);
    // const [isThirdSliderOpen, setIsThirdSliderOpen] = useState(false);

const action = (isFirstSliderOpen) =>{
            isFirstSliderOpen ? < BiChevronDown /> : < BiChevronUp />        
}


const [state, dispatch] = useReducer(SliderReducer, INITIAL_STATE)
const {isFirstSliderOpen} = state;

const setIsFirstSliderOpen = (bool) => {
    dispatch(
        createAction(SLIDER_ACTION.SET_IS_FIRST_SLIDER_OPEN, bool)
        // { type: SLIDER_ACTION_TYPES.SET_IS_FIRST_SLIDER_OPEN , payload:bool }
    )
}

const value={
    isFirstSliderOpen,
    setIsFirstSliderOpen,

    // isSecondSliderOpen,
    // setIsSecondSliderOpen,

    // isThirdSliderOpen,
    // setIsThirdSliderOpen,

};

    return(
        <WhyUsContext.Provider  value = {value}>{children}</WhyUsContext.Provider>
    );
}