import React from 'react'
import styled from "styled-components"

const FooterContainer = styled.div`
    font-family:"Roboto";
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:0.85rem;
`

const Footer = () => {
    return (
        <FooterContainer>
            <p>Created by Natali Palacio 2020</p>
        </FooterContainer>
    );
};

export default Footer;