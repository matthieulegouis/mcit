import React, { useContext } from "react";
import styled from "styled-components";
import BuilderContext from "../../../contexts/builderContext";

const Logos = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  &:not(:last-child) {
    padding-right: 20pt;
  }

  img {
    width: auto;
    height: 60pt;
  }
`;

export default () => {
  const {
    builderConfig: { logo0, logo1, logo2, logo3 }
  } = useContext(BuilderContext);
  const logos = [logo0, logo1, logo2, logo3];

  return (
    <Logos>
      {logos.filter(Boolean).map((logo, index) => (
        <Logo key={index}>
          <img src={logo} alt={`logo-${index}`} />
        </Logo>
      ))}
    </Logos>
  );
};
