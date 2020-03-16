import React from 'react';
import styled from "styled-components";

const LogoFlou = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 35px;

  color: #000000;

  mix-blend-mode: normal;
  filter: blur(1.5px);

  transition: filter .3s ease-in-out;
  :hover {
    filter: none;
  }

`;

const LogoAppBar = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 47px;
  color: #FFFFFF;
  mix-blend-mode: normal;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const NAME = "manjoc";

interface LogoProps {
  flou: boolean;
  style?: React.CSSProperties;
}

function Manjoc(props: LogoProps) {
  return props.flou ? <LogoFlou style={props.style}>{NAME}</LogoFlou> : <LogoAppBar style={props.style}>{NAME}</LogoAppBar>;
};

export default Manjoc;
