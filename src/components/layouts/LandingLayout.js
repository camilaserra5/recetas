import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import SmallWithSocial from "../sections/Footer";

export default function LandingLayout(props) {
    return (
        <Flex
            direction="column"
            align="center"
            m="0 auto"
            {...props}
        >
            <Header />
            {props.children}

            <Footer />
        </Flex>
    );
}
