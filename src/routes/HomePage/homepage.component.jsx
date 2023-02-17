
import React from "react";
import Container from "../container/container.component";
import Client from "../clients/clients.component";
import WhyUs from "../why-us/why-us.component";
import AboutUs from "../aboutUs/about.component";

const HomePage =() =>{
    return(
        <>
            <Container />
            <Client />
            <AboutUs />
            <WhyUs />
        </>
    )
}
export default HomePage;