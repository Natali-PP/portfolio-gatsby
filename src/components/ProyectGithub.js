import React from "react"
import styled from "styled-components"


const ViewProyectButton = styled.div`
    padding:.5rem 1rem;
    border:1px solid tomato;
    color:#DC4596;
    margin-top:1rem;
    a{
        font-size:1.25rem;
    }
`
const ProyectGithub = props => (
        
        <div>
            <ViewProyectButton> <a target="_blank" href={props.url}>Github Repo ⇨</a></ViewProyectButton>
        </div>
    
);

export default ProyectGithub;