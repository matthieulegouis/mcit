import React, { useContext } from "react";
import styled, { css } from "styled-components";
import ConfigContext from "../../../contexts/configContext";
import BuilderContext from "../../../contexts/builderContext";

const Colors = styled.div`
  display: flex;
  justify-content: center;
`;

const Color = styled.div`
  width: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  ${({ isCurrent }) =>
    isCurrent &&
    css`
      font-weight: bold;
      div {
        border: 4px solid #303f9f;
      }
    `}
`;

const Pastille = styled.div`
  background-color: ${({ color }) => color};
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

export default ({ ...props }) => {
  const { customise } = useContext(ConfigContext);
  const { builderConfig, setBuilderConfig } = useContext(BuilderContext);

  return (
    <Colors>
      {customise.colors &&
        customise.colors.map(({ value, name }, index) => (
          <Color
            key={index}
            isCurrent={builderConfig.background === value}
            onClick={() => setBuilderConfig("background", value)}
          >
            <Pastille color={value} />
            {name}
          </Color>
        ))}
    </Colors>
  );
};
