import styled from "styled-components";
// .why-us .accordion-list li+li {
//   margin-top: 15px;
// }

export const WhyUsBlock = styled.li`
  padding: 20px;
  width: 100%;
  background: #fff;
  border-radius: 4px;
  display: block;
`
export const Count = styled.span `
  color: #47b2e4;
  font-weight: 600;
  font-size: 18px;
  padding-right: 10px;
  display: inline-flex;
`
export const TextOutside = styled.span `
  color: #000;
  font-weight: 600;
  font-size: 14px;
  padding-right: 10px;
`
export const ChevronIcon = styled.span `
    padding: 0px;
`
export const Slider = styled.a`
 // padding: 0%;
  display: inline-flex;
  position: relative;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  width: 100%;
  justify-content: space-between;

  &:hover{
    ${TextOutside}{
      color: #47b2e4; 
    }
     
  }
`


// .why-us .accordion-list i {
//   font-size: 24px;
//   position: absolute;
//   right: 0;
//   top: 0;
// }

// .why-us .accordion-list p {
//   margin-bottom: 0;
//   padding: 10px 0 0 0;
// }

// .why-us .accordion-list .icon-show {
//   display: none;
// }

// .why-us .accordion-list a.collapsed {
//   color: #343a40;
// }

// .why-us .accordion-list a.collapsed:hover {
//   color: #47b2e4;
// }

// .why-us .accordion-list a.collapsed .icon-show {
//   display: block;
// }

// .why-us .accordion-list a.collapsed .icon-close {
//   display: none;
// }

