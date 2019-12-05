import React, { useContext } from "react";
import styled from "styled-components";
import ConfigContext from "../../../contexts/configContext";

const Logos = styled.div`
  display: flex;
`;

const Logo = styled.img`
  padding-right: 20pt;
  max-height: 100%;
  width: auto;
  &:not(:first-child) {
    border-left: 2pt solid grey;
    padding-left: 20pt;
  }
`;

export default ({ height = "4rem" }) => {
  const {
    constants: { campaignOwners }
  } = useContext(ConfigContext);
  return (
    <Logos>
      {campaignOwners &&
        campaignOwners.map((ownerImg, index) => (
          <Logo key={index} src={ownerImg} alt="Owner" style={{ height }} />
        ))}
    </Logos>
  );
};
